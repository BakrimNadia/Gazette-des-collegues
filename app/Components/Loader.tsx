import {Spinner} from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="flex gap-4">
      <Spinner size="lg" />
    </div> 
  );
}