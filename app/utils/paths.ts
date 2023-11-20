import { paths } from '../constants/paths';

//This functions gets the pathname without the local.
export function getPathByPathName(pathName:string){
    const match = pathName.match(/\/\w+\//);
    let path = '/';

    if (match) {
      // if we find it, we return it.
      path = pathName.replace(match[0], '/');
    }

    return paths[path] || paths['/'];
  }