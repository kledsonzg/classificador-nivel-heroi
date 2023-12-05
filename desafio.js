const expPorBoss = 500;
const nomeNiveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
const expNiveis = [1000, 2000, 5000, 7000, 8000, 9000, 10000];

let nomeDoHeroi = 'KledsonZG';
let nivelDoHeroi = '';
let emAventura = true;
let exp = 5000;

for(let i = 0; i < expNiveis.length; i++)
{
    if(exp <= expNiveis[i] )
    {
        nivelDoHeroi = nomeNiveis[i];
        break;
    }
}

if(emAventura)
{
    let expGanhado = 0;
    console.log('======================== AVENTURA DO HERÓI ========================');
    console.log('O Herói de nome **' + nomeDoHeroi + '** iniciou sua jornada no nível **' + nivelDoHeroi + '**' );
    console.log('===================================================================');

    while(nivelDoHeroi !== nomeNiveis[nomeNiveis.length - 1] )
    {
        let subiuDeNivel = false;
        console.log('O Herói de nome **' + nomeDoHeroi + '** derrotou um boss e recebeu + ' + expPorBoss + ' XP');

        exp += expPorBoss;

        for(let i = 0; i < expNiveis.length; i++)
        {
            if(exp <= expNiveis[i] )
            {
                if(nomeNiveis[i] !== nivelDoHeroi)
                {
                    nivelDoHeroi = nomeNiveis[i];
                    subiuDeNivel = true;
                } 
                else break;
            }
            else if(i === expNiveis.length - 1)
            {
                nivelDoHeroi = nomeNiveis[nomeNiveis.length - 1];
                subiuDeNivel = true;
            }

            if(subiuDeNivel)
            {              
                console.log('O Herói de nome **' + nomeDoHeroi + '** subiu para o nível **' + nivelDoHeroi + '**!');
                break;
            }
        }
    }

    console.log('======================== AVENTURA DO HERÓI ========================');
    console.log('O Herói de nome **' + nomeDoHeroi + '** finalizou sua jornada com sucesso!');
    console.log('===================================================================');
}

console.log('O Herói de nome **' + nomeDoHeroi + '** está no nível de **' + nivelDoHeroi + '**');