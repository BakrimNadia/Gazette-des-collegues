export function addTokenPseudoAndRoleToLocalStorage(
    token: string,
    pseudo: string,
    role: string,
    avatar: string
  ) {
    localStorage.setItem('jwt', token);
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('role', role);
    localStorage.setItem('avatar', avatar);
  }
  
  export function getTokenAndPseudoFromLocalStorage() {
    const jwt = localStorage.getItem('jwt')!;
    const pseudo = localStorage.getItem('pseudo')!;
    const role = localStorage.getItem('role')!;
    const avatar = localStorage.getItem('avatar')!;
  
    return { jwt, pseudo, role, avatar };
  }