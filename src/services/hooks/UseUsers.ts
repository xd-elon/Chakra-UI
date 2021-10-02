import { useQuery } from "react-query";
import { api } from "../api";

type User =  {
    id: string;
    name: string;
    email: string;
    createdAt: string
}

async function getUser(): Promise<User[]>  {
    const { data } = await api.get('users')
        
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    });

    return users;
}

export function userUsers() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   return useQuery<User[]>('users', getUser, {
        staleTime: 1000 * 5
     })
}