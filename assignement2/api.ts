interface info{
    id:number;
    title:string;
}
interface UserData{
    id:number;
    name:string;
    role:string;
    email:string;
    isActive:boolean;
    infos:info[]
}
interface APIresponse{
    success:boolean;
    message:string;
    data:UserData;
}