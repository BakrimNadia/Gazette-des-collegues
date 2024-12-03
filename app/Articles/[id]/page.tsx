'use client';

import { useParams } from 'next/navigation';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useEffect } from 'react';
import { IArticle } from '@/@types/article';
import { actionThunkArticleById, actionThunkArticleList, actionThunkDeleteArticle } from '@/lib/thunks/article.thunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Loader from '@/app/Components/Loader';
import { actionSetArticle, actionSetArticleId } from '@/lib/actions/article.action';

export default function DetailArticle() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const articleId = Number(id);

    useEffect(() => {
        console.log('Dispatching action to fetch article by ID');
        dispatch(actionSetArticleId(articleId));
        getArticleById();
    }, [dispatch]);

    async function getArticleById() {
        await dispatch(actionThunkArticleById());
    }
  const modified = useAppSelector((state) => state.article.isEdited);
  const removed = useAppSelector((state) => state.article.deleted);
  const article: IArticle = useAppSelector((state) => state.article.article);
  const isLoading = useAppSelector((state) => state.article.isloading);

  useEffect(() => {
    dispatch(actionThunkArticleList());
  }, [modified, removed, dispatch]);

  const userRole = useAppSelector((state) => state.auth.role); 
  const hasAccess = userRole === "Admin" || userRole === "Rédacteur";

  if (isLoading) {
    return <Loader />;
  }

  if (!article) {
    return <div>Aucune donnée trouvée pour cette article</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <Card className="py-4 border-none shadow-none"
     isPressable 
     onPress={() => console.log("item pressed")}>   
          <CardHeader className="mt-4 mb-4 pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-3xl">{article.title}</h4>
            <small className="text-default-500 font-bold">{article.articleAuthor?.firstname && article.articleAuthor?.lastname 
                ? `${article.articleAuthor.firstname} ${article.articleAuthor.lastname}` 
                : 'Auteur inconnu'}</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={article.title}
              className="object-cover h-[500px] w-[600px] rounded-xl transition-transform duration-500 transform hover:scale-105"
              src={article.picture}
              width={600}
            />
          </CardBody>
        </Card>
      </div>
      <div className="mt-8 mb-10 mx-8 text-justify">
        <h4 className="font-bold text-center text-xl mb-6">{article.subtitle}</h4>
        <p>{article.content}</p>
        <small>publié le {article.date_publication}</small>
      </div>
      {hasAccess && (
      <div className="text-center mb-10">
        <button className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5">Modifier</button>
        <button 
        className="bg-gradient-to-r from-red-500 to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5"
        onClick={async () => {
          dispatch(
            actionSetArticle({ name: 'title', value: article.title })
          );
          await dispatch(actionThunkDeleteArticle());
        }}
        >supprimer</button>
      </div>
      )}
    </div>
  );
}
