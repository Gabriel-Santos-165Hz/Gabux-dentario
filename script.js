// ==========================================
// MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ==========================================
// MODO ESCURO
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀";
        } else {
            themeBtn.textContent = "☾";
        }

    });
}


// ==========================================
// ANIMAÇÃO
// ==========================================

const elements = document.querySelectorAll(
    ".timeline-item, .gallery-card, .character-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });

} else {

    elements.forEach(element => {
        element.classList.add("show");
    });

}


// ==========================================
// CURIOSIDADES - PARTE 1
// ==========================================

const curiosidades = [

    {
        titulo: "O nome verdadeiro de Tiradentes",
        texto: "Seu nome era Joaquim José da Silva Xavier.",
        tipo: "FATO"
    },

    {
        titulo: "De onde veio o apelido Tiradentes?",
        texto: "O apelido está associado à sua atividade como prático de odontologia.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Tiradentes foi militar",
        texto: "Ele integrou tropas militares da Capitania de Minas Gerais e chegou ao posto de alferes.",
        tipo: "FATO"
    },

    {
        titulo: "A Inconfidência aconteceu no século XVIII",
        texto: "A conspiração ocorreu no contexto colonial do final dos anos 1700.",
        tipo: "HISTÓRIA"
    },

    {
        titulo: "O movimento foi descoberto antes de acontecer",
        texto: "A conspiração foi denunciada antes que o plano de revolta fosse colocado em prática.",
        tipo: "FATO"
    },

    {
        titulo: "Tiradentes foi executado em 1792",
        texto: "Sua execução ocorreu em 21 de abril de 1792, no Rio de Janeiro.",
        tipo: "FATO"
    },

    {
        titulo: "Tiradentes não era o único inconfidente",
        texto: "A conspiração envolveu diversos participantes, incluindo militares, religiosos, poetas e proprietários.",
        tipo: "FATO"
    },

    {
        titulo: "Tomás Antônio Gonzaga participou da conspiração",
        texto: "O poeta e jurista esteve entre os envolvidos na Inconfidência Mineira.",
        tipo: "FATO"
    },

    {
        titulo: "Cláudio Manuel da Costa era poeta",
        texto: "Cláudio Manuel da Costa foi poeta e advogado e participou da articulação do movimento.",
        tipo: "FATO"
    },

    {
        titulo: "A derrama fazia parte do contexto",
        texto: "A possibilidade de cobrança de impostos atrasados contribuiu para o ambiente de tensão em Minas.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O ouro era fundamental para Minas",
        texto: "A economia da região estava fortemente relacionada à mineração de ouro.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "A mineração entrou em crise",
        texto: "A queda da produção de ouro afetou a arrecadação da Coroa portuguesa.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "Ideias iluministas circularam em Minas",
        texto: "Ideias políticas do Iluminismo circularam entre setores letrados da sociedade colonial.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "A independência dos Estados Unidos era conhecida",
        texto: "A experiência das Treze Colônias americanas serviu como referência para alguns conspiradores.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O movimento tinha caráter separatista",
        texto: "Entre as propostas discutidas estava a separação de Minas Gerais do domínio português.",
        tipo: "FATO"
    },

    {
        titulo: "Havia uma proposta republicana",
        texto: "A criação de uma república estava entre as propostas associadas aos conspiradores.",
        tipo: "FATO"
    },

    {
        titulo: "A bandeira dos inconfidentes ficou famosa",
        texto: "A bandeira associada à Inconfidência traz a expressão latina 'Libertas quae sera tamen'.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A frase está em latim",
        texto: "A expressão significa aproximadamente 'Liberdade ainda que tardia'.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A bandeira inspirou Minas Gerais",
        texto: "A composição associada aos inconfidentes serviu de inspiração para a atual bandeira de Minas Gerais.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Tiradentes virou símbolo republicano",
        texto: "Depois da Proclamação da República, sua imagem ganhou importância na construção de símbolos nacionais.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "A imagem de Tiradentes mudou com o tempo",
        texto: "As representações artísticas de Tiradentes foram influenciadas pelas interpretações de diferentes épocas.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "Não existe retrato contemporâneo comprovado",
        texto: "As imagens mais conhecidas de Tiradentes são representações posteriores.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "O cabelo longo é uma representação famosa",
        texto: "A imagem de Tiradentes com cabelos longos e barba se consolidou principalmente em representações posteriores.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "Tiradentes era dentista?",
        texto: "Ele era um prático de odontologia, e não um dentista formado nos moldes profissionais atuais.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Ele teve diferentes profissões",
        texto: "Além da carreira militar e da prática odontológica, Tiradentes esteve envolvido em mineração e outros trabalhos.",
        tipo: "FATO"
    },

    {
        titulo: "Tiradentes circulou por diferentes regiões",
        texto: "Sua atividade profissional e militar fez com que circulasse por diferentes áreas de Minas Gerais.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Bárbara Heliodora faz parte dessa história",
        texto: "Bárbara Heliodora foi esposa de Alvarenga Peixoto e tornou-se personagem importante na memória da Inconfidência.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A conspiração envolveu poetas",
        texto: "Tomás Antônio Gonzaga e Cláudio Manuel da Costa estavam entre os poetas relacionados ao movimento.",
        tipo: "CULTURA"
    },

    {
        titulo: "Tiradentes era alferes",
        texto: "Alferes era uma patente militar existente no período colonial.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A Inconfidência não chegou a virar uma revolta",
        texto: "O movimento foi desarticulado antes que os planos dos conspiradores fossem executados.",
        tipo: "FATO"
    }
];

// ==========================================
// CURIOSIDADES - PARTE 2
// ==========================================

curiosidades.push(

    {
        titulo: "Houve uma investigação judicial",
        texto: "Depois da descoberta da conspiração, as autoridades realizaram uma investigação conhecida como devassa.",
        tipo: "FATO"
    },

    {
        titulo: "Os processos duraram anos",
        texto: "Os processos relacionados aos envolvidos se estenderam até 1792.",
        tipo: "FATO"
    },

    {
        titulo: "Tiradentes recebeu a pena de morte",
        texto: "Entre os envolvidos, Tiradentes acabou sendo o único executado pela sentença de morte.",
        tipo: "FATO"
    },

    {
        titulo: "Outros participantes receberam degredo",
        texto: "Diversos envolvidos foram condenados ao degredo em territórios africanos sob domínio português.",
        tipo: "FATO"
    },

    {
        titulo: "A execução ocorreu no Rio de Janeiro",
        texto: "Tiradentes foi executado no Rio de Janeiro em 21 de abril de 1792.",
        tipo: "FATO"
    },

    {
        titulo: "A execução foi pública",
        texto: "A execução ocorreu publicamente como parte da punição determinada pela Coroa.",
        tipo: "HISTÓRIA"
    },

    {
        titulo: "A punição servia como exemplo",
        texto: "A severidade da sentença fazia parte da lógica de punição da monarquia portuguesa.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O dia 21 de abril virou feriado",
        texto: "A data da morte de Tiradentes passou a ser reconhecida oficialmente como feriado nacional.",
        tipo: "FATO"
    },

    {
        titulo: "Existe uma Praça Tiradentes em Ouro Preto",
        texto: "Ouro Preto possui uma praça central que recebeu o nome de Tiradentes.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Ouro Preto era Vila Rica",
        texto: "A cidade atualmente conhecida como Ouro Preto era chamada Vila Rica durante o período colonial.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Vila Rica era importante na mineração",
        texto: "A antiga Vila Rica era um dos principais centros da economia mineradora de Minas Gerais.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O Museu da Inconfidência fica em Ouro Preto",
        texto: "O Museu da Inconfidência está localizado no centro histórico de Ouro Preto.",
        tipo: "FATO"
    },

    {
        titulo: "O museu ocupa um prédio histórico",
        texto: "O edifício está relacionado à antiga Casa da Câmara e Cadeia de Vila Rica.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "O Museu possui documentos históricos",
        texto: "Seu acervo reúne objetos e documentos relacionados à Inconfidência Mineira.",
        tipo: "FATO"
    },

    {
        titulo: "O museu também funciona como memorial",
        texto: "O espaço preserva a memória dos envolvidos na Inconfidência Mineira.",
        tipo: "FATO"
    },

    {
        titulo: "O Panteão faz parte do museu",
        texto: "O Panteão dos Inconfidentes integra o conjunto histórico do Museu da Inconfidência.",
        tipo: "FATO"
    },

    {
        titulo: "O Panteão foi inaugurado em 1942",
        texto: "O Panteão dos Inconfidentes foi inaugurado em Ouro Preto em 1942.",
        tipo: "FATO"
    },

    {
        titulo: "O museu abriu suas portas em 1944",
        texto: "A abertura do Museu da Inconfidência ocorreu em 11 de agosto de 1944.",
        tipo: "FATO"
    },

    {
        titulo: "A memória dos inconfidentes foi construída posteriormente",
        texto: "A forma como os participantes são lembrados mudou ao longo dos séculos.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "A República teve papel importante nessa memória",
        texto: "Após 1889, houve maior valorização pública da Inconfidência e de Tiradentes.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "A figura de Tiradentes ganhou características religiosas",
        texto: "Algumas representações posteriores associaram sua imagem a símbolos religiosos e de martírio.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "Essa imagem não surgiu imediatamente",
        texto: "A transformação de Tiradentes em símbolo nacional foi um processo histórico gradual.",
        tipo: "MEMÓRIA"
    },

    {
        titulo: "O termo inconfidência tem origem colonial",
        texto: "No contexto português, 'inconfidência' estava relacionado à ideia de deslealdade ou traição ao soberano.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Também existe o termo Conjuração Mineira",
        texto: "A Inconfidência Mineira também é chamada de Conjuração Mineira em parte da historiografia.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A conspiração ocorreu em Minas Gerais",
        texto: "O principal espaço de articulação do movimento foi a Capitania de Minas Gerais.",
        tipo: "FATO"
    },

    {
        titulo: "A sociedade mineira era desigual",
        texto: "A sociedade colonial era marcada por fortes diferenças econômicas e sociais.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "A escravidão fazia parte da sociedade da época",
        texto: "A economia e a sociedade colonial mineira eram profundamente marcadas pela escravidão.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "A elite local teve forte presença",
        texto: "Muitos envolvidos pertenciam às elites econômicas, militares, religiosas e intelectuais.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "Tiradentes não era o único militar",
        texto: "Outros militares participaram da articulação da Inconfidência Mineira.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Francisco de Paula Freire de Andrade participou",
        texto: "Ele era tenente-coronel e esteve entre os envolvidos na conspiração.",
        tipo: "FATO"
    },

    {
        titulo: "José Álvares Maciel participou da articulação",
        texto: "Maciel foi um dos nomes ligados aos planos dos inconfidentes.",
        tipo: "FATO"
    },

    {
        titulo: "Alvarenga Peixoto era poeta",
        texto: "Inácio José de Alvarenga Peixoto foi poeta e participou da Inconfidência.",
        tipo: "FATO"
    },

    {
        titulo: "A poesia e a política se encontravam",
        texto: "Alguns participantes eram escritores e poetas envolvidos com debates políticos e culturais.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "Tomás Antônio Gonzaga escreveu Marília de Dirceu",
        texto: "Gonzaga ficou conhecido também por sua obra poética Marília de Dirceu.",
        tipo: "CULTURA"
    },

    {
        titulo: "A literatura ajudou a construir a memória",
        texto: "Obras literárias contribuíram para a forma como a Inconfidência passou a ser lembrada.",
        tipo: "CULTURA"
    },

    {
        titulo: "Cecília Meireles escreveu sobre a Inconfidência",
        texto: "A escritora produziu o Romanceiro da Inconfidência.",
        tipo: "CULTURA"
    },

    {
        titulo: "O Romanceiro mistura história e poesia",
        texto: "A obra utiliza poesia para interpretar personagens e acontecimentos ligados à Inconfidência.",
        tipo: "CULTURA"
    },

    {
        titulo: "A bandeira possui um triângulo vermelho",
        texto: "A atual bandeira de Minas Gerais possui um triângulo vermelho associado à tradição dos inconfidentes.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A frase da bandeira está em latim",
        texto: "'Libertas quae sera tamen' é escrita em latim.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A frase é relacionada a Virgílio",
        texto: "O lema é tradicionalmente relacionado a uma passagem das Bucólicas de Virgílio.",
        tipo: "CULTURA"
    },

    {
        titulo: "A mineração moldou a região",
        texto: "A exploração de ouro influenciou profundamente a formação econômica e urbana de Minas Gerais.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O ouro era tributado pela Coroa",
        texto: "A Coroa portuguesa cobrava impostos relacionados à produção de ouro.",
        tipo: "CONTEXTO"
    },

    {
        titulo: "O quinto era um imposto importante",
        texto: "O quinto correspondia a uma parcela da produção de ouro destinada à Coroa portuguesa.",
        tipo: "CURIOSIDADE"
    },

    {
        titulo: "A derrama estava relacionada às dívidas tributárias",
        texto: "A cobrança extraordinária seria utilizada para completar valores de impostos considerados devidos.",
        tipo: "CONTEXTO"
    }

);

curiosidades.push(
    {
        titulo: "Tiradentes era alferes",
        texto: "Joaquim José da Silva Xavier recebeu a patente de alferes, uma posição militar abaixo das patentes mais altas.",
        tipo: "FATO"
    },
    {
        titulo: "Tiradentes também trabalhou como dentista",
        texto: "O apelido Tiradentes ficou associado ao trabalho que ele realizava como dentista prático.",
        tipo: "CURIOSIDADE"
    },
    {
        titulo: "Tiradentes nasceu em Minas Gerais",
        texto: "Ele nasceu na região de São João del-Rei, em Minas Gerais, em 1746.",
        tipo: "FATO"
    },
    {
        titulo: "A mineração influenciou a revolta",
        texto: "A importância econômica da mineração ajudou a criar conflitos entre a população local e a administração portuguesa.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "O quinto era um imposto",
        texto: "O quinto determinava que uma parte do ouro extraído deveria ser destinada à Coroa portuguesa.",
        tipo: "FATO"
    },
    {
        titulo: "A derrama gerava tensão",
        texto: "A possibilidade de cobrança forçada de impostos atrasados aumentava a insatisfação entre setores da população.",
        tipo: "CURIOSIDADE"
    },
    {
        titulo: "O movimento tinha diferentes participantes",
        texto: "A Inconfidência reuniu pessoas de diferentes atividades e posições sociais, embora seus interesses não fossem necessariamente iguais.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "Cláudio Manuel da Costa participou",
        texto: "O poeta e advogado Cláudio Manuel da Costa esteve ligado ao movimento da Inconfidência Mineira.",
        tipo: "FATO"
    },
    {
        titulo: "Tomás Antônio Gonzaga participou",
        texto: "Tomás Antônio Gonzaga, conhecido por sua produção literária, também foi associado à Inconfidência Mineira.",
        tipo: "FATO"
    },
    {
        titulo: "Inácio José de Alvarenga Peixoto",
        texto: "Alvarenga Peixoto foi outro poeta relacionado aos acontecimentos da Inconfidência Mineira.",
        tipo: "FATO"
    },
    {
        titulo: "A literatura registrou a Inconfidência",
        texto: "Poemas e obras literárias ajudaram a preservar diferentes interpretações sobre os acontecimentos de Minas Gerais.",
        tipo: "CULTURA"
    },
    {
        titulo: "O movimento ocorreu no século XVIII",
        texto: "A Inconfidência Mineira aconteceu no final do século XVIII, durante o período colonial brasileiro.",
        tipo: "FATO"
    },
    {
        titulo: "Tiradentes morreu em 1792",
        texto: "A execução de Tiradentes aconteceu em 21 de abril de 1792, no Rio de Janeiro.",
        tipo: "FATO"
    },
    {
        titulo: "21 de abril é feriado nacional",
        texto: "O dia 21 de abril é feriado nacional no Brasil em homenagem a Tiradentes.",
        tipo: "BRASIL"
    },
    {
        titulo: "Tiradentes virou símbolo nacional",
        texto: "Ao longo da história brasileira, Tiradentes passou a representar ideias relacionadas à independência e à luta contra a dominação colonial.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "A imagem de Tiradentes mudou com o tempo",
        texto: "Representações posteriores ajudaram a construir a imagem de Tiradentes como um dos principais símbolos históricos do Brasil.",
        tipo: "CURIOSIDADE"
    },
    {
        titulo: "O movimento foi descoberto antes de começar",
        texto: "A conspiração foi denunciada às autoridades antes que os planos de revolta fossem colocados em prática.",
        tipo: "FATO"
    },
    {
        titulo: "A denúncia mudou os planos",
        texto: "Depois das denúncias, as autoridades portuguesas iniciaram investigações contra os envolvidos.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "A investigação ficou conhecida como Devassa",
        texto: "O processo de investigação dos envolvidos ficou conhecido como Devassa da Inconfidência Mineira.",
        tipo: "FATO"
    },
    {
        titulo: "Tiradentes foi preso",
        texto: "Tiradentes foi preso no Rio de Janeiro após a descoberta da conspiração.",
        tipo: "FATO"
    },
    {
        titulo: "O julgamento envolveu vários acusados",
        texto: "Diversos participantes foram investigados e julgados após a descoberta da conspiração.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "As penas foram modificadas",
        texto: "Muitos dos condenados inicialmente à morte tiveram suas penas modificadas posteriormente.",
        tipo: "FATO"
    },
    {
        titulo: "Tiradentes recebeu a pena máxima",
        texto: "Entre os envolvidos, Tiradentes foi o único executado pela Coroa portuguesa.",
        tipo: "FATO"
    },
    {
        titulo: "A execução ocorreu no Rio de Janeiro",
        texto: "Apesar de a conspiração estar ligada principalmente a Minas Gerais, Tiradentes foi executado no Rio de Janeiro.",
        tipo: "CURIOSIDADE"
    },
    {
        titulo: "A memória de Tiradentes foi construída depois",
        texto: "A importância simbólica de Tiradentes cresceu principalmente após sua morte e durante períodos posteriores da história brasileira.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "A República ajudou a fortalecer seu símbolo",
        texto: "Durante a República, Tiradentes ganhou ainda mais destaque como personagem associado à ideia de liberdade.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "Tiradentes aparece em monumentos",
        texto: "Diversas cidades brasileiras possuem ruas, praças, estátuas e monumentos dedicados a Tiradentes.",
        tipo: "CULTURA"
    },
    {
        titulo: "Existem várias representações de Tiradentes",
        texto: "Pinturas, esculturas, livros e filmes apresentam diferentes representações do personagem histórico.",
        tipo: "CULTURA"
    },
    {
        titulo: "A Inconfidência aconteceu em Minas Gerais",
        texto: "Grande parte dos acontecimentos relacionados à conspiração ocorreu na então Capitania de Minas Gerais.",
        tipo: "FATO"
    },
    {
        titulo: "Vila Rica era um centro importante",
        texto: "Vila Rica, atual Ouro Preto, era um dos principais centros econômicos e políticos da região mineradora.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "Ouro Preto preserva parte dessa história",
        texto: "Ouro Preto possui diversos edifícios e espaços históricos relacionados ao período colonial mineiro.",
        tipo: "CULTURA"
    },
    {
        titulo: "A Inconfidência faz parte da história escolar",
        texto: "O movimento é estudado nas escolas brasileiras como um importante episódio do período colonial.",
        tipo: "EDUCAÇÃO"
    },
    {
        titulo: "Tiradentes é lembrado todos os anos",
        texto: "Todos os anos, em 21 de abril, o Brasil realiza homenagens e atividades relacionadas à memória de Tiradentes.",
        tipo: "BRASIL"
    },
    {
        titulo: "A história possui diferentes interpretações",
        texto: "Historiadores analisam a Inconfidência considerando os interesses políticos, econômicos e sociais de seus participantes.",
        tipo: "HISTÓRIA"
    },
    {
        titulo: "A Inconfidência não foi uma revolução realizada",
        texto: "O movimento permaneceu no campo da conspiração porque foi descoberto antes de uma revolta organizada acontecer.",
        tipo: "FATO"
    }
);


// ===============================
// SISTEMA DE CURIOSIDADES
// ===============================

let curiosidadesDisponiveis = [...curiosidades];
let ultimaCuriosidade = null;
let curiosidadeAtual = null;
let totalDescobertas = 0;
let totalFavoritas = 0;


// ===============================
// MOSTRAR CURIOSIDADE
// ===============================

function mostrarCuriosidade() {

    if (curiosidadesDisponiveis.length === 0) {

        curiosidadesDisponiveis = [...curiosidades];

        if (curiosidadesDisponiveis.length > 1 && ultimaCuriosidade) {

            curiosidadesDisponiveis =
                curiosidadesDisponiveis.filter(
                    item => item.titulo !== ultimaCuriosidade
                );

        }

    }

    const indice = Math.floor(
        Math.random() * curiosidadesDisponiveis.length
    );

    const curiosidade =
        curiosidadesDisponiveis[indice];

    curiosidadesDisponiveis.splice(indice, 1);

    ultimaCuriosidade =
        curiosidade.titulo;

    curiosidadeAtual =
        curiosidade;

    totalDescobertas++;

    exibirCuriosidadeNaTela(curiosidade);

    atualizarEstatisticas();
}


// ===============================
// MOSTRAR NA TELA
// ===============================

function exibirCuriosidadeNaTela(curiosidade) {

    const painel =
        document.getElementById("curiosityPanel");

    if (!painel) {
        console.warn(
            "Painel de curiosidade não encontrado."
        );
        return;
    }

    const numero =
        document.getElementById("curiosityNumber");

    const titulo =
        document.getElementById("curiosityTitle");

    const texto =
        document.getElementById("curiosityText");

    const tipo =
        document.getElementById("curiosityType");


    if (numero) {

        numero.textContent =
            totalDescobertas;

    }


    if (titulo) {

        titulo.textContent =
            curiosidade.titulo;

    }


    if (texto) {

        texto.textContent =
            curiosidade.texto;

    }


    if (tipo) {

        tipo.textContent =
            curiosidade.tipo;

    }


    // Reseta o botão de favorito
    const favoriteBtn =
        document.getElementById("favoriteBtn");

    if (favoriteBtn) {

        favoriteBtn.textContent =
            "♡ Favoritar";

        favoriteBtn.classList.remove(
            "favorited"
        );

    }


    // Animação

    painel.classList.remove(
        "curiosity-animada"
    );

    void painel.offsetWidth;

    painel.classList.add(
        "curiosity-animada"
    );

}


// ===============================
// ATUALIZAR ESTATÍSTICAS
// ===============================

function atualizarEstatisticas() {

    const descobertas =
        document.getElementById(
            "discoveredCount"
        );

    const favoritas =
        document.getElementById(
            "favoriteCount"
        );

    const disponiveis =
        document.getElementById(
            "availableCount"
        );


    if (descobertas) {

        descobertas.textContent =
            totalDescobertas;

    }


    if (favoritas) {

        favoritas.textContent =
            totalFavoritas;

    }


    if (disponiveis) {

        disponiveis.textContent =
            curiosidadesDisponiveis.length;

    }

}


// ===============================
// BOTÃO DA CURIOSIDADE
// ===============================

const curiosidadeBtn =
    document.getElementById(
        "curiosityBtn"
    );


if (curiosidadeBtn) {

    curiosidadeBtn.addEventListener(
        "click",
        mostrarCuriosidade
    );

}


// ===============================
// BOTÃO FAVORITAR
// ===============================

const favoriteBtn =
    document.getElementById(
        "favoriteBtn"
    );


if (favoriteBtn) {

    favoriteBtn.addEventListener(
        "click",
        () => {

            // Não deixa favoritar antes
            // de descobrir uma curiosidade

            if (!curiosidadeAtual) {

                return;

            }


            const estaFavoritada =
                favoriteBtn.classList.contains(
                    "favorited"
                );


            if (!estaFavoritada) {

                totalFavoritas++;

                favoriteBtn.textContent =
                    "♥ Favoritado";

                favoriteBtn.classList.add(
                    "favorited"
                );

            } else {

                totalFavoritas--;

                favoriteBtn.textContent =
                    "♡ Favoritar";

                favoriteBtn.classList.remove(
                    "favorited"
                );

            }


            atualizarEstatisticas();

        }
    );

}


// ===============================
// ATALHO DO TECLADO
// C = curiosidade
// ===============================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() === "c" &&
            event.target.tagName !== "INPUT" &&
            event.target.tagName !== "TEXTAREA"
        ) {

            if (curiosidadeBtn) {

                mostrarCuriosidade();

            }

        }

    }
);


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

window.addEventListener(
    "scroll",
    () => {

        if (
            typeof topBtn !== "undefined" &&
            topBtn
        ) {

            if (window.scrollY > 400) {

                topBtn.classList.add(
                    "visible"
                );

            } else {

                topBtn.classList.remove(
                    "visible"
                );

            }

        }

    }
);


// ===============================
// ESTATÍSTICAS INICIAIS
// ===============================

atualizarEstatisticas();


// ===============================
// CONSOLE
// ===============================

console.log(
    "Site de Tiradentes carregado com sucesso!"
);

console.log(
    `${curiosidades.length} curiosidades disponíveis.`
);