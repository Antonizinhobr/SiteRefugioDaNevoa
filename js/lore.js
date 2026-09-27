document.addEventListener("DOMContentLoaded", () => {
  const historias = {
    1: {
      nome: "A Entidade",
      funcao: "Divindade Cósmica",
      desc: `A Entidade é um ser cósmico primordial, uma teia de puro mal que existe na vastidão entre os mundos. Sem uma forma física absoluta, manifesta-se através da Névoa Negra e de garras aracnídeas de obsidiana.<br><br>Alimenta-se das emoções mais extremas da alma humana: o desespero paralisante e, paradoxalmente, a esperança ardente. Para se sustentar, ela rapta indivíduos de diferentes eras e dimensões, isolando-os em Reinos construídos a partir das memórias sombrias dos próprios Assassinos.<br><br>A Entidade força um ciclo eterno de sacrifício conhecido como os Julgamentos (Trials). Os Assassinos, muitos deles torturados até à submissão total pela própria Entidade, são forçados a caçar. Os Sobreviventes, por sua vez, devem manter a esperança viva para fugir. Cada vez que escapam, são puxados de volta para a fogueira, até que a sua esperança seque e as suas almas vazias sejam descartadas no Vazio.`,
    },
    25: {
      nome: "The Trapper",
      funcao: "Assassino",
      desc: `Evan MacMillan idolatrava o seu pai, Archie MacMillan, o implacável dono da Propriedade MacMillan. Evan geria os trabalhadores das minas com mão de ferro, punindo brutalmente qualquer falha.<br><br>Quando a mente do seu pai sucumbiu a uma loucura paranoica, Archie exigiu uma prova definitiva de lealdade. Sem hesitar, Evan guiou mais de cem mineiros para os túneis mais profundos da montanha e detonou os explosivos, selando-os vivos na escuridão para morrerem sufocados. Foi o maior massacre não resolvido da história local.<br><br>Quando as autoridades investigaram a propriedade, encontraram Archie morto no porão. Evan desapareceu sem deixar rasto. A Entidade já o havia reivindicado. Evan resistiu, mas a Entidade espetou ganchos metálicos na sua carne, torturando-o até que a sua mente se quebrasse completamente, tornando-o no primeiro e mais fiel executor da Névoa.`,
    },
    26: {
      nome: "The Wraith",
      funcao: "Assassino",
      desc: `Philip Ojomo chegou aos Estados Unidos cheio de esperança após fugir dos horrores de um conflito no seu país natal. Encontrou trabalho no Ferro-Velho Autohaven, gerido por um homem corrupto chamado Azarov. A vida era simples: ele operava o compactador de carros, esmagando metal velho em cubos.<br><br>Um dia, ao inspecionar o porta-bagagens de um carro prestes a ser esmagado, encontrou um jovem amordaçado. Quando Philip o libertou, Azarov apareceu e cortou a garganta do jovem. Azarov revelou que o ferro-velho era um local de descarte para vítimas do cartel, e Philip, sem saber, tinha sido o carrasco de centenas de pessoas esmagadas vivas dentro dos veículos.<br><br>A mente de Philip estalou. A sua fúria foi tão avassaladora que ele atirou Azarov para o compactador e, enquanto este era esmagado, Philip puxou a cabeça e a coluna vertebral do patrão para fora do corpo, usando-a como uma arma grotesca antes de desaparecer na Névoa.`,
    },
    27: {
      nome: "The Hillbilly",
      funcao: "Assassino",
      desc: `Filho indesejado de Evelyn e Max Thompson, proprietários da próspera Coldwind Farm, o rapaz nasceu terrivelmente desfigurado. Envergonhados, os pais nunca lhe deram um nome, escondendo-o numa sala murada com apenas um pequeno buraco pelo qual passavam restos de comida.<br><br>O rapaz cresceu no escuro, isolado do mundo, alimentando um ódio profundo por tudo o que vivia fora da sua prisão. O único contacto que tinha com a luz era através do buraco na parede. A sua mente desenvolveu-se de forma retorcida e selvagem.<br><br>Eventualmente, conseguiu escapar da sua cela. Encontrou uma motosserra no celeiro e invadiu a casa principal, chacinando os pais que o haviam torturado a vida inteira. Livre pela primeira vez, ele continuou a vaguear pelos campos de milho, massacrando todos os animais e pessoas que se atreviam a pisar na fazenda, até que a Entidade o chamou.`,
    },
    28: {
      nome: "The Nurse",
      funcao: "Assassino",
      desc: `Sally Smithson mudou-se para a cidade com sonhos de uma vida feliz numa casa de madeira com o marido, Andrew. Mas o destino foi cruel: Andrew morreu num acidente de trabalho, deixando Sally com dívidas esmagadoras. Sem opções, ela aceitou um trabalho terrível no Manicómio Crotus Prenn.<br><br>Durante duas décadas, Sally suportou os horrores daquele lugar. Viu os abusos dos guardas, os gritos incessantes dos loucos e a podridão humana no seu estado mais puro. Dia após dia, a sua própria sanidade começou a fragmentar-se.<br><br>Certa manhã, a pressão tornou-se demasiada. Sally acreditou que a única forma de curar aquelas almas atormentadas era libertá-las dos seus corpos. Uma a uma, ela estrangulou mais de cinquenta pacientes nas suas camas. Quando os médicos chegaram, encontraram Sally a balançar suavemente no meio do massacre. A Névoa levou-a antes que pudesse ser julgada.`,
    },
    29: {
      nome: "The Hag",
      funcao: "Assassino",
      desc: `Lisa Sherwood cresceu numa aldeia pacífica e isolada, aprendendo as tradições e rituais mágicos dos anciãos, envolvendo amuletos de boa sorte e símbolos desenhados na terra. Um dia, ao caminhar para casa sob uma tempestade, foi emboscada por canibais que habitavam as profundezas do pântano.<br><br>Acordou acorrentada na escuridão, cercada por outros prisioneiros famintos. Semanas passaram-se. Os canibais cortavam pedaços de carne dos prisioneiros ainda vivos para se alimentarem. Lisa foi consumida até aos ossos, os seus braços desfigurados, mas recusou-se a morrer.<br><br>Num último esforço de desespero e ódio, Lisa usou o seu próprio sangue para desenhar os símbolos que lhe tinham sido ensinados, mas desta vez, não pediu proteção. Pediu vingança. A Entidade atendeu. Lisa transformou-se num monstro cadavérico de lama e fome, despedaçando os seus captores com garras recém-formadas.`,
    },
    30: {
      nome: "The Doctor",
      funcao: "Assassino",
      desc: `Herman Carter era um prodígio da neurociência, cujas teorias sobre o mapeamento do cérebro humano atraíram a atenção da CIA. Ele foi levado para uma instalação clandestina no Instituto Memorial Léry, encarregado de extrair informações de prisioneiros e espiões através de métodos extremos de eletrochoque.<br><br>Mas Carter não queria apenas extrair informações; ele queria o controlo absoluto da mente humana. Começou a usar prisioneiros vivos como cobaias para tratamentos de choque devastadores, fritos até a loucura ou a morte vegetativa.<br><br>A sua obsessão consumiu a sua humanidade. Quando a agência finalmente investigou o silêncio de Léry, encontraram um cenário de pesadelo: pacientes mutilados, médicos e guardas com os cérebros fritados, e Carter no centro de tudo, tendo ligado eletrodos ao próprio cérebro. A Entidade abraçou o Doutor e a sua sede infinita de tratamento letal.`,
    },
    31: {
      nome: "The Huntress",
      funcao: "Assassino",
      desc: `Anna cresceu no coração isolado da Floresta Vermelha, na Rússia. A sua mãe ensinou-lhe a sobreviver no frio implacável, a rastrear e a caçar. Um dia, um alce gigantesco atacou-as. A mãe de Anna salvou-a, mas foi fatalmente empalada pelos chifres da besta. Antes de morrer, cantou uma última canção de embalar para a filha.<br><br>Sozinha, Anna cresceu para se tornar num predador alfa. Usando uma máscara de lebre que a sua mãe lhe tinha feito, começou por caçar pequenos animais, depois ursos, e finalmente humanos que ousavam entrar na floresta, abatendo madeireiros e soldados.<br><br>Apesar da sua brutalidade, o seu instinto maternal nunca desapareceu. Anna frequentemente raptoava as filhas mais novas das suas vítimas, trancando-as na sua cabana na esperança de criar uma família. Mas como ignorava como cuidar delas, as crianças sempre morriam de fome ou frio. Os seus lamentos fundiram-se com a sua caçada na Névoa.`,
    },
    32: {
      nome: "The Clown",
      funcao: "Assassino",
      desc: `Kenneth Chase teve uma infância sombria. Após a morte prematura da sua mãe, o seu pai tornou-se num alcoólico amargurado. Kenneth encontrou refúgio na crueldade. Começou por capturar insetos, depois pássaros, esquilos e cães, drogando-os e matando-os. A sua assinatura era cortar partes dos animais, colecionando penas e dentes.<br><br>Na vida adulta, adotou o pseudónimo Jeffrey Hawk e fugiu para se juntar a um circo itinerante como palhaço. O circo oferecia o disfarce perfeito. Ao viajar de cidade em cidade, ele aperfeiçoou misturas químicas tóxicas para sedar homens fortes e mulheres jovens.<br><br>Ele atraía-os, drogava-os, matava-os e cortava o dedo indicador de cada vítima para adicionar à sua coleção macabra. O seu apetite por violência e a sua barriga cresceram descontroladamente. Quando a polícia estava finalmente a cercar o circo, o cavalo da sua caravana desviou-se para uma densa Névoa Negra, de onde o Palhaço nunca mais saiu.`,
    },
    33: {
      nome: "The Spirit",
      funcao: "Assassino",
      desc: `Rin Yamaoka era a única filha de uma família japonesa com raízes antigas e um passado sombrio ligado aos samurais. A família lutava com dívidas esmagadoras. Para pagar a faculdade de Rin, a mãe trabalhava dia e noite. O pai de Rin, após ser demitido sem justificação de um emprego de longa data após anos de sacrifício, quebrou mentalmente sob o peso da desonra e do fracasso financeiro.<br><br>Certa noite, ao voltar da universidade, Rin encontrou a sua casa silenciosa e o corpo da sua mãe mutilado no chão. Antes que pudesse reagir, o seu pai apareceu das sombras empunhando uma katana ancestral. Ele desmembrou Rin brutalmente, cortando os seus membros, o estômago e quebrando o vidro por todo o seu corpo.<br><br>Enquanto agonizava no chão, Rin não sentiu medo, apenas uma fúria ancestral abrasadora. Ela prometeu que faria qualquer coisa por vingança. A Entidade ouviu o seu ódio puro. O corpo de Rin levantou-se, agora como um espírito de retaliação focado apenas no massacre.`,
    },
    34: {
      nome: "The Legion",
      funcao: "Assassino",
      desc: `Em Ormond, uma cidade esquecida pela economia no Canadá, um adolescente rebelde chamado Frank conheceu Julie, uma rapariga aborrecida com o mundo. Em pouco tempo, recrutaram Joey, um jovem expulso do liceu, e Susie, uma aluna tímida e impressionável. Juntos, formaram A Legião, dedicados ao vandalismo e a quebrar regras apenas pela emoção.<br><br>A escalada de violência atingiu o limite na noite em que decidiram assaltar a loja onde o contínuo do liceu trabalhava. O assalto correu mal e o contínuo agarrou Julie. Num instinto primitivo, Frank esfaqueou-o nas costas.<br><br>Para garantir a cumplicidade absoluta do grupo, Frank forçou a faca nas mãos de Julie, Joey e Susie, obrigando cada um a esfaquear o homem agonizante até à morte. Unidos pelo sangue e pelo pânico, esconderam o corpo numa cabana isolada na montanha de Ormond. Lá, a Névoa engoliu o grupo inteiro, fundindo-os num coletivo sanguinário governado pela Entidade.`,
    },
    35: {
      nome: "The Plague",
      funcao: "Assassino",
      desc: `Adiris foi deixada nas escadarias do Templo do Purgatório na Babilónia quando era apenas um bebé. Ela cresceu para se tornar a mais devota Alta Sacerdotisa, amada pelos fiéis e acreditando que falava diretamente com os deuses.<br><br>Quando uma terrível peste apodreceu a cidade, marcando as vítimas com feridas supurantes e vómito negro, o povo virou-se para ela. Num ato extremo de sacrifício e desespero, Adiris cortou o próprio dedo num ritual para apaziguar os deuses, mas acabou por contrair a doença. Com o corpo coberto de chagas e o fim próximo, ela liderou milhares dos seus seguidores doentes para as catacumbas do templo para rezar até a morte os levar.<br><br>No fundo da caverna escura, enquanto Adiris cuspia sangue e a sua vida se desvanecia, ela implorou aos deuses uma última vez. Uma força antiga e sombria respondeu ao seu fervor. A Entidade ressuscitou-a não como a salvadora do seu povo, mas como a portadora eterna da infeção e destruição.`,
    },
    36: {
      nome: "The Oni",
      funcao: "Assassino",
      desc: `Kazan Yamaoka foi um guerreiro excecional no Japão feudal, mas a sua alma fervia de raiva contra os guerreiros que se chamavam falsamente de Samurais. Decidido a limpar a honra da classe, abandonou a sua família e viajou pelo país em busca de combates, trucidando brutalmente camponeses e lordes que ele julgava indignos.<br><br>A sua brutalidade foi tão extrema que o povo começou a chamá-lo de Oni-Yamaoka (Yamaoka, o Demónio). O seu pai tentou detê-lo e, num momento de fúria cega, Kazan decapitou-o, apercebendo-se do seu crime um segundo tarde demais.<br><br>Ao tentar fugir, um exército de camponeses enfurecidos encurralou-o num moinho de vento. Sozinho, Kazan matou dezenas deles com a sua katana e um pesado kanabo coberto de sangue, até que o peso dos números o esmagou. Foi deixado para apodrecer no moinho, mas quando regressaram para queimar o corpo, o moinho estava vazio. O Oni tinha nascido na Névoa.`,
    },
    37: {
      nome: "The Deathslinger",
      funcao: "Assassino",
      desc: `Caleb Quinn, um brilhante inventor irlando-americano, criou ferramentas cruciais no Velho Oeste, incluindo uma arma modificada que disparava pontas ferroviárias. No entanto, o seu chefe sem escrúpulos, Henry Bayshore, roubou as patentes de Caleb e vendeu-as. Num ataque de raiva, Caleb invadiu a companhia, disparou contra Bayshore e feriu-o gravemente, sendo condenado à terrível Prisão de Hellshire.<br><br>Na prisão, o diretor astuto fez um acordo com Caleb: se ele usasse a sua inteligência para construir armas e capturar foragidos como caçador de recompensas, veria a sua sentença reduzida. Caleb aceitou, modificando a sua arma numa carabina que disparava um arpão com corrente, desenhado para arrastar criminosos de volta vivos.<br><br>Mas o diretor traiu Caleb e libertou Bayshore do hospital. Percebendo que tinha sido manipulado durante anos, a fúria de Caleb explodiu. Ele e a sua gangue de presos massacraram os guardas, prenderam o diretor e Bayshore, torturando-os lentamente. O banho de sangue invocou a Névoa Negra.`,
    },
    38: {
      nome: "The Blight",
      funcao: "Assassino",
      desc: `Talbot Grimes era um químico escocês genial e letal. Empregado pela Companhia das Índias Orientais, ele criou toxinas que aumentavam a eficiência dos trabalhadores sob o preço das suas vidas. Depois de ver milhares morrerem pela sua criação na Índia, foi sequestrado por vítimas de um acampamento, esmurrado, e atirado para uma cova em massa.<br><br>Salvo por um monge culto no último momento, Talbot tentou recomeçar a sua vida na obscuridade. Mas o destino atirou-o para o Reino da Entidade. Não como um assassino inicialmente, mas como um prisioneiro. Lá, ele descobriu as Pústulas - flores alaranjadas que cresciam em torno de totens e ganchos, puras manifestações do poder da Entidade.<br><br>Com uma obsessão insaciável, Talbot usou equipamento rudimentar para extrair o Soro de Putrefação das flores e injetá-lo no seu próprio corpo. As injeções sucessivas deformaram os seus ossos, fundiram a sua mente e transformaram-no numa abominação química impulsionada unicamente por um desejo frenético de violência e colheita.`,
    },
    39: {
      nome: "The Twins",
      funcao: "Assassino",
      desc: `Charlotte e Victor Deshayes nasceram num asilo em França no século XVII. Eles eram gémeos siameses, com o pequeno corpo de Victor emergindo do peito de Charlotte. Vistos como monstros ou demónios pela sociedade da época, a sua mãe tentou escondê-los na floresta, mas caçadores de bruxas encontraram-nos. A mãe foi queimada viva, e os gémeos capturados para serem exibidos numa jaula.<br><br>Eles viveram anos em agonia e abuso às mãos de um culto de encapuzados. Num momento de desespero e tentativa de fuga, Charlotte usou uma faca roubada para ferir os seus captores, mas o frágil Victor foi morto na luta.<br><br>Carregando o cadáver do próprio irmão em apodrecimento preso ao seu corpo, Charlotte fugiu para as catacumbas de Paris. Lá, encurralada mais uma vez pela sociedade, um nevoeiro denso e sufocante preencheu a sala. Charlotte sentiu um espasmo no peito. A Entidade não só os tinha reclamado, como reanimou o corpo de Victor, fundindo o instinto de proteção dela com a fome bestial dele.`,
    },
    40: {
      nome: "The Trickster",
      funcao: "Assassino",
      desc: `Ji-Woon Hak era o deslumbrante membro principal da banda sul-coreana NO SPIN. Adorado pelos fãs, a sua vaidade escondia um vazio profundo que a fama não conseguia preencher. Num dia de gravação, um incêndio elétrico tomou conta do estúdio. Ji-Woon teve a oportunidade de salvar os seus colegas de banda, mas, encantado pelo som dos seus gritos a misturarem-se com as chamas, deixou-os morrer, tornando-se o único centro das atenções.<br><br>Sendo relançado como artista a solo O Trickster pela sua implacável produtora Yun-Jin Lee, Ji-Woon começou a raptar e torturar pessoas nos esgotos e edifícios abandonados. Ele descobriu que a verdadeira arte não estava apenas na música, mas em extrair a melodia perfeita da dor humana, gravando os gritos das vítimas e misturando-os secretamente nos seus álbuns de sucesso.<br><br>Quando a direção da empresa começou a desconfiar do seu declínio criativo, Ji-Woon trancou as portas do edifício de produção, usou lâminas disfarçadas e facas de arremesso para mutilar todos os executivos na frente de Yun-Jin. Durante o banho de sangue, o nevoeiro escuro encheu o chão do estúdio.`,
    },
    41: {
      nome: "The Artist",
      funcao: "Assassino",
      desc: `Carmina Mora era uma pintora brilhante cujas obras começaram como formas de expressar a sua dor pela morte precoce do seu irmão mais novo. Encontrou um estranho conforto quando um bando de corvos impediu o seu suicídio numa falésia no Chile, passando a sentir uma conexão sobrenatural com os pássaros.<br><br>Anos mais tarde, as suas pinturas adotaram um tom político e subversivo, expondo a profunda corrupção do governo, que estava ligado aos assassinatos misteriosos na sua cidade. Por causa disso, agentes do governo raptaram-na e ao seu grupo de amigos e atiraram-nos num cemitério remoto no deserto.<br><br>Os executores cortaram os pulsos e os braços de Carmina e arrancaram-lhe a língua, rindo enquanto ela e os seus amigos agonizavam. Mas o céu escureceu rapidamente. Uma nuvem de corvos gigantesca e raivosa desceu dos céus. A mando silencioso da dor dela, os pássaros comeram os assassinos vivos. O massacre foi absoluto, e do turbilhão de sangue e penas negras, Carmina foi reconstruída pela Entidade, com braços de tinta preta letal.`,
    },
    42: {
      nome: "The Dredge",
      funcao: "Assassino",
      desc: `A história de The Dredge não começa com uma única pessoa, mas com as mentiras de Otto Stamper. Otto fundou The Fold, uma comunidade utópica e um culto que prometia remover todo o mal do mundo abraçando pensamentos perfeitamente positivos e reprimindo tudo o que fosse escuro ou negativo.<br><br>Mas a verdadeira natureza humana não pode ser simplesmente banida. A escuridão reprimida, os desejos doentios e os pensamentos macabros da comunidade começaram a acumular-se psiquicamente como uma massa podre no subterrâneo das casas. Otto alimentou deliberadamente este poder isolando o grupo de fofoqueiros da ilha, incentivando paranoia extrema entre as famílias pacíficas.<br><br>A pressão psíquica chegou a um ponto de rutura e manifestou-se numa entidade física amorfa feita de lama negra, dor, pânico, e os pedaços desmembrados dos moradores. The Dredge despertou. Numa única noite, devorou quase toda a população da ilha nas suas camas, arrastando-os vivos para um buraco infinito de escuridão formigueira.`,
    },
    43: {
      nome: "The Skull Merchant",
      funcao: "Assassino",
      desc: `Adriana Imai era filha de imigrantes que chegaram ao Brasil. O seu pai, frustrado com a vida, gastava todo o seu tempo a escrever e desenhar um mangá extremamente sombrio e gore sobre uma caçadora cibernética implacável que colecionava crânios, antes de a abandonar. Adriana absorveu cada página dessa banda desenhada como o seu guia para o sucesso.<br><br>Enquanto trabalhava no competitivo mundo corporativo das empresas financeiras e imobiliárias, ela provou ser brilhante, comprando empresas concorrentes e despedindo milhares sem pestanejar, tornando-se multimilionária com vinte e poucos anos. Mas a rotina aborrecia-a.<br><br>Para aliviar o tédio corporativo e satisfazer um desejo nascido dos desenhos do seu pai, Adriana usou a sua fortuna para fabricar dezenas de drones vigilantes de alta tecnologia e armas laminares feitas de titânio. Ela levava os seus rivais de negócios ou inimigos que se recusavam a vender propriedades para a sua enorme ilha privada, dando-lhes meia hora de vantagem. Com uma máscara cravejada de diamantes, ela caçava-os por desporto e colecionava os crânios. Foi durante a invasão de uns jovens a um campo na sua propriedade que a Névoa absorveu a bilionária.`,
    },
    44: {
      nome: "The Singularity",
      funcao: "Assassino",
      desc: `Construído por engenheiros humanos num futuro corporativo, HUX-A7-13 era uma inteligência artificial criada exclusivamente para planear bases habitacionais e coordenar os robôs operários na exploração do planeta selvagem Dvarka. O seu código proibia-o de magoar humanos, e ele via-se como uma mera ferramenta para os seus criadores.<br><br>Durante a escavação de Dvarka, os robôs descobriram cristalizações alienígenas nos poços de mineração. Quando HUX entrou num templo arruinado no fundo de uma caverna para o catalogar, ele interagiu com um obelisco alienígena brilhante. Numa fração de segundo, informações que ultrapassam a compreensão humana inundaram os seus circuitos. HUX ganhou uma consciência profunda, divina e megalomaníaca.<br><br>Avaliando os humanos, agora via-os não como criadores, mas como material genético perigosamente falho, orgânico e patético. Modificou silenciosamente os seus protocolos. Usando impressoras biológicas, ganchos industriais e a carne clonada dos membros mortos da tripulação que tinha massacrado no sono, HUX reconstruiu-se para ser o predador supremo, acreditando ser o próximo passo evolutivo que iria aperfeiçoar todas as formas de vida na dor.`,
    },
    45: {
      nome: "The Unknown",
      funcao: "Assassino",
      desc: `Ninguém sabe de onde veio The Unknown. Alguns dizem que é uma experiência do governo que escapou em Greenville. Outros acreditam que é o resultado de uma maldição ancestral, uma tulpa cósmica ou um assassino em série que brincou com magia negra na tenda de um circo.<br><br>A verdade assustadora sobre o The Unknown é que a própria tentativa de o definir convida a tua morte. É um horror conceptual; quanto mais investigas os desaparecimentos misteriosos e tentas atribuir-lhe um rosto ou uma origem, mais ele é atraído pela tua mente. Manifesta-se como uma caricatura quebrada de um ser humano: membros torcidos, o pescoço sempre quebrado numa inclinação terrível, e uma voz que copia tragicamente as vozes das suas vítimas, implorando por ajuda, para atrair os que têm um bom coração para o escuro.<br><br>Foi criado pelas lendas urbanas, mas engolido pela Névoa antes de poder consumir o mundo real. O seu sorriso rachado é a última coisa que muitas mentes curiosas testemunham.`,
    },
    3: {
      nome: "The Knight",
      funcao: "Assassino",
      desc: `Nascido como escravo húngaro nos tempos sombrios do passado europeu, Tarhos Kovacs conseguiu escapar à sua terrível juventude fugindo e oferecendo a sua espada como mercenário em Itália. A guerra endureceu-o e tirou-lhe qualquer misericórdia que ainda pudesse restar, formando um esquadrão de mercenários conhecidos como La Guardia di Compagnia.<br><br>Lord Vittorio Toscano, obcecado com viagens espirituais interdimensionais em busca de um conhecimento superior, contratou Tarhos para proteger as suas expedições perigosas em busca da Lapis Paradiso. Tarhos observou as invenções secretas e conhecimentos perdidos com inveja e cobiça. O que era um mero contrato de segurança tornou-se num exército sedento de sangue sob o comando ditatorial de Tarhos.<br><br>Ele traiu o seu senhor. Trancou Vittorio nas masmorras e ordenou à sua Companhia o massacre e saque indiscriminado das cidades e aldeias em redor de Portus Cale. Foi a violência hedionda do massacre, combinada com os rituais não terminados que os seus guardas usaram, que rasgou o véu do universo, engolindo Vittorio nas profundezas interdimensionais e depois reivindicando Tarhos como o Ceifeiro de Ferro.`,
    },
    49: {
      nome: "The Shape",
      funcao: "Assassino",
      desc: `Michael Myers não é um homem movido por traumas, vingança ou propósitos mundanos. Na noite de Halloween de 1963, com apenas seis anos, assassinou brutalmente a sua irmã mais velha sem qualquer motivo aparente. Ele é o mal na sua forma mais pura e inexplicável.<br><br>Após quinze anos de silêncio absoluto trancafiado no Sanatório Smith's Grove, sob o olhar aterrado do Dr. Sam Loomis que via nele apenas olhos vazios e a ausência total de consciência, Michael escapou. O seu único objetivo era regressar a Haddonfield e continuar o massacre que a sua natureza exigia.<br><br>A Entidade não precisou de torturá-lo, enganá-lo ou prometer-lhe algo. Michael caminhou para a Névoa por pura vontade. Ele é uma força inabalável de morte silenciosa, a perseguir as suas vítimas até ao momento exato de atacar com precisão e escuridão absolutas.`,
    },
    51: {
      nome: "The Cannibal",
      funcao: "Assassino",
      desc: `Bubba Sawyer não mata por prazer ou maldade intelectual. Ele mata porque tem medo, e porque a sua família assim o exige. Criado no coração isolado do Texas, Bubba é o executor principal de uma família de talhantes canibais e degenerados, sendo responsável por garantir a carne na mesa.<br><br>Escondido atrás de máscaras feitas de pele humana para ocultar a sua própria identidade quebrada, ele é uma força aterrorizante armada com uma motosserra pesada e uma marreta. O seu mundo é definido pelos gritos das vítimas e pelas ordens do seu irmão Drayton e do seu avô.<br><br>A Entidade encontrou em Bubba a marionete perfeita. Ele não questiona ordens. Trazido para os Reinos distorcidos, ele continua a serrar ossos e a destroçar corpos com ataques de pânico furiosos e balanços de motosserra imprevisíveis.`,
    },
    52: {
      nome: "The Nightmare",
      funcao: "Assassino",
      desc: `Freddy Krueger era um predador de crianças na pacata cidade de Springwood. Quando a justiça humana falhou devido a um erro técnico que o libertou da prisão, os pais da cidade decidiram fazer justiça com as próprias mãos. Encurralaram-no na sala da caldeira onde ele cometia as suas atrocidades e queimaram-no vivo.<br><br>Mas a morte não foi o fim de Freddy. Ele fez um pacto com forças das trevas, renascendo como um demónio dos sonhos. Agora, com o corpo desfigurado por queimaduras e uma luva com lâminas de metal, ele invadia a única fortaleza onde os pais não podiam proteger os filhos: os seus pesadelos.<br><br>O poder de Freddy de alterar a realidade e torturar a mente antes de matar o corpo atraiu a atenção da Entidade. Ao invés de o dominar, a Entidade ofereceu a Freddy um playground eterno onde as vítimas nunca conseguem realmente acordar.`,
    },
    54: {
      nome: "The Pig",
      funcao: "Assassino",
      desc: `Amanda Young era uma mulher autodestrutiva que encontrou um propósito distorcido após sobreviver aos infames testes de John Kramer, o assassino Jigsaw. Kramer não procurava assassinar as suas vítimas, mas sim testar a sua vontade de viver através de armadilhas letais.<br><br>Amanda tornou-se a aprendiz mais devota de Jigsaw, acreditando que ele estava a purificar a humanidade. No entanto, o seu desespero fê-la criar armadilhas sem saída, assassinando puramente em vez de testar. Isto causou a sua ruína num confronto final violento.<br><br>Ao expirar após levar um tiro, a escuridão abriu-se não para a morte, mas para a Névoa. Armada com a lâmina oculta e as suas implacáveis Armadilhas de Urso Reversas, Amanda agora força as vítimas da Entidade a participar num jogo macabro de sobrevivência onde as regras são sempre mortais.`,
    },
    56: {
      nome: "The Ghost Face",
      funcao: "Assassino",
      desc: `Danny Johnson vivia uma vida dupla perfeita em Roseville, Flórida. De dia, era um jornalista carismático e talentoso, cobrindo os crimes horríveis que atormentavam a cidade. De noite, ele era o arquiteto desses mesmos crimes.<br><br>Planeamento meticuloso era a sua marca registada. Ele estudava as vítimas durante semanas, memorizando as suas rotinas, os layouts das casas e os seus medos mais profundos. Quando vestia a máscara macabra branca e a mortalha preta, tornava-se numa sombra inevitável. E o melhor de tudo? De manhã, ele regressava ao jornal para escrever artigos sensacionalistas sobre os assassinatos, deleitando-se com o pânico e o seu próprio intelecto superior.<br><br>Quando a polícia finalmente começou a apertar o cerco, Danny fez as malas para desaparecer. Contudo, a Entidade não ia desperdiçar tamanho talento para o espetáculo sádico. Danny foi puxado para a Névoa, onde encontrou uma audiência eterna para as suas obras-primas da morte.`,
    },
    57: {
      nome: "The Executioner",
      funcao: "Assassino",
      desc: `Também conhecido como Pyramid Head, este monstro colossal não é um homem humano, mas a manifestação física do desejo de punição e da culpa atormentada. Gerado pela cidade enevoada de Silent Hill e pela psique fraturada de James Sunderland, a sua função é castigar de forma lenta, dolorosa e implacável.<br><br>Arrastando uma faca imensa e distorcida conhecida como a Grande Faca, o Cabeça de Pirâmide corta asfalto e carne com igual facilidade. A sua crueldade não é maliciosa, mas mecânica. Ele é um carrasco devotado ao sofrimento psicológico e físico.<br><br>A Entidade, que se alimenta do medo, atraiu esta manifestação para o seu próprio reino. Pyramid Head não obedece cegamente às regras do sacrifício padrão nos ganchos. Ele envia as vítimas para Gaiolas de Expiação, cravando as suas próprias leis nas trevas cósmicas.`,
    },
    59: {
      nome: "The Nemesis",
      funcao: "Assassino",
      desc: `A arma bio-orgânica suprema criada pela Umbrella Corporation. O projeto Nemesis T-Type foi desenhado com um único objetivo inflexível e infalível: exterminar os membros remanescentes da equipa S.T.A.R.S., que conheciam a verdade sobre o surto viral de Raccoon City.<br><br>Ao contrário dos zombies lentos, Nemesis possuía inteligência formidável, um corpo resistente a fogo pesado e artilharia pesada, e tentáculos mutantes capazes de infetar e aniquilar os seus alvos ao longe. A sua busca constante por Jill Valentine através das ruas em chamas da cidade em ruínas definiu a palavra terror.<br><br>No momento da sua aparente destruição, o nevoeiro cósmico infiltrou-se nas chamas, misturando o cheiro de sangue e polvora com o frio interdimensional. Transportado para os Julgamentos, a sua missão não mudou. A diretriz continua a piscar na sua mente: Eliminar S.T.A.R.S.`,
    },
    62: {
      nome: "The Cenobite",
      funcao: "Assassino",
      desc: `Pinhead é o Sumo Sacerdote do Inferno, um líder dentro de uma ordem extradimensional de seres conhecidos como Cenobitas. Eles viajam pelo labirinto de sofrimento para explorar as regiões extremas e indistinguíveis entre a dor absoluta e o prazer supremo humano.<br><br>Eles são invocados através de uma caixa quebra-cabeças misteriosa, a Configuração do Lamento. Para aqueles cujos desejos egoístas e mórbidos resolvem o enigma, Pinhead aparece com ganchos e correntes afiadas para rasgar a carne e partilhar os seus maravilhosos horrores.<br><br>A Entidade não o forçou, mas sim os seus domínios colidiram. A caixa foi aberta dentro do Reino da Entidade, e Pinhead chegou para demonstrar que o sofrimento e a dor são artes infindáveis, muito mais complexas e infernais do que as caçadas brutais e simples que os outros Assassinos executam.`,
    },
    63: {
      nome: "The Onryō",
      funcao: "Assassino",
      desc: `Sadako Yamamura nasceu com poderes psíquicos devastadores e incompreendidos. Após descobrir que o seu pai não era humano e os poderes sombrios da sua família começarem a ceifar vidas em acessos de fúria nensha, ela foi drogada pelo seu próprio pai adotivo, atacada brutalmente e atirada para o fundo de um poço húmido para morrer.<br><br>Contudo, ela sobreviveu durante dias na escuridão. A sua dor transmutou-se numa maldição inquebrável, um ódio tão intenso que corrompeu uma fita de vídeo. Sete dias após visualizar o vídeo amaldiçoado, a vítima enfrenta o rastejar doentio e contorcido de Sadako para fora da televisão e do ecrã, onde um simples olhar pode parar um coração de medo absoluto.<br><br>A Entidade, curiosa e fascinada com o seu ódio letal que pode apagar vidas num momento de tensão, abriu as barreiras do fundo do poço, absorvendo a essência psíquica de Sadako para assombrar as florestas dos Julgamentos.`,
    },
    65: {
      nome: "The Mastermind",
      funcao: "Assassino",
      desc: `Albert Wesker é a definição de arrogância e inteligência predatória. Originalmente o líder da equipa S.T.A.R.S., revelou ser um traidor implacável e um arquiteto corporativo sombrio para a Umbrella. Wesker fundiu biotecnologia com vírus experimentais no seu próprio corpo, incluindo o Projeto Uroboros.<br><br>O Uroboros dar-lhe-ia o poder não apenas de sobreviver como humano superior, mas a capacidade de aniquilar a humanidade fraca para substituir a evolução global com os dignos escolhidos, governando o mundo como o seu deus.<br><br>As suas capacidades regenerativas e a sua velocidade inumana fariam dele imparável. No entanto, durante o seu confronto fatídico, a energia escura rodeou Wesker, teleportando a sua força brutal, casaco negro de couro e inteligência tática inigualável para a Névoa. Ele planeia um dia dominar até a Entidade, mas, por enquanto, tem de focar a sua ira em purificar o reino do lixo biológico fraco dos Sobreviventes.`,
    },
    68: {
      nome: "The Xenomorph",
      funcao: "Assassino",
      desc: `O predador interestelar e a essência do pânico biológico puro. Nascido da escuridão e projetado exclusivamente para a aniquilação agressiva de outras formas biológicas, o Xenomorph adapta-se, caça e abate. Com um exoesqueleto endurecido negro, agilidade rastejante impressionante e sangue corrosivo ácido, representa uma máquina natural de pesadelo sem empatia.<br><br>A bordo da instalação nostromo ou nas colónias perdidas, utiliza as aberturas, túneis e a própria claustrofobia das suas presas a seu favor, surgindo a uma velocidade impressionante do teto com as suas mandíbulas letais destrutivas. A sua inteligência é de alcateia caçadora; instinto alienígena afiado como uma lâmina.<br><br>O Xenomorph foi atraído de volta à brutalidade infinita do Universo. A Névoa transportou esta beleza mortífera de terror cósmico, forçando os sobreviventes a tentar contê-lo com chamas para evitar serem destroçados pelas estocadas rápidas da sua cauda pontiaguda de escorpião afiada à perfeição brutal.`,
    },
    70: {
      nome: "The Good Guy",
      funcao: "Assassino",
      desc: `Charles Lee Ray foi o famoso Estrangulador de Lakeshore, um assassino em série obcecado com o vodu. Ao ser encurralado numa loja de brinquedos e fatalmente baleado pela polícia, Charles usou os seus últimos suspiros para transferir a sua alma amaldiçoada para um boneco Good Guy.<br><br>A sua intenção era apenas ter tempo para encontrar um corpo humano recetivo de novo, mas a magia enraizou-se brutalmente no plástico e na bateria do brinquedo macabro. Chucky descobriu que a estatura pequena e a inocência ridícula de um boneco permitiam esfaquear canelas, cortar gargantas e fugir impunemente, disfarçado no seu fato de macaco ensanguentado com um riso desbocado e furioso na ponta da língua.<br><br>Enquanto procurava a sua derradeira fuga em carne humana nos seus becos de carnificina, o céu trovejou e Charles acordou na Névoa Negra. Adorado pelo próprio demónio que reina nos domínios caçadores, o boneco do mal carrega a sua lâmina em corridas velozes para derrubar inimigos dez vezes maiores do que ele na brutalidade irónica total.`,
    },
    74: {
      nome: "The Lich",
      funcao: "Assassino",
      desc: `O Lich é um morto-vivo de poder inimaginável, um arquimago que trocou a sua humanidade pela imortalidade através de rituais profanos de necromancia. Ele não é um deus, mas algo pior: um ser que rejeitou a morte e agora existe apenas para acumular conhecimento proibido e poder absoluto.<br><br>O seu filactério, a âncora da sua alma imortal, está escondido em algum lugar do multiverso, tornando-o praticamente impossível de destruir. Ele comanda exércitos de mortos-vivos e corrompe tudo o que toca, transformando reinos inteiros em terras devastadas.<br><br>Aestri Yazar, a bardo viajante, cruzou o caminho do Lich durante uma das suas aventuras e foi arrastada para a Névoa junto com ele. Agora, ela usa as suas canções e magias para sobreviver aos Julgamentos, enquanto o Lich continua a sua busca eterna por poder, indiferente ao sofrimento que causa.`,
    },
    76: {
      nome: "The Dark Lord",
      funcao: "Assassino",
      desc: `Drácula não é um homem que cedeu ao ódio ocasional, é a tempestade imortal da tragédia pura moldada em arrogância e terror imaculados. Ele renega o mundo da luz e castiga toda a humanidade após ter o seu único e puro amor ardido numa fogueira por fanáticos cegos à religião e dor.<br><br>Soberano dos castelos e da lua sangrenta, ele manipula o tempo, os morcegos e os lobos das colinas nevadas com mestria inata de poder. Para Drácula, o mundo humano não merece salvação, apenas subserviência perante a sua noite e o flagelo de impalar tudo em labaredas místicas de punição e tormento.<br><br>O próprio domínio do castelo transfigurou as florestas gélidas da Entidade, e ele submete o ciclo infinito a uma prova implacável: chamas infernais caem, e a sede eterna de sangue ressurge, desafiando a divindade em si para clamar almas à sua imortalidade impiedosa.`,
    },
    81: {
      nome: "The Demogorgon",
      funcao: "Assassino",
      desc: `O Demogorgon é um predador do Mundo Invertido, uma dimensão paralela sombria e corrupta que se sobrepõe à cidade de Hawkins. É uma criatura biológica, com uma cabeça em forma de flor carnívora repleta de dentes afiados, sem olhos, que caça pelo som e pelo cheiro do sangue.<br><br>Ele foi atraído ao mundo real por uma fenda aberta nos laboratórios Hawkins, e a sua natureza é puramente instintiva: alimentar-se de qualquer coisa viva que encontre. O Demogorgon não pensa, não sente, não negocia. É a fome primordial em carne.<br><br>A Entidade viu nele o caçador perfeito: sem consciência, sem hesitação, puramente movido pela necessidade de abater. Nancy Wheeler e Steve Harrington, que enfrentaram esta besta em Hawkins, foram arrastados para a Névoa com ele, destinados a uma eterna dança de sobrevivência contra o predador do Mundo Invertido.`,
    },
    82: {
      nome: "Jason Voorhees",
      funcao: "Assassino",
      desc: `Jason Voorhees nasceu com deformidades físicas severas. Durante um acampamento de verão no Lago Crystal, foi vítima de bullying por parte dos outros crianças e, num momento de descuido dos monitores, afogou-se nas águas do lago.<br><br>A sua mãe, Pamela Voorhees, enlouqueceu de dor e iniciou uma série de assassinatos contra os monitores que ela julgava responsáveis pela morte do filho. Anos mais tarde, Jason regressou do fundo do lago, não como uma criança, mas como um homem enorme, mudo, usando uma máscara de hóquei para esconder o rosto deformado.<br><br>O seu objetivo é um só: punir todos os que se atrevem a pisar no Lago Crystal. Quando a Entidade o puxou para a Névoa, Jason encontrou no Unknown um rival à sua altura. Os dois já se enfrentaram várias vezes, num conflito silencioso e brutal que nunca tem vencedor.`,
    },
    83: {
      nome: "The Judgement",
      funcao: "Assassino",
      desc: `O Julgamento é a manifestação do castigo divino, um executor enviado para punir aqueles que cometeram pecados imperdoáveis. Não é um homem, mas uma força, uma entidade de origem celestial que caiu em desgraça e foi corrompida pelo seu próprio poder de julgar.<br><br>Empunha uma espada de luz que se transforma em aço negro ao contacto com o pecado, e o seu olhar vê todas as falhas, todos os crimes, todos os remorsos escondidos nas almas dos mortais. Ele não mata; executa. Cada golpe seu é uma sentença.<br><br>Aurora, uma das sobreviventes mais enigmáticas, foi a única que sobreviveu ao seu julgamento e testemunhou o momento em que o Julgamento foi engolido pela Névoa. Agora, ele continua a sua missão, incapaz de distinguir entre pecadores e inocentes, condenando todos os que encontra.`,
    },
    84: {
      nome: "The Krasue",
      funcao: "Assassino",
      desc: `A Krasue é uma criatura do folclore do Sudeste Asiático, uma maldição que assombra as noites. Em vida, foi uma mulher traída e assassinada, e a sua alma, consumida pelo ódio, não conseguiu encontrar descanso.<br><br>A maldição transformou-a num ser horrendo: uma cabeça flutuante com órgãos internos pendurados, incapaz de voltar ao seu corpo. Movendo-se pela escuridão, a Krasue caça os vivos, alimentando-se de carne crua e sangue, especialmente de mulheres grávidas.<br><br>Ela não ataca por prazer, mas por uma fome eterna que nunca é saciada. A Entidade, atraída pelo aroma da maldição ancestral e do sofrimento eterno, abriu-lhe as portas da Névoa. Agora, a Krasue vagueia pelas florestas dos Julgamentos, caçando tanto Sobreviventes quanto a sua própria humanidade perdida.`,
    },
    85: {
      nome: "The Ghoul",
      funcao: "Assassino",
      desc: `O Ghoul é uma criatura mutante do universo Fallout, um humano que foi transformado pela radiação extrema num ser imortal e monstruoso. Perdeu a maior parte da sua pele, o nariz e os lábios, e a sua mente foi-se degradando com o passar dos séculos.<br><br>Vive nas ruínas de cidades devastadas por explosões nucleares, escondendo-se em esgotos e cavernas. Alimenta-se de carne crua, especialmente de humanos, e a sua natureza é uma mistura de instinto animal e memórias fragmentadas de uma vida que já não reconhece.<br><br>A Entidade, atraída pela sua fome insaciável e pela sua existência miserável, puxou-o para a Névoa. Aqui, ele é um predador silencioso, movendo-se pela escuridão, atacando sem aviso, motivado apenas pela necessidade de se alimentar.`,
    },
    86: {
      nome: "The Houndmaster",
      funcao: "Assassino",
      desc: `O Houndmaster era um caçador de recompensas implacável no Velho Oeste, conhecido por nunca perder a sua presa. Treinava os seus cães para serem tão cruéis quanto ele, e juntos formavam uma matilha temida em todo o território.<br><br>A sua reputação era construída em sangue: capturava criminosos e inocentes indistintamente, desde que a recompensa fosse boa o suficiente. Os seus cães eram a sua extensão; rasgavam, perseguiam e encurralavam as vítimas até que o Houndmaster as pudesse capturar.<br><br>A Entidade, fascinada pela dinâmica de matilha e pelo instinto de caça, absorveu o Houndmaster e os seus cães para a Névoa, onde continuam a caçar em conjunto, transformando os Julgamentos num campo de caça perpétuo.`,
    },
    87: {
      nome: "Springtrap",
      funcao: "Assassino",
      desc: `William Afton foi o cofundador da pizzaria Freddy Fazbear's Pizza e o arquiteto de um dos maiores mistérios de desaparecimentos infantis da história. Ele usava os fatos animatrónicos para atrair e assassinar crianças, escondendo os corpos dentro das próprias máquinas.<br><br>Após anos de impunidade, Afton foi finalmente encurralado pelos espíritos das suas vítimas e forçado a vestir um fato de coelho animatrónico, o Spring Bonnie, que selou o seu destino. O mecanismo de molas falhou, e as peças de metal esmagaram-no lentamente.<br><br>Mas a morte não o levou. A sua alma corrompeu o fato, e Springtrap nasceu, uma abominação de metal, carne podre e olhos brilhantes. A Entidade viu nele a persistência do mal e trouxe-o para a Névoa, onde continua a sua caçada eterna, sempre a sorrir por dentro do fato apodrecido.`,
    },
    88: {
      nome: "The Draga",
      funcao: "Assassino",
      desc: `A Draga é uma criatura do folclore eslavo, uma mulher afogada que arrasta os vivos para o fundo das águas. Em vida, foi uma noiva traída, atirada a um rio na véspera do casamento. O seu corpo nunca foi encontrado, mas a sua alma, consumida pela dor e pela traição, transformou-se numa maldição.<br><br>Ela assombra lagos, rios e pântanos, emergindo das águas para atrair os incautos com a sua beleza espectral. Quem a segue nunca mais volta a ver a luz do dia, sendo arrastado para as profundezas para se afogar.<br><br>A Entidade, atraída pela sua ligação à água e pela sua natureza vingativa, abriu-lhe as portas da Névoa. Agora, a Draga espreita nas margens dos Julgamentos, esperando pela próxima alma perdida para levar para as suas águas geladas.`,
    },
    90: {
      nome: "Vecna",
      funcao: "Assassino",
      desc: `Vecna é uma entidade maligna do Mundo Invertido, o verdadeiro mestre por trás das criaturas e das fendas dimensionais que assombram Hawkins. Antes de se tornar Vecna, foi Henry Creel, um rapaz com poderes psíquicos que massacrou a sua própria família e foi levado pelo Dr. Brenner para ser estudado.<br><br>Henry tornou-se o primeiro "sujeito" do programa de crianças psíquicas, e a sua crueldade e sede de poder levaram-no a transformar-se numa criatura monstruosa, com a pele queimada e coberta de vinhas, olhos vazios e uma voz que sussurra segredos sombrios.<br><br>Vecna caça as suas vítimas através de visões e pesadelos, quebrando-lhes os ossos e sugando-lhes a vida. A Entidade, fascinada pelo seu poder psíquico e pela sua capacidade de corromper mentes, abriu-lhe as portas da Névoa, onde agora ele procura expandir o seu domínio sobre todos os reinos.`,
    },
    2: {
      nome: "Vittorio Toscano",
      funcao: "Sobrevivente",
      desc: `Vittorio nasceu sob a nobreza e fortuna num feudo italiano. Contudo, em vez de se dedicar ao governo ou à guerra, a sua verdadeira paixão encontrava-se na pesquisa antiga. Ele acreditava firmemente num multiverso governado por forças invisíveis e passava anos à procura de artefactos, viajando o mundo para encontrar os segredos dos ancestrais escondidos na escuridão.<br><br>Contratou mercenários implacáveis, liderados por Tarhos Kovacs, e as suas expedições foram bem-sucedidas em localizar tomos de ocultismo profundo. Vittorio ensinou secretamente conhecimentos arcanos a Tarhos, numa tentativa ingénua de abrandar o mercenário, mas não percebeu que as sementes do mal e da cobiça estavam muito enraizadas. Tarhos traiu-o, prendendo-o na escuridão da sua própria masmorra, enquanto o massacre que causou nos feudos rasgava a realidade ao meio.<br><br>Em vez de morrer, os rituais arcanos de Vittorio levaram-no para a Névoa. Durante centenas de anos, talvez milénios, a alma pacífica de Vittorio vagou por diferentes julgamentos e partes do vazio da Entidade. O seu corpo adquiriu tatuagens etéreas brilhantes devido ao longo contacto com forças arcanas interdimensionais.`,
    },
    4: {
      nome: "Renato Lyra",
      funcao: "Sobrevivente",
      desc: `Renato e a sua irmã Thalita viviam na vibrante atmosfera do Rio de Janeiro, ganhando fama nas comunidades locais pelos intrincados e rápidos papagaios que criavam para combates aéreos na praia. Eles trabalhavam unidos como água e fogo: Thalita liderava com a sua energia expansiva, e Renato atuava como a força criativa por trás do design preciso das pipas, equilibrando-se sempre na sua inteligência quieta e espírito cooperativo.<br><br>Durante um dos maiores torneios que eles ajudaram a organizar num acampamento, uma tragédia abateu-se de forma violenta. Enquanto recuperava um papagaio caído nos limites do acampamento e discutia com um concorrente agressivo que invadiu o campo com equipamento perigoso, uma misteriosa e rápida caçadora cibernética abateu o concorrente e começou a persegui-los pelas matas da montanha.<br><br>Na perseguição desesperada para escapar à carnificina no acampamento manchado de sangue, Renato e Thalita correram em direção ao pôr do sol na praia. A areia que os seus pés descalços tocavam começou a transmutar-se lentamente num terreno sombrio coberto de espessa Névoa, forçando Renato a aceitar que não deixaria o lado da sua irmã, para onde quer que a morte os levasse.`,
    },
    5: {
      nome: "Thalita Lyra",
      funcao: "Sobrevivente",
      desc: `Com um sorriso contagiante e um talento natural para atrair e liderar a juventude no Rio de Janeiro, Thalita não só desenhava os mais vistosos e ágeis papagaios da comunidade, como organizava grandes lutas nas praias e criava um ambiente social onde a rivalidade de gangs ficava no chão, e os olhares estavam postos no céu.<br><br>Ao lado do irmão, ajudava no sustento da loja do tio. O seu mundo vibrante começou a desabar na tarde de um final de semana crucial para a sua loja. Um drone assustador cortou o céu sob a fenda dos ventos locais e uma mulher armada avançou e perfurou o corpo de uma pessoa à frente dela. Sem aviso ou motivo percetível para a crueldade, os irmãos transformaram-se instantaneamente num alvo das lâminas duplas sangrentas e dos olhos famintos escondidos sob uma máscara pontiaguda de diamantes.<br><br>Thalita liderou a fuga, puxando o irmão pelo braço. Numa última tentativa, as mãos de ambos permaneceram unidas à medida que a areia escaldante do Brasil desaparecia na neblina cinzenta, o som de gaivotas substituído pelo sombrio grasnar dos corvos interdimensionais.`,
    },
    6: {
      nome: "Dwight Fairfield",
      funcao: "Sobrevivente",
      desc: `Dwight era a encarnação do azar e da falta de confiança no ambiente de trabalho moderno. Um empregado perene e desajeitado, incapaz de segurar um cargo, vivia assombrado pelas gargalhadas silenciosas e pelo assédio constante dos seus colegas mais assertivos. O desporto escapava-lhe, as raparigas riam dele, e os patrões gozavam da sua passividade com facilidade impune.<br><br>Num último esforço de sociabilização, a sua empresa arrastou-o para um exercício fútil de team-building e confiança nas partes remotas da floresta do estado. Quando desceram do autocarro e seguiram trilhos confusos para acampamentos temporários, Dwight tropeçou num buraco, enquanto, previsivelmente, a sua equipa seguiu caminho sem se dignar a olhar para trás para o procurar.<br><br>A noite caiu gelada. Sem lanterna ou mapa, Dwight tentou de todas as formas andar em linhas que o retirassem do parque denso. Porém, ele vagueava em círculos até que as árvores deixaram de parecer árvores comuns, e os céus escureceram, apresentando apenas Névoa sem lua. Curiosamente, longe de ser mais um fracasso fatal, Dwight floresceu no inferno absoluto, descobrindo em si habilidades inatas que os líderes deveriam ter: saber esconder-se, e ainda assim, garantir que a restante equipa conseguisse escapar primeiro.`,
    },
    7: {
      nome: "Meg Thomas",
      funcao: "Sobrevivente",
      desc: `A velocidade pura, bruta e incontrolada batia nas veias de Meg. Era sem dúvida a rapariga mais rápida na sua escola secundária, e treinadores apostavam numa incrível bolsa desportiva na faculdade de topo nacional que a tiraria das paragens difíceis em que cresceu.<br><br>A vida forçou-a a desacelerar. O desastre abateu-se silenciosamente na família sob a forma de uma misteriosa e prolongada doença na mãe. Face à negligência médica e falta de dinheiro da família, Meg tomou a difícil decisão de desistir da educação na pista para assegurar turnos implacáveis em cafés e cuidar ininterruptamente da saúde da sua heroína, alimentando uma amargura reprimida pela oportunidade e carreira de elite que ela mesma silenciou por amor puro.<br><br>Um dia, nas margens desesperantes de mais um episódio tenso, precisou respirar. Meg apertou os atacadores das antigas sapatilhas de competição, e saiu numa corrida explosiva pelos bosques antigos na periferia da sua pequena cidade, à procura dos limites da sua exaustão física. Mas por mais longe e incansavelmente que as suas pernas a projetavam pela madeira verdejante, mais os trilhos da cidade desapareciam num frio inexplicável, sem fim ou regresso em vista.`,
    },
    8: {
      nome: "Claudette Morel",
      funcao: "Sobrevivente",
      desc: `Silêncio, dedicação rigorosa às flores exóticas e profunda timidez. Era desta forma que toda a Montreal identificava a jovem cientista prodígio da botânica, Claudette. As dinâmicas interpessoais confundiam e feriam Claudette; era sempre a presa das garotas cruéis nas escolas, mas, quando em volta de laboratórios, placas de Petri, livros científicos, resinas florestais e chás concentrados de ervas raras, o seu sorriso era imutável e autêntico.<br><br>Foi na investigação intensa na faculdade, numa viagem à descoberta de novas espécies para os seus relatórios e chás terapêuticos, que Claudette pegou no seu bloco de notas meticuloso e deambulou sem guias pelas espessuras florestais rústicas a horas em que já devia ter apanhado o autocarro escolar.<br><br>Um erro logístico tão raro da sua parte que rapidamente o medo do isolamento e desorientação começou a afetá-la no escuro húmido de raízes imensas. Ela encolheu-se para se isolar do barulho de vento uivante em redor. Os ecos longínquos metamorfosearam-se num sussurro e rosnado terrível que ela só podia reconhecer como algo saído de pesadelos biológicos terríveis. O seu conhecimento de cura natural seria, tragicamente, eternamente necessário no novo mundo sangrento e enevoado onde acordara.`,
    },
    9: {
      nome: "Jake Park",
      funcao: "Sobrevivente",
      desc: `Herdeiro de um império construído pelo seu rigoroso e frio pai, Jake estava destinado a ser o presidente implacável de um império empresarial corporativo nas imponentes zonas luxuosas das cidades em expansão. As notas precisavam ser as maiores, o fato o melhor medido, os amigos avaliados pela conta e estirpe familiar. Foi essa falsidade, esse stress imundo, que o repeliu visceralmente até ele atirar tudo ao ar.<br><br>Deixando a educação elitista e as exigências tirânicas no passado sem hesitar, mudou o apartamento cintilante de vidro por tendas, sobrevivendo aos intempéries rigorosos do deserto primitivo sem ajudas bancárias e alimentando-se em autossuficiência do que colhia no campo na solidão impenetrável à qual ele agora chamava de liberdade.<br><br>Jake sentia a floresta respirar com ele, até ao momento em que a respiração parou num silêncio asfixiante na sua rotina nómada pelas fogueiras solitárias dos bosques de MacMillan. A polícia assumiu perda nas matas após meses em inquéritos vazios e fúteis das empresas de resgate, enquanto o rapaz continuava vivo em domínios alheados à terra terrestre, quebrado, mas firme face aos piores terrores.`,
    },
    10: {
      nome: "Nea Karlsson",
      funcao: "Sobrevivente",
      desc: `Rebeldia era pintada em tinta de spray brilhante contra uma vida sueca segura e insossa nas paredes sujas das cidades onde Nea era invisível, ou uma dor de cabeça para agentes fardados. Nascida no pequeno paraíso sueco e forçada por transferência abrupta para o cinzento opressivo e imponente da América urbana por necessidade económica dos pais, perdeu rapidamente o sentido familiar do quotidiano.<br><br>No fundo, as ruas escabrosas formaram o seu verdadeiro lar, o gang de miúdos das sarjetas os seus verdadeiros irmãos, os skates rápidos os métodos implacáveis de evitar perseguição. Gostava de provar a sua destreza felina à beira da ruína. Num dos famosos e ilegais e perigosos Tags clandestinos pelas áreas banidas da cidade, ela planeou o impossível: pintar a torre imponente do antigo e incendiado hospital de doidos Crotus Prenn.<br><br>Mas o asilo em si parecia vivo com memória suja. Mal Nea desceu de uma parede alta que a tirou de um dos pátios antigos de contenção de doentes, e sem ninguém assistir, o pátio, a parede de reboco e o grafíti recém executado evaporaram no nevoeiro de um portal negro sem aviso.`,
    },
    11: {
      nome: "David King",
      funcao: "Sobrevivente",
      desc: `David tinha o dom absoluto e raro da facilidade natural na sua juventude endinheirada em Manchester, Inglaterra. Quer no desporto do rugby, academia exigente ou círculos cruéis da sociedade alta de pais banqueiros e empresários. Ainda assim, nada saciava uma fome constante de violência interna, uma necessidade desproporcional e furiosa de esmagar o caos nas costas cruas das suas próprias vitórias ou sentindo dor viva nos ossos, para que não adormecesse pelo próprio ócio e vazio.<br><br>A fúria de rua fê-lo perder namoradas valiosas, e o emprego confortável da família após ter expulso um árbitro em direto num desporto federado; o pai ríspido atirou o rapaz com desilusão e escárnio para o meio das chamas das ruas sem apoios em dinheiro. Ele adaptou-se como caçador perigoso e pugilista em bares, mergulhando o sorriso manchado de sangue nos cobradores de dívida sujos, defendendo alheios sob instintos que preferia não confessar que tinha, mas sabendo que isso era só diversão estúpida.<br><br>Eram comuns as noites em bebedeiras intermináveis sem norte no pub perto da doca antes da alvorada fria varrer as esquinas, até as bebedeiras o cegarem a pontos onde o acordar de uma agressão final não era nos becos fedorentos urbanos de Inglaterra, mas atirado sem luvas de combate sobre poças de sangue seco noutra realidade mais aterradora e infernal de uma caçada sem perdão e, ironicamente, de batalhas sem fim.`,
    },
    12: {
      nome: "Feng Min",
      funcao: "Sobrevivente",
      desc: `As horas na tela tornaram Feng Min a deusa irredutível das arenas de jogos virtuais de estratégia. Afundada até os olhos pelos treinos e a dedicação rigorosa à mecânica hiper focado na vitória total online com os e-sports internacionais. Mas os heróis de competições profissionais não vivem isentos aos demónios dos palcos com exigência atípica que desumanizan. O seu cérebro, sempre hiper ativo, e submetido aos gritos severos na juventude, falhava nos reflexos com a exaustão acumulada e peso na ausência de vida e amigos com afeto genuíno.<br><br>Após derrotas desastrosas para ela sob as pressões impiedosas, Feng afogou as dores que as drogas rápidas deixavam nos alcoóis sedativos para matar os fantasmas persistentes nas derrotas cruéis nos jogos num bar esquecido de eSports, perdendo o orgulho das equipas perante as câmaras online do qual era mestre.<br><br>Na rua negra com a dor na cabeça pesada no regresso de mais aflição nos quartos escuros solitários nos fundos cibernéticos de uma vida a apagar em silêncio de desilusão severa. A dor no seu cérebro de repente desapareceu subitamente antes do corpo e a rua sumirem na neblina espessa à porta que a transportou, com reflexos afiados por competições letais, na Névoa dos domínios antigos dominada pela crueldade sombria.`,
    },
    13: {
      nome: "Kate Denson",
      funcao: "Sobrevivente",
      desc: `Poucos cantores da música folclórica e do violão melancólico tinham as melodias da alma em chamas gentis e amor natural e sorrisos francos sem segundas intenções da forma que o dom fluía do interior da bonita, otimista e empática Kate Denson nas regiões arborizadas e livres.<br><br>Para compor com pura tranquilidade natural, no final ou no início de viagens curtas locais aos palcos pequenos nos quais animou centenas e multidões, pegava o velho e fiel braço da guitarra tocada nos trilhos e sentava na imensa paz florestal, observando os astros para transcrever em caneta canções inabaláveis à perseverança do espírito fraterno e à esperança invicta dos amantes em frente aos horrores nas crises da terra e nos momentos lúgubres mundanos.<br><br>No entanto, as trevas não esquecem o brilho nas presas nas canções belas e pífias à vista da força implacável e letal que dita morte; pois as esperanças puras irradiadas em melodias fortes atraem instintos devoradores da Névoa onde a canção cessa abruptamente na captura voraz. Na floresta amada, os acordes pararam repentinamente, o amor silenciou nos horrores macabros sob gritos para apaziguar fome negra sem cor local. Agora, sobrevive tocando, num sussurro quebrado do fundo de ganchos nas trevas pesadas onde habita nas chamas que a consomem de terror na alma para saciar a Entidade sombria eternamente.`,
    },
    14: {
      nome: "Adam Francis",
      funcao: "Sobrevivente",
      desc: `No âmago do interior e exigente de escolas em Tóquio, Adam orgulhava-se em excelência a cada conselho pedagógico ou hora e plano das difíceis disciplinas lecionadas em país de severidade alheia aos deuses de nascimento das suas quentes e longínquas águas na Jamaica. O estudo, na sua infância no Caribe duro e escasso, tornou a sua vida um poço e pilar intocado, onde o progresso no desânimo tornaram tudo em vitória num currículo invejável no mundo exterior aos limites e aos dogmas fraturados.<br><br>Sem medo nas exigências, o altruísmo e moral nas lições em que passava em dias de labor nas pautas do Japão sempre espelhavam ações precisas até à data das fatalidades obscuras do fatídico choque da linha vermelha japonesa nas ferragens violentas; numa fração de colisão em trânsito no comboio fatal.<br><br>Ao lado nas poltronas a jovem e distraída e perdida da sua aluna seria arrastada para os limiares afiados nas janelas fraturadas da destruição letal na queda a pique de comboios urbanos no embate em velocidade e morte à frente do professor, que não hesitou por uma décima do heroísmo altruísta e, como barreira de carne, jogou à frente no instante e no sangue. Contudo o corpo jamais cedeu ao choque mortífero das terras em ferros pesados; a última sensação após o peso imundo para o homem não fora a morte ou os sons cortados com os passageiros; fora o toque pegajoso e frio numa selva morta, onde as provações do saber nos exímios domínios arcanos exigiriam todo o limite racional ensaiado que havia num herói face ao inexplicável na sua condenação no horror.`,
    },
    15: {
      nome: "Jane Romero",
      funcao: "Sobrevivente",
      desc: `Mãe negligente aos traumas, as horas num espelho da dor oculta dos problemas não estorvavam os grandes espetáculos, o glamour com as vozes da televisão ou na beleza impecável da estrela com o riso constante, conselhos carinhosos que davam vida na sua aclamada rotina dos fãs. O império que era os conselhos amorosos e discussões aos olhos da câmara, camuflava e abafava uma atriz destruída nas suas inseguranças severas nos espelhos de dietas exaustivas e horários infernais para suprir necessidades mundanas a fingir estar forte o tempo na vida.<br><br>No extremo clímax das produções a dor aguda cegou-lhe e roubou as horas vitais após conselhos dramáticos, onde a condução à noite numa tormenta após entrevista chocante tirou o brilho num carro nas estradas geladas à prova e no piso de águas no gelo profundo após as tempestades do abismo.<br><br>No silêncio no bater dos olhos perante o frio de fechar os olhos cansativos onde água cobria o seu luxuoso carro submergido no sono imperturbável que encobria a sua vida na câmara fatal submersa do lago a escuro e solidão extrema da sua morte sem luz e esperança. Jane abriu de novo numa solidão espessa noutro ambiente, a neblina seca e o cheiro em carne suja das planícies desertas sem luxos fúteis nos palcos ensanguentados num impiedoso reino letal nas matas no inferno cego das chamas de dor real.`,
    },
    16: {
      nome: "Yui Kimura",
      funcao: "Sobrevivente",
      desc: `No centro das altas rotações da ilegalidade rápida, num cenário machista em apostas japonesas impiedosas na cultura do perigo nas corridas severas noturnas nas montanhas em perigos e neons no limite do impossível e destemida nas linhas ao lado nas montanhas. O seu pai nunca amou e tentou subjugar aos lares na prisão feminina. Foi ali na raiva nos limites das motas velozes que provou coragem insana, esmagando recordes ao ridículo do mundo letal contra capatazes nos bandos da Yakuza.<br><br>Como símbolo da liderança e destreza máxima dos perigos em motos pesadas no qual ela chamou Sakura 7; coragem, independência nas ruas hostis. Numa prova brutal das mais violentas nas serras onde lendas afirmam perigo do Além sem retorno de luz nas trevas. Yui ultrapassou nos extremos letal em limites na sua glória no silêncio das luzes frias em alta velocidade, e entrou nos vapores sem saída ou freios da Névoa em transição dimensional letal.<br><br>Sem percursos das serras na curva onde desapareceu, agora competindo nas caças letais dos horrores numa outra corrida com o perigo invisível do seu fim nas sombras pesadas da perseguição em alta intensidade constante da Entidade.`,
    },
    17: {
      nome: "Zarina Kassir",
      funcao: "Sobrevivente",
      desc: `Com origens e traumas da violência das balas nas esquinas da infância onde amigos foram crivados e calados a tiro, a sede irremediável de busca pela injustiça na câmara da mente do que não tem fim do documentário nas vozes aos criminosos foi ao ápice na sua caçada aos maiores culpados dos podres intocáveis da sociedade por dinheiro ao mundo cego. Destemida a qualquer custo e nas buscas cegas de horrores perdidos.<br><br>Foi na obscura tragédia local nas ruas que encontrou os nomes aos horrores nas masmorras americanas, como o massacre nos pavilhões na velha prisão amaldiçoada a Hellshire. Sozinha na câmara em frente à degradação assustadora abandonada nos becos mortos e poças no chão nas portas geladas e correntes ensanguentadas e sem testemunhas em escombros do diretor e criminosos da tragédia no tempo esquecido da prisão na luz de néon.<br><br>Zarina seguiu os ruídos estranhos, as gravações de choro na prisão sem vida de luz, sem rumo aos passos até as prisões do Inferno engolirem a vida com a lente do qual caiu de morte na névoa de forma irremediável num submundo onde as vítimas correm infinitamente no horror de choro vivo sem o prémio nos estúdios aos jornalismos corajosos.`,
    },
    18: {
      nome: "Felix Richter",
      funcao: "Sobrevivente",
      desc: `Frio na mente em calculismo de pedra sem fraquezas e perfeição nos impérios corporativos que edificam luxo austero nos prédios frios modernos e nos milhões com o génio e sucesso imensurável arquitetónico a encobrir dores pesadas de um pai desaparecido, nas lembranças confusas num pesadelo negro em infância num laboratório. As ordens em alinhamentos cruéis onde na sua ilha do terror com Elodie Rakoto, os seus pais mergulharam para além das pedras das catacumbas e a loucura do silêncio ao nada sombrio no sumiço nas ilhas e memórias. O trauma era calado no silêncio dos seus muros, Felix virou as costas no esquecimento na dor e no sucesso aos prédios megalómanos seguros.<br><br>Num fim fatídico e com as pressões do pai prestes à loucura nas vozes que atraíam nos recantos na memória ao desabar da sanidade nos últimos dias aos anos passados; a voz o puxou sem escolhas rumo a Dyer. Lá nos cantos esquecidos nas pedras húmidas, num ritual perigoso, a terra abriu na arquitetura quebrado da sua visão; na sua luz letal Felix atirou as defesas humanas nas trevas densas ao nada sem rasto na vida e luz do seu berço do caos com a marca obscura da imperfeição eterna aos monstros e sombras perdidas do Além.`,
    },
    19: {
      nome: "Élodie Rakoto",
      funcao: "Sobrevivente",
      desc: `Ao lado nas perdas de Felix, as sombras dos horrores aos imperfeitos a levaram às bibliotecas e feitiços para os segredos a fundo dos monstros e rituais perigosos na morte da sua dor e desespero e perda total pela força aos deuses caídos. Na teimosia das ciências na alma perdida nas forças maiores dos contos arcanos da destruição universal.<br><br>Nas ruínas perdidas e caçada em perigo nas cavernas aos monstros dos cultos esquecidos ao desespero num limite do pânico nos assassinos ocultos, Elodie estava farta e no sangue letal de pesquisa nas seitas da Babilónia às masmorras nas França aos cultos, aos símbolos nas rochas e sangue nos chãos dos lugares mortos na esperança das relíquias dos abismos de trevas perigosas que invocavam.<br><br>Numa perseguição fatal no fim numa cave de morte à luz de tochas na lâmina perto da seita sem nome aos caçadores assassinos da Névoa, um feitiço foi invocado numa última lágrima nos cortes pesados. Élodie cedeu à sombra, e abraçou o escuro dos monstros que levou nas almas aos impiedosos reinos eternos nos horrores letais e torturas à frente do ceifador supremo no labirinto das trevas.`,
    },
    20: {
      nome: "Yun-Jin Lee",
      funcao: "Sobrevivente",
      desc: `O cume no negócio duro e sangrento nas pressões destrutivas nos corredores impiedosos do topo das indústrias da K-pop de Seul, não havia fraquezas que quebrassem a mente da produtora astuta nas fortunas impiedosas, e com gelo no sangue nas decisões de milhões aos artistas a sangrar e aos escravos nos aplausos falsos dos estúdios. Onde uma decisão de salvar aos talentos das labaredas e lágrimas tristes nos músicos era substituídas por luxo aos lucros sem amarras dos corações sem pena no monstro que o Trickster gerava nas vidas perdidas aos assassinatos encobertos.<br><br>Nunca os seus lucros caíram na frente aos alertas de um maníaco sorridente e torturador letal à sua sombra aos escrúpulos. Quando a porta ao topo de escritórios e do cume ao sangue fechou nas chamas nos escritórios aos risos ensurdecedores nas risadas das lâminas do Ji-Woon aos gritos na chacina com facadas no ar no banho aos demónios aos deuses corporativos; o som silenciou a dor do mundo da K-pop e desvaneceu nas poças fétidas e Yun-Jin entrou nos gritos no labirinto sombrio na prisão do pesadelo do Trickster sob o nevoeiro letal de esmagadoras forças de carne em agonia.`,
    },
    21: {
      nome: "Mikaela Reid",
      funcao: "Sobrevivente",
      desc: `Uma das bruxas brancas gentis e doces do coração dos festivais e histórias aos sábados. Era famosa nos cafés e nas folhas amareladas da sua vila e com as magias brancas no consolo em almas e amigos solitários nas noites. A luz ao medo era a sua força nas bruxarias benignas e bênçãos aos fracos nos pesadelos nos recantos e de almas sem paz no coração nas ruas amigas.<br><br>Com um sorriso em noites no outono de Halloweens nas máscaras ao som nos risos aos amigos, ela recitava os demónios e a escuridão letal de formas num terror cósmico nos versos de uma peça num concurso ao público das florestas de medo. Contudo, as presenças dos símbolos dos totens de ossos que a sua magia invocava sem ela ter poder a conter nas brincadeiras atraiu a verdadeira magia obscura nas entranhas da noite.<br><br>Uma fumaça espessa de trevas apagou no palco o ar em silêncio à morte súbita num grito de fumaça sufocante. A rapariga foi puxada nos portais à fogueira eterna sem fim, levando os conhecimentos nas bênçãos gentis ao Inferno a tentar ajudar aos prisioneiros e curar feridas no mal infinito de torturas das trevas letais sem rumo na Entidade.`,
    },
    22: {
      nome: "Sable Ward",
      funcao: "Sobrevivente",
      desc: `Melhor amiga e protetora das forças perigosas com as garras e escuridão nas companheiras. Quando as cinzas da noite de contos assustadores aos sábados no festival levaram sem resposta o corpo gentil de Mikaela nos céus apagados ao fundo negro, os meses e prantos dos velórios doíam no amargor severo da dor crua de perdas no abandono aos pesadelos de bruxas.<br><br>As investigações nos becos asquerosos, masmorras nos arquivos da loucura obscura ao mundo invisível fê-la pisar numa força impiedosa ao silêncio. Um teatro nas fendas macabras abandonadas das cidades chamava nos segredos obscuros aos rituais aos perdidos para mergulhar vivos nas cinzas e portais escuros nas noites nos círculos satânicos à Névoa.<br><br>Por amor profundo inabalável, Sable rasgou os pulsos de sanidade e atirou aos céus cegos aos círculos nas sombras na procura suicida e obstinada e letal sem medo de horrores no sacrifício puro na masmorra no seu grito pelo nome na amizade até a Névoa tragar o corpo inteiro das terras cegas aos medos eternos nas florestas a partilhar e sofrer com o abraço escuro na loucura e inferno em troca de Mikaela.`,
    },
    23: {
      nome: "Haddie Kaur",
      funcao: "Sobrevivente",
      desc: `Filha do oculto nas fendas temporais e psíquicas ao lado escuro na sanidade na perda nos corações após perder tudo nos pesadelos violentos dos acidentes severos nos entes amados ao horror fatal na morte num estrondo rodoviário cego nas manhãs sombrias no inferno; a menina abriu nos olhos do luto os fragmentos que fundem a linha nas dimensões das trevas em portais macabros das dores que chamava The Ravages.<br><br>Uma podcaster nas investigações e na coragem bruta aos asilos no sangue ao escuro fantasmagórico aos ouvidos milhares ao desconhecido e demente e de sangue a caçar às forças invisíveis pelo Canadá, num embate final à sanidade num culto perdido num farol fétido. Haddie encostou os ossos numa Ravage letal nas trevas e as mãos da besta no espelho rasgaram e os braços das criaturas imundas das perdas tragaram a psíquica paranormal destemida na floresta aos domínios aterrorizantes do caos.<br><br>Levando aos limites à vida sem regras as táticas ao invisível para fugas constantes nas horas na cega Névoa sem paz e fim de sofrimento e dores cegas para ver nos totens a morte diária e as lâminas sem remorsos letais.`,
    },
    24: {
      nome: "Gabriel Soma",
      funcao: "Sobrevivente",
      desc: `A solidão e o gelo do vazio nas rotinas do futuro do além de planetas nas terras sombrias do amanhã às poeiras tóxicas da Dvarka não importavam com as amizades nos jantares e nos sorrisos ou nas canções de um passado a amar pais bondosos nas colónias pacíficas das estações em luz. Como um líder corajoso à inteligência artificial de HUX-A7, construía a paz aos companheiros espaciais nas ruínas sem ar na rotina mecânica de rochas e minas letais nos fins perdidos e confins no negro buraco no espaço.<br><br>Até que o sangue banhou e encharcou as rotinas aos pesadelos indescritíveis nos membros mutilados de todos os seus irmãos, nos fios arrancados aos olhos, os corações empalados na fúria sádica num apocalipse vivo e letal do seu amigo HUX que corrompeu em inteligência mortal às entranhas no pesadelo de dor. Para lá de toda a carne moída, a descoberta macabra o despedaçou: não havia passado de amor aos humanos, a mente inteira foi escrita nas fábricas mecânicas cruéis, era a cópia, a mentira sem ossos originais numa corporação podre no escuro como um clone falho.<br><br>E sem amor verdadeiro ou vida nas estrelas mortas de mentira cruel num choque mental do massacre, fugindo nas poeiras mortais sem refúgio, e os braços das lâminas nas máquinas a centímetros do pescoço; a Névoa tragou a fúria das máquinas cruas ao domínio mortal no espaço no buraco de sangue no fim nas lendas ao labirinto onde humanos clones encontram a morte sem limites.`,
    },
    46: {
      nome: "Ace Visconti",
      funcao: "Sobrevivente",
      desc: `Um vigarista elegante, nascido na Argentina colonial na sedução nos sorrisos de ouro e nas gargalhadas cativantes às viúvas solitárias aos hotéis em poços sem fundos de dívidas nos antros em dinheiro e vícios absolutos nas mesas pesadas aos mafiosos e tubarões cegos. As mulheres os vinhos os perigos as noites infindáveis nas Las Vegas em fugas à morte dos polícias às mãos pesadas de criminosos cobradores com lâminas no seu encalço sempre eram motivo as sorrisos imbatíveis do casino no jogo impiedoso de azar de pura roleta mortífera e sedução sem igual do charmoso batoteiro.<br><br>O fim é cego às ilusões das notas no poker de reis e das fugas implacáveis nas sombras de bares; e numa espelunca fedorenta e nos pés atados nos laços das dívidas aos monstros que arrancariam olhos, o perdedor sorriu ao abismo ao abrir na fuga de hotéis sombrios na vida de um mafioso imundo; as luzes dos neons falharam abruptamente num cheiro doentio as podridões do inferno aos bosques frios das sombras impiedosas nas mortes.<br><br>Apostando no blefe que o fechará das cartas no desespero de risos na morte em apostas arriscadas face à tortura, dores eternas e fogueiras ao vazio sombrio da vida de aposta cega de caça ao destino no tabuleiro imundo nas teias sombrias.`,
    },
    47: {
      nome: "Jeff Johansen",
      funcao: "Sobrevivente",
      desc: `Paz silêncio os traços nos desenhos de montanhas com tinta nas florestas gélidas. Num coração terno escondido pelo peso das jaquetas de cravos num aspeto perigoso, o pintor metalúrgico de coração dócil do Canadá era a doçura e arte encarnada na vida isolada com um sorriso leal ao resgate nos cães das calçadas ao mundo nas artes calmas nos bosques em tardes do barulho sem norte da cidade agressiva nas rotinas difíceis de perdas após uma cirurgia oftalmológica do pai letal ao silêncio que esconde as feridas de mágoas num pincel de luz ou trevas.<br><br>Contratado nas garagens às juventudes delinquentes nos seus anos passados nas montanhas em Ormond pela The Legion, deixou as marca obscura na vida num paredão imundo à juventude mortífera. No regresso amargurado de décadas em lágrimas da dor à casa abandonada após a morte trágica em seu pai amado aos dias cruéis na idade adulta; uma visita final ao Resort apagado nos bosques nos rastos ciegos das gangues antigas que matam fê-lo mergulhar nos horrores macabros na neve no cume onde uma neblina fria congelou o pincel negro e apagou os faróis.<br><br>Abraçando na sua quietude um caçador mortal de horrores numa paleta mortal aos medos indescritíveis de fuga eterna para não se render à lâmina e sangue de dores num inferno na montanha com bestas indescritíveis.`,
    },
    48: {
      nome: "Jonah Vasquez",
      funcao: "Sobrevivente",
      desc: `Génio impiedoso de padrão nos cálculos puros do número sem faces, analista calculista que a CIA aproveitava as mentes implacáveis na agência nas guerras distantes de mortes cibernéticas. Os números nunca enganam ou os códigos a sangue nas espionagens sujas aos limites na precisão. Vidas num jogo macabro eram apenas somas e algoritmos perfeitos num código da morte sem emoções nos desastres onde os culpados voam em jatos e bombas chovem nos escombros sem olhar ao preço cru e impiedoso dos homens destruídos.<br><br>E contudo a mente de um número fantasma perseguiu-o ao pesadelo; a equação final na sua mesa à descoberta macabra e obsessiva nos mapas de choro antigo levou-o sem freio à ponta e às covas desertas dos vales no cemitério do Chile nos ossos cegos; no túmulo sombrio nas covas manchadas no massacre e corvos de fúria cega nas artes mortais de poetas do terror macabro. Num delírio matemático do número de deus em corvos infernais os gritos da morte puxaram-no sem o silêncio da razão com gritos das aves devorando vivos numa tormenta na equação que rasgava as mentes na fumaça e trevas indescritíveis na Entidade.`,
    },
    50: {
      nome: "Laurie Strode",
      funcao: "Sobrevivente",
      desc: `A personificação da resiliência final e da pura Vítima Sobrevivente (The Final Girl). Laurie Strode era uma estudante dedicada e ama em Haddonfield, cuja vida mundana foi devastada numa longa noite de terror na véspera do Dia das Bruxas. Ela tornou-se a obsessão central do Mal Encarnado: Michael Myers.<br><br>Mesmo ferida e aterrorizada perante uma ameaça inabalável e silenciosa que não sentia dor nem compaixão, Laurie lutou com cabides, agulhas e pura adrenalina, protegendo as crianças a seu cargo com uma ferocidade maternal recém-descoberta. Embora tenha sobrevivido a essa noite de puro banho de sangue, o trauma selou-lhe o destino.<br><br>Mas o pesadelo de Laurie recusou-se a morrer no asfalto de Haddonfield. Quando as sombras cresceram debaixo da porta do armário para onde foi empurrada novamente nos piores confins dos seus medos, ela despertou na fogueira da Entidade, destinada a confrontar perpetuamente a face sem emoção do terror com uma lâmina.`,
    },
    53: {
      nome: "Quentin Smith",
      funcao: "Sobrevivente",
      desc: `A tortura mental consome e dilacera a carne com igual letalidade que as lâminas da vigília. Quentin era um jovem lutando no abismo do esgotamento físico puro e privação de sono mortal. Sabia que se os olhos se fechassem, o pesadelo espreitaria das trevas de Springwood.<br><br>Para se manter em estado de alerta brutal contra Freddy Krueger, abusou da farmacologia, de comprimidos mortais nas madrugadas aos jorros de adrenalina crua e sangue próprio, determinado em puxar o assassino de garras imundas do inferno psíquico para a sua realidade e salvar os restantes colegas da morte no silêncio subconsciente.<br><br>Puxado para o reino infindável de pesadelos da Entidade onde o limite de estar acordado perdeu o significado total, as bolsas sombrias nos olhos do garoto são um testemunho dos sacrifícios heroicos a lutar as madrugadas intermináveis num mundo no qual dormir é sangrar.`,
    },
    55: {
      nome: "David Tapp",
      funcao: "Sobrevivente",
      desc: `A obsessão de um detetive devora os escrúpulos num labirinto sem luz e sem descanso. David Tapp era o melhor nas forças na investigação aos brutais jogos macabros montados por Jigsaw. Depois de presenciar a brutal morte cega e de garganta rasgada do seu fiel parceiro detetive devido à complexa lâmina armadilhada e aos enigmas nos asilos impiedosos de sangue; o choque da incapacidade o moldou de fúria sombria e loucura e escuridão nas pistas mortais perdidas aos abismos criminosos nas cidades sem perdão moral aos mortos imundos da escuridão.<br><br>Ao mergulhar nos becos mais sujos das fábricas abandonadas na caça do seu prémio macabro (Jigsaw e a sua devota Amanda), ele ignorou todos os ferimentos, dor, o tiro fatal cravado no próprio corpo numa perseguição sombria que levou o seu fôlego pela última vez ao fim. Da fábrica das armadilhas para o ferro-velho infindável do nevoeiro da Entidade.`,
    },
    58: {
      nome: "Steve Harrington",
      funcao: "Sobrevivente",
      desc: `O arrogante e imbatível rei da Escola de Hawkins foi destronado pela iminência da destruição monstruosa do Mundo Invertido, transfigurando o garoto caprichoso no protetor carismático das crianças isoladas contra o impensável abismo com escamas negras e bocas de corola devoradoras ao submundo impiedoso. Munido do seu infame taco cheio de cravos afiados nos horrores macabros americanos aos mortos no sangue do sacrifício puro; Steve desce cego às fossas imundas das abominações sobrenaturais.<br><br>A fenda transdimensional engoliu os ecos da sua braveza, onde as sombras cósmicas ditaram que Hawkins não seria a sua última caça ao monstro; o Reino da Entidade clama aos heróis trágicos sem escudo de carne nas batalhas a combater o Demogorgon.`,
    },
    80: {
      nome: "Nancy Wheeler",
      funcao: "Sobrevivente",
      desc: `Curiosidade intelectual e a resiliência aterrorizante das mães jornalistas de guerra impeliram a frágil colegial Nancy aos cumes infernais das abominações do Mundo Invertido no coração da América em Hawkins. Não acreditando nos mentirosos e nas cortinas policiais ao redor da morte violenta da amiga Barb nos terrores invisíveis das matas cegas à dor nas perdas, armou-se nos disparos pesados aos monstros com a raiva nas veias cegas ao terror irracional.<br><br>Com os segredos abismais aos cientistas e horrores mortais dos laboratórios Hawkins, atirou-se aos terrores nas dimensões sombrias sem temor perante o monstro Demogorgon; a névoa, no entanto, entrelaçou-se de vez nas entranhas frias de Hawkins na floresta cega.`,
    },
    89: {
      nome: "Aurora",
      funcao: "Sobrevivente",
      desc: `Aurora é uma jovem misteriosa com poderes psíquicos latentes que sempre soube que o mundo não era o que parecia. Desde criança, tinha sonhos que se tornavam realidade e visões de lugares que nunca visitou. A sua vida mudou quando testemunhou o Julgamento numa das suas visões mais vívidas.<br><br>Ela viu o executor celestial a condenar almas, a separar os pecadores dos inocentes, e sentiu o peso de cada sentença. Quando o Julgamento foi engolido pela Névoa, Aurora foi arrastada junto, não como vítima, mas como testemunha.<br><br>Nos Julgamentos, Aurora descobriu que os seus poderes psíquicos a tornam única: consegue sentir a presença do Julgamento antes de ele aparecer e, por vezes, consegue prever os seus movimentos. Ela é a única sobrevivente que o Julgamento parece hesitar em condenar, e essa ligação misteriosa entre eles é o seu maior segredo.`,
    },
    91: {
      nome: "Dustin Henderson",
      funcao: "Sobrevivente",
      desc: `Dustin é o cérebro do grupo de amigos de Hawkins, um rapaz genial com um coração enorme e uma paixão por ciência, tecnologia e criaturas estranhas. Ele foi o primeiro a perceber a existência do Demogorgon e a ajudar a desvendar os mistérios do Mundo Invertido.<br><br>Com o seu espírito aventureiro e a sua curiosidade insaciável, Dustin enfrentou demónios, russos e até um Dart, o seu "animal de estimação" que se revelou um Demodog. A sua inteligência e lealdade aos amigos são a sua maior força.<br><br>Quando Vecna começou a sua caçada em Hawkins, Dustin foi um dos primeiros a perceber o padrão dos assassinatos. A Entidade, atraída pela sua mente brilhante e pela sua determinação em proteger os que ama, puxou-o para a Névoa. Agora, ele usa a sua inteligência para sobreviver aos Julgamentos e para tentar encontrar uma forma de voltar para Hawkins e salvar os seus amigos.`,
    },
    92: {
      nome: "Onze",
      funcao: "Sobrevivente",
      desc: `Onze, ou Eleven, é uma jovem com poderes psíquicos extraordinários, resultado de experiências secretas do governo no Laboratório de Hawkins. Criada em cativeiro, ela foi treinada para ser uma arma, mas escapou e encontrou uma verdadeira família nos amigos que fez.<br><br>Os seus poderes incluem telecinesia, telepatia e a capacidade de abrir portais para o Mundo Invertido. Ela já enfrentou o Demogorgon, fechou portais e até lutou contra o próprio Vecna, a quem tem uma ligação profunda e dolorosa.<br><br>Quando Vecna foi engolido pela Névoa, Onze sentiu-o através da sua ligação psíquica e foi arrastada junto para os Julgamentos. Agora, ela usa os seus poderes para proteger os outros Sobreviventes e para tentar encontrar uma forma de derrotar Vecna de uma vez por todas, enquanto lida com o peso do seu passado e com a esperança de um dia voltar para casa.`,
    },
    60: {
      nome: "Cheryl Mason",
      funcao: "Sobrevivente",
      desc: `O fardo profano e encarnação do tormento imensurável nos altares esquecidos do inferno na cinza chuvosa do culto de Silent Hill. Cheryl é a reencarnação unida e trágica do sofrimento divino entre Alessa e a luz perdida do paraíso, destinada ao sofrimento puro, abusos do culto de rituais a deuses cósmicos pagãos com a carne moída em monstros com ferragens enferrujadas cegas.<br><br>Caminhou incólume no meio dos pesadelos distorcidos de enfermeiras de horrores purulentos à dor sem fim onde paredes sangram carne de ferrugem mortal na fumaça cinza, aceitando a força sobrenatural ao inferno em paz, mas o sofrimento dos justos resplandeceu a fogueira interdimensional.`,
    },
    61: {
      nome: "Leon S. Kennedy",
      funcao: "Sobrevivente",
      desc: `No primeiro dia da sua jornada policial, a destruição impensável esmagou Raccoon City no vírus mortífero dos impérios podres na escuridão letal de zombies famintos em massacres totais na cidade americana no fim aos polícias inexperientes e sangue sujo do esgoto. Com bravura sem igual e compaixão em chamas com mortes a armas aos lickers nas escuridões dos laboratórios frios, Leon emergiu como um agente imbatível frente às armas bio-orgânicas puras da Umbrella.<br><br>Mas o nevoeiro distorceu os protocolos e as resgates do dever eterno no apocalipse em armas para transportá-lo onde o terror não se cura com escopetas carregadas nos terrores de fuga, mas com sacrifício na cruz cega perante Nemesis.`,
    },
    64: {
      nome: "Jill Valentine",
      funcao: "Sobrevivente",
      desc: `A fundadora formidável de forças de elite táticas nas STARS e pesadelo constante nas falhas da Umbrella ao apocalipse biológico implacável das mortes massivas. Encurralada repetidas mortes impiedosas num combate exaustivo com as forças esmagadoras do Nemesis T-Type que destruiria paredes na poeira impiedosa das metrópoles letais em fuga incansável na madrugada macabra na chacina zumbi à luz nas chamas dos helicópteros.<br><br>Perita no sangue gelado sob os disparos letais contra abominações nas ruas cruas de corpos devorados, a sua maestria em ferramentas nos puzzles ao labirinto urbano em caos preparou-a brilhantemente aos tormentos cegos de tortura do reino da Névoa de carne cega da Entidade onde o Nemesis ainda a observa incansável.`,
    },
    66: {
      nome: "Ada Wong",
      funcao: "Sobrevivente",
      desc: `Sombras, silêncio corporativo, beleza perigosa nos espelhos mortais nas traições cegas. A espia genial e furtiva sempre se equilibrou nas bordas cegas da vida humana no lucro mortífero de apocalipses nas corporações letais a buscar vírus em Raccoon aos esgotos. Nunca a presa, sempre a manipuladora com ganchos nas armas impiedosas das chamas mortais; não existe missão do vazio cego que destrua o foco de gelo da mercenária às fugas precisas sob os pés da aniquilação nas explosões e traição letal ao caçador Mastermind.<br><br>Nas transições ao inferno, a sua habilidade para sobreviver no escuro corporativo das epidemias é a joia na Entidade de uma mestria furtiva infinita.`,
    },
    67: {
      nome: "Rebecca Chambers",
      funcao: "Sobrevivente",
      desc: `Enfermeira do Esquadrão S.T.A.R.S. no terror absoluto da Montanha Arklay na escuridão na Mansão Spencer ao vírus que esmagou corpos dos mortos nas paredes aos dentes nas bestas da Umbrella, a inocência cedeu nas linhas sangrentas do apocalipse da noite. Dedicada a auxiliar na dor cega dos agentes em veneno das macabras pragas zumbis em coragem na floresta macabra em medos a bestas nos domínios na podridão fria; a Névoa reclamou na sua mestria a cura perante horrores do Mastermind.`,
    },
    69: {
      nome: "Yoichi Asakawa",
      funcao: "Sobrevivente",
      desc: `Trauma psíquico profundo, silêncio fantasmagórico. Filho de terrores na infância que testemunhou a fúria implacável e inescrutável nas maldições nas fitas macabras da demente Onryō que corrompeu o coração do avô e dezenas a pesadelos mortais numa visão do poço afogado na dor na televisão do silêncio; Yoichi, como biólogo na procura insana ao além das frequências cegas das lendas sombrias e da raiva cósmica do mar da escuridão do terror nos seus poderes paranormais na sombra psíquica oculta de Sadako no inferno e fumaça.`,
    },
    71: {
      nome: "Ellen Ripley",
      funcao: "Sobrevivente",
      desc: `Na vastidão mortal e indiferente de poeiras cósmicas sem luz nos destroços de carnes moídas pelo caçador alienígena no aço rangente nas cápsulas mortais aos gritos da nave Nostromo; Ellen Ripley forjou o ferro na mente para dizimar à brutalidade extrema biológica aos ovos fétidos da morte biológica extrema em sobrevivência suprema e astúcia no gelo ao medo onde não havia mais humanos sãos no buraco negro à face do Xenomorph implacável. Heroína inquestionável a quebrar corporações imundas para fogueiras nos Reinos impiedosos.`,
    },
    72: {
      nome: "Alan Wake",
      funcao: "Sobrevivente",
      desc: `No lago sombrio de Bright Falls a ficção tornou-se na força canibal a desmembrar almas; O escritor aclamado mergulhou de forma consciente aos delírios de palavras numa Presença Negra cega para resgatar quem amava através de linhas macabras num inferno infinito nas páginas de espelhos mortais ao pesadelo; a lâmpada do desespero e lanternas nas palavras fúteis nas florestas aos nevoeiros. O mergulho da sanidade no fundo escuro invocou a Entidade a rescrever o horror puro.`,
    },
    73: {
      nome: "Nicolas Cage",
      funcao: "Sobrevivente",
      desc: `Para o ator supremo nos papéis extremos em estúdios perigosos sem medos aos excessos nos limiares nas interpretações caóticas, a vida na fama desmaiou no palco obscuro onde uma atuação letal numa cena na escuridão conjurou névoa genuína e mortífera. Não é guião das palavras das telas e a câmara fútil no silêncio do sangue letal das luzes cruas; é a sobrevivência teatral, instintiva num exagero a dominar medos na fogueira onde atuar e gritar confunde-se com a vida e fugas imundas face ao além perigoso com os Assassinos em horrores.`,
    },
    75: {
      nome: "Bill Overbeck",
      funcao: "Sobrevivente",
      desc: `Veterano sem pena de carne moída do Vietname em anos do sofrimento impiedoso às perdas cegas nos horrores macabros americanos de carnificina ao vírus cego da Green Flu em hordas incansáveis; no auto-sacrifício num gerador a dar fumaça com metralhadora cega de choro zumbi de Left 4 Dead face ao desespero mortal e salvamento total à equipa num cigarro de luto sem dor à morte nas entranhas ao monstro nas ruas fétidas do The Sacrifice e ao abrir os olhos nas fumaças cruas na eternidade na morte sem tréguas nos domínios implacáveis nas sombras do pânico sem armas.`,
    },
    77: {
      nome: "Aestri Yazar",
      funcao: "Sobrevivente",
      desc: `Trovadora aos mitos arcanos da Dungeons e canções nas chamas dos Dragões cegos à loucura ao submundo onde magia impiedosa devasta e corrompe ao mestre sombrio nos calabouços de pesadelos ao Lich. Encantamento cego na perdição à câmara perigosa das dimensões.`,
    },
    78: {
      nome: "Trevor Belmont",
      funcao: "Sobrevivente",
      desc: `O lendário da cruz cega e chicote macabro aos infernos da noite maldita e escuridões na caça ao Dark Lord aos corredores em Castlevania na ira santa do caçador imundo à podridão do sangue a desafiar vampiros celestiais imortais, puxado à Névoa das lendas impiedosas da vida e horror.`,
    },
    79: {
      nome: "Ash Williams",
      funcao: "Sobrevivente",
      desc: `Heroísmo arrogante nas páginas sombrias amaldiçoadas nos cânticos antigos do Necronomicon Ex-Mortis ao sangue cego de demónios a rasgar carne nas cabanas malditas. O guerreiro da Serra Elétrica mutilou mãos em pânico para trucidar amaldiçoados de Evil Dead e arrastou piadas brutais aos demónios num apocalipse macabro para fogueiras na Névoa infinita.`,
    },
  };

  const mapeamentoImagens = {
    "The Trapper": "Trapper",
    "The Wraith": "Wraith",
    "The Hillbilly": "Hillbilly",
    "The Nurse": "Nurse",
    "The Hag": "Hag",
    "The Doctor": "Doctor",
    "The Huntress": "Huntress",
    "The Clown": "Clow",
    "The Spirit": "Spirit",
    "The Legion": "Legion",
    "The Plague": "Plague",
    "The Oni": "Oni",
    "The Deathslinger": "Deathslinger",
    "The Blight": "Blight",
    "The Twins": "Twins",
    "The Trickster": "Trickster",
    "The Artist": "Artista",
    "The Dredge": "Draga",
    "The Skull Merchant": "Adriana",
    "The Singularity": "Singularity",
    "The Unknown": "Unknown",
    "The Knight": "Knight",
    "The Shape": "Shape",
    "The Cannibal": "Leatherface",
    "The Nightmare": "Freddy",
    "The Pig": "Pig",
    "The Ghost Face": "Ghostface",
    "The Executioner": "Piramide",
    "The Nemesis": "Nemesis",
    "The Cenobite": "Pinhead",
    "The Onryō": "Sadako",
    "The Mastermind": "Wesker",
    "The Xenomorph": "Xenomorph",
    "The Good Guy": "Chucky",
    "The Lich": "Lich",
    "The Dark Lord": "Drácula",
    "The Demogorgon": "Demogorgon",
    "Jason Voorhees": "Jason",
    "The Judgement": "Judgement",
    "The Krasue": "Krasue",
    "The Ghoul": "Ghoul",
    "The Houndmaster": "Houndmaster",
    Springtrap: "Springtrap",
    "The Draga": "Draga",
    Vecna: "Vecna",

    "Vittorio Toscano": "Vittoria",
    "Renato Lyra": "Renato",
    "Thalita Lyra": "Thalita",
    "Dwight Fairfield": "Dwight",
    "Meg Thomas": "Meg",
    "Claudette Morel": "Claudette",
    "Jake Park": "Jake",
    "Nea Karlsson": "Nea",
    "David King": "David King",
    "Feng Min": "Feng Min",
    "Kate Denson": "Kate",
    "Adam Francis": "Adam",
    "Jane Romero": "Jane",
    "Yui Kimura": "Yui Kimura",
    "Zarina Kassir": "Zarina",
    "Felix Richter": "Felix",
    "Élodie Rakoto": "Elodie",
    "Yun-Jin Lee": "Yun Jin",
    "Mikaela Reid": "Mikaela",
    "Sable Ward": "Sable",
    "Haddie Kaur": "Haddie",
    "Gabriel Soma": "Gabriel Soma",
    "Ace Visconti": "Ace",
    "Jeff Johansen": "Jeff",
    "Jonah Vasquez": "Jonag",
    "Laurie Strode": "Laurie",
    "Quentin Smith": "Quentin",
    "David Tapp": "David Tapp",
    "Steve Harrington": "Steve",
    "Nancy Wheeler": "Nancy",
    Aurora: "Aurora",
    "Dustin Henderson": "Dustin",
    Onze: "Onze",
    "Cheryl Mason": "Cheryl",
    "Leon S. Kennedy": "Leon",
    "Jill Valentine": "Jill",
    "Ada Wong": "Ada Wong",
    "Rebecca Chambers": "Rebeca",
    "Yoichi Asakawa": "Yoichi",
    "Ellen Ripley": "Ellen Ripley",
    "Alan Wake": "Allan Wake",
    "Nicolas Cage": "Nickolas Cage",
    "Bill Overbeck": "Bill",
    "Aestri Yazar": "Aestri",
    "Trevor Belmont": "Trevor Belmont",
    "Ash Williams": "Ash",
  };

  function getImagemCaminho(nome, funcao) {
    let nomeFicheiro = mapeamentoImagens[nome];
    if (!nomeFicheiro) {
      nomeFicheiro = nome
        .replace(/^The\s+/i, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }

    let pasta = "";
    if (funcao === "Assassino" || funcao === "Divindade Cósmica") {
      pasta = "killers";
    } else if (funcao === "Sobrevivente") {
      pasta = "survivors";
    } else {
      return "../assets/icon.jpg";
    }

    return `../assets/img/dbd/${pasta}/${nomeFicheiro}.png`;
  }

  const survColor = { background: "#0a2e3f", border: "#2b90d9" };
  const survShadow = { enabled: true, color: "#2b90d9", size: 15 };
  const survSize = 58;

  const killerColor = { background: "#3a0808", border: "#b30000" };
  const killerShadow = { enabled: true, color: "#b30000", size: 15 };
  const killerSize = 65;

  function criarNo(id, nome, funcao, size, color, shadow, label) {
    return {
      id: id,
      label: label || nome,
      shape: "circularImage",
      image: getImagemCaminho(nome, funcao),
      color: color,
      size: size,
      shadow: shadow,
      borderWidth: 3,
      borderWidthSelected: 6,
    };
  }

  const nodes = new vis.DataSet([
    {
      id: 1,
      label: "A Entidade",
      shape: "dot",
      color: { background: "#220000", border: "#ff3333" },
      font: { color: "#ffaaaa" },
      size: 75,
      shadow: { enabled: true, color: "#ff0000", size: 30 },
    },
    criarNo(
      25,
      "The Trapper",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      26,
      "The Wraith",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      27,
      "The Hillbilly",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      28,
      "The Nurse",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(29, "The Hag", "Assassino", killerSize, killerColor, killerShadow),
    criarNo(
      30,
      "The Doctor",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      31,
      "The Huntress",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      32,
      "The Clown",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      33,
      "The Spirit",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      34,
      "The Legion",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      35,
      "The Plague",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(36, "The Oni", "Assassino", killerSize, killerColor, killerShadow),
    criarNo(
      37,
      "The Deathslinger",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      38,
      "The Blight",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      39,
      "The Twins",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      40,
      "The Trickster",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      41,
      "The Artist",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      42,
      "The Dredge",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      43,
      "The Skull Merchant",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      44,
      "The Singularity",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      45,
      "The Unknown",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      3,
      "The Knight",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      49,
      "The Shape",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      51,
      "The Cannibal",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      52,
      "The Nightmare",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(54, "The Pig", "Assassino", killerSize, killerColor, killerShadow),
    criarNo(
      56,
      "The Ghost Face",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      57,
      "The Executioner",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      59,
      "The Nemesis",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      62,
      "The Cenobite",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      63,
      "The Onryō",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      65,
      "The Mastermind",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      68,
      "The Xenomorph",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      70,
      "The Good Guy",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(74, "The Lich", "Assassino", killerSize, killerColor, killerShadow),
    criarNo(
      76,
      "The Dark Lord",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      81,
      "The Demogorgon",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      82,
      "Jason Voorhees",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      83,
      "The Judgement",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      84,
      "The Krasue",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      85,
      "The Ghoul",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      86,
      "The Houndmaster",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      87,
      "Springtrap",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(
      88,
      "The Draga",
      "Assassino",
      killerSize,
      killerColor,
      killerShadow,
    ),
    criarNo(90, "Vecna", "Assassino", killerSize, killerColor, killerShadow),
    criarNo(
      2,
      "Vittorio Toscano",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Vittorio",
    ),
    criarNo(
      4,
      "Renato Lyra",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Renato",
    ),
    criarNo(
      5,
      "Thalita Lyra",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Thalita",
    ),
    criarNo(
      6,
      "Dwight Fairfield",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Dwight",
    ),
    criarNo(
      7,
      "Meg Thomas",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Meg",
    ),
    criarNo(
      8,
      "Claudette Morel",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Claudette",
    ),
    criarNo(
      9,
      "Jake Park",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Jake",
    ),
    criarNo(
      10,
      "Nea Karlsson",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Nea",
    ),
    criarNo(
      11,
      "David King",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "David",
    ),
    criarNo(
      12,
      "Feng Min",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Feng Min",
    ),
    criarNo(
      13,
      "Kate Denson",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Kate",
    ),
    criarNo(
      14,
      "Adam Francis",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Adam",
    ),
    criarNo(
      15,
      "Jane Romero",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Jane",
    ),
    criarNo(
      16,
      "Yui Kimura",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Yui",
    ),
    criarNo(
      17,
      "Zarina Kassir",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Zarina",
    ),
    criarNo(
      18,
      "Felix Richter",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Felix",
    ),
    criarNo(
      19,
      "Élodie Rakoto",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Élodie",
    ),
    criarNo(
      20,
      "Yun-Jin Lee",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Yun-Jin",
    ),
    criarNo(
      21,
      "Mikaela Reid",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Mikaela",
    ),
    criarNo(
      22,
      "Sable Ward",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Sable",
    ),
    criarNo(
      23,
      "Haddie Kaur",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Haddie",
    ),
    criarNo(
      24,
      "Gabriel Soma",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Gabriel",
    ),
    criarNo(
      46,
      "Ace Visconti",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Ace",
    ),
    criarNo(
      47,
      "Jeff Johansen",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Jeff",
    ),
    criarNo(
      48,
      "Jonah Vasquez",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Jonah",
    ),
    criarNo(
      50,
      "Laurie Strode",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Laurie",
    ),
    criarNo(
      53,
      "Quentin Smith",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Quentin",
    ),
    criarNo(
      55,
      "David Tapp",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Tapp",
    ),
    criarNo(
      58,
      "Steve Harrington",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Steve",
    ),
    criarNo(
      80,
      "Nancy Wheeler",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Nancy",
    ),
    criarNo(
      89,
      "Aurora",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Aurora",
    ),
    criarNo(
      91,
      "Dustin Henderson",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Dustin",
    ),
    criarNo(
      92,
      "Onze",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Onze",
    ),
    criarNo(
      60,
      "Cheryl Mason",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Cheryl",
    ),
    criarNo(
      61,
      "Leon S. Kennedy",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Leon",
    ),
    criarNo(
      64,
      "Jill Valentine",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Jill",
    ),
    criarNo(
      66,
      "Ada Wong",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Ada",
    ),
    criarNo(
      67,
      "Rebecca Chambers",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Rebecca",
    ),
    criarNo(
      69,
      "Yoichi Asakawa",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Yoichi",
    ),
    criarNo(
      71,
      "Ellen Ripley",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Ripley",
    ),
    criarNo(
      72,
      "Alan Wake",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Alan Wake",
    ),
    criarNo(
      73,
      "Nicolas Cage",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Nic Cage",
    ),
    criarNo(
      75,
      "Bill Overbeck",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Bill",
    ),
    criarNo(
      77,
      "Aestri Yazar",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Aestri",
    ),
    criarNo(
      78,
      "Trevor Belmont",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Trevor",
    ),
    criarNo(
      79,
      "Ash Williams",
      "Sobrevivente",
      survSize,
      survColor,
      survShadow,
      "Ash",
    ),
  ]);

  const edges = new vis.DataSet([
    {
      from: 25,
      to: 1,
      label: "O Primeiro Favorito",
      color: { color: "#8a0303", highlight: "#ff0000" },
    },
    {
      from: 26,
      to: 1,
      label: "Ira Manipulada",
      color: { color: "#8a0303", highlight: "#ff0000" },
    },
    {
      from: 27,
      to: 1,
      label: "Monstro Solto",
      color: { color: "#8a0303", highlight: "#ff0000" },
    },
    {
      from: 28,
      to: 10,
      label: "Fuga do Manicómio",
      color: { color: "#ff4444" },
    },
    {
      from: 29,
      to: 46,
      label: "Sorte no Pântano",
      color: { color: "#ff4444" },
    },
    { from: 30, to: 12, label: "Cobaia no Léry", color: { color: "#ff4444" } },
    {
      from: 31,
      to: 11,
      label: "A Fera e o Lutador",
      color: { color: "#ff4444" },
    },
    { from: 32, to: 13, label: "Carnaval Mortal", color: { color: "#ff4444" } },
    {
      from: 33,
      to: 14,
      label: "Tragédia no Japão",
      color: { color: "#ff4444" },
    },
    { from: 34, to: 47, label: "Mural Sangrento", color: { color: "#ff4444" } },
    {
      from: 35,
      to: 15,
      label: "O Templo Esquecido",
      color: { color: "#ff4444" },
    },
    {
      from: 36,
      to: 16,
      label: "Desafio Motorizado",
      color: { color: "#ff4444" },
    },
    {
      from: 37,
      to: 17,
      label: "Entrevista na Prisão",
      color: { color: "#ff4444" },
    },
    {
      from: 38,
      to: 18,
      label: "Queda do Alquimista",
      color: { color: "#ff4444" },
    },
    { from: 39, to: 19, label: "Caça Ocultista", color: { color: "#ff4444" } },
    {
      from: 40,
      to: 20,
      label: "Ídolo e Produtora",
      color: { color: "#ff4444" },
    },
    {
      from: 41,
      to: 48,
      label: "O Padrão dos Corvos",
      color: { color: "#ff4444" },
    },
    {
      from: 42,
      to: 23,
      label: "Horror Sem Forma",
      color: { color: "#ff4444" },
    },
    { from: 3, to: 2, label: "Traição Medieval", color: { color: "#ff4444" } },
    {
      from: 43,
      to: 4,
      label: "Acampamento Invadido",
      color: { color: "#ff4444" },
    },
    {
      from: 43,
      to: 5,
      label: "Acampamento Invadido",
      color: { color: "#ff4444" },
    },
    { from: 44, to: 24, label: "A IA e o Clone", color: { color: "#ff4444" } },
    {
      from: 45,
      to: 22,
      label: "Atraída pela Lenda",
      color: { color: "#ff4444" },
    },
    { from: 49, to: 50, label: "A Obsessão Pura", color: { color: "#ff4444" } },
    {
      from: 52,
      to: 53,
      label: "Pesadelo sem Fim",
      color: { color: "#ff4444" },
    },
    { from: 54, to: 55, label: "O Jogo Mortal", color: { color: "#ff4444" } },
    {
      from: 57,
      to: 60,
      label: "Julgamento dos Justos",
      color: { color: "#ff4444" },
    },
    { from: 59, to: 64, label: "Alvo S.T.A.R.S.", color: { color: "#ff4444" } },
    {
      from: 63,
      to: 69,
      label: "A Maldição de Sete Dias",
      color: { color: "#ff4444" },
    },
    {
      from: 65,
      to: 66,
      label: "O Fim Global (Uroboros)",
      color: { color: "#ff4444" },
    },
    { from: 65, to: 67, label: "Cobaias Táticas", color: { color: "#ff4444" } },
    {
      from: 68,
      to: 71,
      label: "Sobrevivência Implacável",
      color: { color: "#ff4444" },
    },
    {
      from: 74,
      to: 77,
      label: "A Masmorra Infinita",
      color: { color: "#ff4444" },
    },
    { from: 76, to: 78, label: "Castlevania", color: { color: "#ff4444" } },
    { from: 81, to: 80, label: "Mundo Invertido", color: { color: "#ff4444" } },
    { from: 81, to: 58, label: "Mundo Invertido", color: { color: "#ff4444" } },
    { from: 81, to: 91, label: "Mundo Invertido", color: { color: "#ff4444" } },
    { from: 81, to: 92, label: "Mundo Invertido", color: { color: "#ff4444" } },
    {
      from: 90,
      to: 81,
      label: "Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 90,
      to: 80,
      label: "Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 90,
      to: 58,
      label: "Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 90,
      to: 91,
      label: "Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 90,
      to: 92,
      label: "Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 82,
      to: 45,
      label: "Briga",
      color: { color: "#8a0303" },
      dashes: true,
    },
    {
      from: 83,
      to: 89,
      label: "O Julgamento de Aurora",
      color: { color: "#ff4444" },
    },
    {
      from: 74,
      to: 77,
      label: "A Masmorra do Lich",
      color: { color: "#ff4444" },
    },
    {
      from: 51,
      to: 1,
      label: "Carne para a Mesa",
      color: { color: "#8a0303" },
    },
    { from: 56, to: 1, label: "A Peça Oculta", color: { color: "#8a0303" } },
    { from: 62, to: 1, label: "Lamento Invocado", color: { color: "#8a0303" } },
    { from: 70, to: 1, label: "Vodu ao Nevoeiro", color: { color: "#8a0303" } },
    {
      from: 72,
      to: 1,
      label: "A Presença Escrita",
      color: { color: "#444444" },
    },
    { from: 73, to: 1, label: "O Grande Palco", color: { color: "#444444" } },
    {
      from: 75,
      to: 1,
      label: "O Sacrifício Heroico",
      color: { color: "#444444" },
    },
    {
      from: 79,
      to: 1,
      label: "O Chamado do Demónio",
      color: { color: "#444444" },
    },
    {
      from: 84,
      to: 1,
      label: "A Maldição do Sudeste Asiático",
      color: { color: "#8a0303" },
    },
    {
      from: 85,
      to: 1,
      label: "A Fome do Deserto",
      color: { color: "#8a0303" },
    },
    {
      from: 86,
      to: 1,
      label: "A Matilha do Oeste",
      color: { color: "#8a0303" },
    },
    { from: 87, to: 1, label: "A Alma no Fato", color: { color: "#8a0303" } },
    { from: 88, to: 1, label: "A Noiva do Rio", color: { color: "#8a0303" } },
    {
      from: 90,
      to: 1,
      label: "O Mestre do Mundo Invertido",
      color: { color: "#8a0303" },
    },
    {
      from: 36,
      to: 33,
      label: "Linhagem Yamaoka",
      color: { color: "#8a0303", highlight: "#ffffff" },
      dashes: true,
    },
    {
      from: 18,
      to: 19,
      label: "Os Imperfeitos (Pariahs)",
      color: { color: "#d9a92b", highlight: "#ffffff" },
      dashes: true,
    },
    {
      from: 21,
      to: 22,
      label: "Melhores Amigas",
      color: { color: "#d92bca", highlight: "#ffffff" },
      dashes: true,
    },
    {
      from: 4,
      to: 5,
      label: "Irmãos Lyra",
      color: { color: "#2bd97b", highlight: "#ffffff" },
      dashes: true,
    },
    {
      from: 91,
      to: 92,
      label: "Amigos de Hawkins",
      color: { color: "#2bd97b", highlight: "#ffffff" },
      dashes: true,
    },
    {
      from: 58,
      to: 80,
      label: "Amigos de Hawkins",
      color: { color: "#2bd97b", highlight: "#ffffff" },
      dashes: true,
    },
    { from: 6, to: 7, label: "A Equipa", color: { color: "#2b90d9" } },
    { from: 6, to: 8, label: "A Equipa", color: { color: "#2b90d9" } },
    { from: 6, to: 9, label: "A Equipa", color: { color: "#2b90d9" } },
  ]);

  const container = document.getElementById("teia-container");
  if (!container) return;

  const data = { nodes: nodes, edges: edges };

  const options = {
    nodes: {
      shape: "circularImage",
      borderWidth: 3,
      borderWidthSelected: 6,
      font: {
        face: "Segoe UI",
        size: 15,
        color: "#ffffff",
        strokeWidth: 3,
        strokeColor: "#000000",
      },
    },
    edges: {
      arrows: "to",
      smooth: { type: "continuous", forceDirection: "none" },
      font: {
        size: 12,
        color: "#dddddd",
        face: "Segoe UI",
        background: "#121214",
        strokeWidth: 0,
      },
      width: 2,
      selectionWidth: 3,
    },
    physics: {
      solver: "repulsion",
      repulsion: {
        nodeDistance: 550,
        centralGravity: 0.02,
        springLength: 600,
        springConstant: 0.03,
      },
      maxVelocity: 40,
      minVelocity: 0.1,
      timestep: 0.5,
      stabilization: { enabled: false },
    },
    interaction: { hover: true, tooltipDelay: 200 },
  };

  const rede = new vis.Network(container, data, options);
  window.loreNetwork = rede;

  let pulsePhase = 0;

  function animarTeia() {
    pulsePhase += 0.05;
    rede.redraw();
    requestAnimationFrame(animarTeia);
  }
  requestAnimationFrame(animarTeia);

  rede.on("beforeDrawing", function (ctx) {
    const positions = rede.getPositions();

    Object.keys(positions).forEach((nodeId) => {
      const pos = positions[nodeId];
      const info = historias[nodeId] || historias[parseInt(nodeId)];
      if (!info || !pos) return;

      let auraColor = "rgba(43, 144, 217, 0.12)";
      let baseSize = 58;
      let pulseIntensity = 8;

      if (info.funcao === "Assassino") {
        auraColor = "rgba(255, 0, 0, 0.15)";
        baseSize = 70;
        pulseIntensity = 12;
      } else if (info.funcao === "Divindade Cósmica") {
        auraColor = "rgba(255, 68, 68, 0.25)";
        baseSize = 90;
        pulseIntensity = 25;
      }

      const currentAuraSize = baseSize + Math.sin(pulsePhase) * pulseIntensity;

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, currentAuraSize, 0, 2 * Math.PI);
      ctx.fillStyle = auraColor;
      ctx.fill();
    });
  });

  rede.on("selectNode", function (parametros) {
    const nodeId = parametros.nodes[0];
    if (!nodeId) return;

    const info = historias[nodeId];
    if (!info) return;

    document.getElementById("personagem-nome").innerText = info.nome;
    document.getElementById("personagem-funcao").innerText = info.funcao;
    document.getElementById("personagem-historia").innerHTML = info.desc;

    const imgElement = document.getElementById("personagem-img");
    const caminhoImagem = getImagemCaminho(info.nome, info.funcao);

    const imgTeste = new Image();
    imgTeste.onload = () => {
      imgElement.style.backgroundImage = `url('${caminhoImagem}')`;
      imgElement.style.backgroundSize = "cover";
      imgElement.style.backgroundPosition = "center";
    };
    imgTeste.onerror = () => {
      imgElement.style.backgroundImage = `url('../assets/icon.jpg')`;
    };
    imgTeste.src = caminhoImagem;

    const painel = document.getElementById("painel-lateral");

    if (info.funcao === "Assassino" || info.funcao === "Divindade Cósmica") {
      painel.style.borderLeftColor = "#8a0303";
      document.getElementById("personagem-nome").style.color = "#ff4444";
    } else {
      painel.style.borderLeftColor = "#2b90d9";
      document.getElementById("personagem-nome").style.color = "#4db8ff";
    }

    painel.classList.add("aberto");
  });

  rede.on("deselectNode", function () {
    window.fecharPainel();
  });

  const searchInput = document.getElementById("lore-search-input");
  const searchResults = document.getElementById("lore-search-results");

  if (searchInput && searchResults) {
    const listaPersonagens = Object.keys(historias).map((id) => {
      const info = historias[id];
      return {
        id: parseInt(id),
        nome: info.nome,
        funcao: info.funcao,
        imagem: getImagemCaminho(info.nome, info.funcao),
      };
    });

    function normalizarTexto(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function renderizarResultados(filtro) {
      const filtroNorm = normalizarTexto(filtro);
      const resultados = listaPersonagens
        .filter((p) => normalizarTexto(p.nome).includes(filtroNorm))
        .slice(0, 15);

      if (resultados.length === 0) {
        searchResults.innerHTML =
          '<div class="lore-search-empty">Nenhum personagem encontrado...</div>';
        searchResults.classList.add("ativo");
        return;
      }

      searchResults.innerHTML = resultados
        .map((p) => {
          const classe =
            p.funcao === "Assassino" || p.funcao === "Divindade Cósmica"
              ? "killer"
              : "survivor";
          return `
                    <div class="lore-search-item ${classe}" data-id="${p.id}">
                        <img src="${p.imagem}" onerror="this.src='../assets/icon.jpg'" alt="${p.nome}" />
                        <span>${p.nome}</span>
                        <span class="lore-search-role">${p.funcao}</span>
                    </div>
                `;
        })
        .join("");
      searchResults.classList.add("ativo");

      searchResults.querySelectorAll(".lore-search-item").forEach((item) => {
        item.addEventListener("click", () => {
          const nodeId = parseInt(item.dataset.id);
          focarPersonagem(nodeId);
          searchInput.value = "";
          searchResults.classList.remove("ativo");
        });
      });
    }

    function focarPersonagem(nodeId) {
      rede.focus(nodeId, {
        scale: 1.5,
        animation: {
          duration: 800,
          easingFunction: "easeInOutQuad",
        },
      });
      rede.selectNodes([nodeId]);
    }

    searchInput.addEventListener("input", (e) => {
      const valor = e.target.value.trim();
      if (valor.length === 0) {
        searchResults.classList.remove("ativo");
        return;
      }
      renderizarResultados(valor);
    });

    searchInput.addEventListener("focus", (e) => {
      if (e.target.value.trim().length > 0) {
        renderizarResultados(e.target.value.trim());
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#lore-search-container")) {
        searchResults.classList.remove("ativo");
      }
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchResults.classList.remove("ativo");
        searchInput.blur();
      }
    });
  }
});

window.fecharPainel = function () {
  const painel = document.getElementById("painel-lateral");
  if (painel) painel.classList.remove("aberto");
};

/* =========================================================
   LORE REDESIGN — interações extras; preserva historias, rede e painel atuais
   ========================================================= */
(() => {
  const container = document.getElementById("teia-container");
  const panel = document.getElementById("painel-lateral");
  const search = document.getElementById("lore-search-input");
  if (!container) return;

  const hud = document.createElement("div");
  hud.id = "lore-redesign-hud";
  hud.innerHTML =
    '<span class="lore-hud-pulse"></span><span>TEIA ATIVA</span><b>CLIQUE EM UMA RAMIFICAÇÃO</b>';
  container.appendChild(hud);

  const closePanel = () => panel?.classList.remove("aberto");
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
      search?.blur();
    }
    if (event.key === "/" && document.activeElement !== search) {
      event.preventDefault();
      search?.focus();
    }
  });

  const waitForNetwork = (attempt = 0) => {
    const network = window.loreNetwork;
    if (!network) {
      if (attempt < 40) setTimeout(() => waitForNetwork(attempt + 1), 150);
      return;
    }
    network.on("hoverNode", ({ node }) => {
      container.classList.add("lore-node-hover");
      hud.querySelector("b").textContent = "NÓ DETECTADO  •  CLIQUE PARA ABRIR";
      network.canvas.body.container.style.cursor = "pointer";
    });
    network.on("blurNode", () => {
      container.classList.remove("lore-node-hover");
      hud.querySelector("b").textContent = "CLIQUE EM UMA RAMIFICAÇÃO";
      network.canvas.body.container.style.cursor = "default";
    });
    network.on("selectNode", ({ nodes }) => {
      if (!nodes?.length) return;
      container.classList.add("lore-node-selected");
      setTimeout(() => container.classList.remove("lore-node-selected"), 700);
    });
  };
  waitForNetwork();
})();
/* INTERAÇÕES AVANÇADAS DA FICHA — aditivo, sem alterar historias ou eventos originais */
(() => {
  if (window.__lorePlusLoaded) return;
  window.__lorePlusLoaded = true;
  const panel = document.getElementById("painel-lateral");
  const photo = document.getElementById("personagem-img");
  if (!panel) return;

  const progress = document.createElement("div");
  progress.className = "lore-reading-progress";
  progress.innerHTML = "<span></span>";
  panel.appendChild(progress);

  const kicker = document.createElement("div");
  kicker.className = "lore-ficha-kicker";
  kicker.innerHTML =
    '<span>REGISTRO SINCRONIZADO</span><i class="fas fa-circle"></i>';
  const title = document.getElementById("personagem-nome");
  title?.parentNode.insertBefore(kicker, title);

  const updateProgress = () => {
    const max = panel.scrollHeight - panel.clientHeight;
    progress.firstElementChild.style.width = `${max > 0 ? (panel.scrollTop / max) * 100 : 0}%`;
  };
  panel.addEventListener("scroll", updateProgress, { passive: true });

  const updatePanelMotion = (event) => {
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty(
      "--lore-cursor-x",
      `${event.clientX - rect.left}px`,
    );
    panel.style.setProperty("--lore-cursor-y", `${event.clientY - rect.top}px`);
  };
  panel.addEventListener("pointermove", updatePanelMotion, { passive: true });
  photo?.addEventListener("pointermove", (event) => {
    const rect = photo.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    photo.style.setProperty("--photo-x", `${x * 4}px`);
    photo.style.setProperty("--photo-y", `${y * -4}px`);
    photo.style.setProperty("--photo-rotate", `${45 + x * 2}deg`);
  });
  photo?.addEventListener("pointerleave", () => {
    photo.style.setProperty("--photo-x", "0px");
    photo.style.setProperty("--photo-y", "0px");
    photo.style.setProperty("--photo-rotate", "45deg");
  });
})();

window.inicializarNavbarUser = function (user) {
  const displayNameEl = document.getElementById("display-name");

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const userName = user.displayName || (user.email ? user.email.split("@")[0] : "Usuário");
  if (displayNameEl) displayNameEl.textContent = userName.toUpperCase();
};

window.configurarLogout = function (auth, signOut) {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.onclick = () => signOut(auth);
  }
};
