import config from '../config';

function create(objetoDoVideo){
    console.log(config.URL_BACKEND_TOP)

    const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) =>{

            if(respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possível cadastrar os dados!')

        });
}

export default{
    create,
};


//esse evia videos para home
//o categorias, a cima, pega esses videos
//ainda tem q fazer um para deletar videos