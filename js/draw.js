function draw()
{
    r.clearRect(0,0,c.width,c.height);
    switch(lv)
    {
        case 0:
            r.drawImage(imgmenu,0,0,c.width,c.height);
            if(mx>300&&mx<400&&my>150&&my<200)
            {
                r.drawImage(imgmenujogar,0,0,c.width,c.height);
            }
            else if(mx>300&&mx<400&&my>225&&my<275)
            {
                r.drawImage(imgmenuhist,0,0,c.width,c.height);
            }
            else if(mx>270&&mx<470&&my>300&&my<350)
            {
                r.drawImage(imgmenucontrol,0,0,c.width,c.height);
            }
            else if(mx>300&&mx<400&&my>375&&my<425)
            {
                r.drawImage(imgmenucreditos,0,0,c.width,c.height);
            }
            audiomenu.play();
            break;
        case 1:
            audiomenu.pause();
            audiomenu.load();
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            text("Inicia aqui a hist\u00f3ria de um garoto que almeja",350,410);
            text("ser o melhor matem\u00e1tico do mundo!",350,440);
            break;
        case 2:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            text("Esse mesmo garoto passava por dificuldades na escola.",350,410);
            text("Ele era alvo de piadas por parte de sua professora e seus colegas.",350,440);
            break;
        case 3:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            text("Por\u00e9m, ele estava determinado e prestes a mudar isso.",350,425);
            break;
        case 4:
            audioaula.play();
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:ZzZzZz... (dormindo)",350,425);
            break;
        case 5:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora:ACORDE!!!",350,425);
            break;
        case 6:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora:Nunca vai aprender mesmo",350,400);
            text("Piores notas da turma e ainda dormindo na aula",350,430);
            text("Deveria ter vergonha.",350,460);
            break;
        case 7:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Garoto:Voc\u00ea vai ver professora Debora!",350,410);
            text("Eu ainda vou ser o melhor matematico do mundo!",350,440);
            break;
        case 8:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora Debora:Voc\u00ea?! Nem se estivermos em outro universo.",350,400);
            text("Nem o melhor da turma conseguiria",350,430);
            text("Todos sabemos que o melhor da turma sempre sera o David.",350,460);
            break;
        case 9:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("David:Que isso?",350,400);
            text("Assim eu fico envergonhado",350,430);
            text("Mentira, Nunca fico envergonhado, sei que sou muito bom.",350,460);
            break;
        case 10:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora Debora:Se voc\u00ea se acha t\u00e3o bom em matem\u00e1tica",350,410);
            text("n\u00e3o se recusaria a fazer um exerc\u00edcio, certo?",350,440);
            break;
        case 11:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Pode mandar!!!",350,425);
            break;
        case 12:
            audioaula.pause();
            audioaula.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual  a raiz da fun\u00e7\u00e3o y=2x+4",c.width/2,130);
            text("-2",210,310);
            text("2",210,410);
            text("-4",500,310);
            text("4",500,410);
            break;
        case 13:
            audioconta.pause();
            audioconta.load();
            audioaula.play();
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-255,50,205,300);
            text("Professora Debora:Hummm, talvez esteja certo.",350,425);
            break;
        case 14:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-255,50,205,300);
            text("Garoto:Eu disse que se eu me dedicar eu consigo.",350,425);
            break;
        case 15:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Turma:DESCE DO PALCO",350,425);
            break;
        case 16:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("*BARULHO DO SINAL*",350,400);
        case 17:
            r.drawImage(imgaula,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora Debora:Turma, podem ir",350,410);
            text("Voc\u00eas tem muito trabalho de casa a fazer.",350,440);
            break;
        case 18:
            audioaula.pause();
            audioaula.load();
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            text("Mais tarde naquele dia",350,425);
            break;
        case 19:
            audiodavid.play();
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:HAHAHAHA, que piada",350,410);
            text("Melhor matem\u00e1tico do mundo, ta bom.",350,440);
            break;
        case 20:
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("Garoto:Voc\u00ea vai ver, eu vou provar para voc\u00eas",350,410);
            text("Para todos voc\u00eas.",350,440);
            break;
        case 21:
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:Sugiro que treine muito.",350,410);
            text("Resolva essa quest\u00e3o, se for capaz.",350,440);
            break;
        case 22:
            audiodavid.load();
            audiodavid.pause();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual  a raiz da fun\u00e7\u00e3o y=-2x+4",c.width/2,130);
            text("-2",210,310);
            text("4",500,310)
            text("2",210,410);
            text("N\u00e3o Sei,",500,400);
            text("sou de humanas",500,420);
            break;
        case 23:
            audioconta.pause();
            audioconta.load();
            audiodavid.play();
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:ue",350,410);
            text("Como conseguiu fazer essa conta?",350,440);
            break;
        case 24:
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("Garoto:Para falar a verdade nem foi t\u00e3o dificil.",350,425);
            break;
        case 25:
            r.drawImage(imgbusao,0,0,c.width,350);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:Nem me importa",350,410);
            text("Esse exerc\u00edcio foi realmente feito para pessoas com dois neuronios.",350,440);
            break;
        case 26:
            audiodavid.pause();
            audioquarto.play();
            audiodavid.load();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("Mais tarde naquele mesmo dia.",350,425)
            break;
        case 27:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Essa coisa toda de matem\u00e1tica esta me deixando preocupado.",350,425);
            break;
        case 28:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Mae:FILHO VENHA JANTAR!!!",350,425);
            break;
        case 29:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:JA VOU!!!",350,425);
            break;
        case 30:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Melhor eu ir jantar e esquecer isso por um tempo.",350,425);
            break;
        case 31:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("Mesmo preocupado o garoto foi para a escola",350,410);
            text("e ainda estava distraido.",350,440);
            break;
        case 32:
            audioaula.play();
            audioquarto.pause();
            audioquarto.load();
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Galera",350,410);
            text("Vamos ter um campeonato mundial de matem\u00e1tica!",350,440);
            break;
        case 33:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Garoto:Esta ser\u00e1 minha chance!",350,425);
            break;
        case 34:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Vou passar uma prova para analisar o nivel de voc\u00eas.",350,425);
            break;
        case 35:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Era bem isso que eu queria.",350,425);
            break;
        case 36:
            audioaula.pause();
            audioaula.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual as raizes da \u00e7\u00e3o y=4x+12",c.width/2,130);
            text("-3",210,310);
            text("3",210,410);
            text("Sou Incapaz",500,310);
            text("9",500,410);
            break;
        case 37:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual \u00e9 o menor dos poligonos?",c.width/2,130);
            text("Digono",210,310);
            text("Quadrado",210,410);
            text("Triangulo",500,310);
            text("Hexagono",500,410);
            break;
        case 38:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Resolva a conta {[(30x1280)/350]+30}x0:",c.width/2,130);
            text("139,714",210,310);
            text("0",210,410);
            text("135",500,310);
            text("30",500,410);
            break;
        case 39:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual a o comprimento de um circulo?",c.width/2,130);
            text("Pi x (r x r)",210,310);
            text("2 x Pi x r",210,410);
            text("Desisto",500,310);
            text("2 x Pi",500,410);
            break;
        case 40:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("0,8 representa:",c.width/2,130);
            text("20%",210,310);
            text("100%",210,410);
            text("80%",500,310);
            text("0,8%",500,410);
            break;
        case 41:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Voc\u00ea quer ir para o",c.width/2,120);
            text("campeonato mundial de matem\u00e1tica?",c.width/2,140);
            text("Sim",210,310);
            text("Nunca",210,410);
            text("Pode ser",500,310);
            text("Nao Sei",500,410);
            break;
        case 42:
            audioconta.pause();
            audioconta.load();
            audioaula.play();
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Espero que tenham ido bem",350,410);
            text("Vou entregar as notas amanh\u00e3.",350,440);
            break;
        case 43:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Mal posso esperar para ver a minha nota.",350,425);
            break; 
        case 44:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("E no onibus o garoto estava ansioso para chegar em casa",350,410);
            text("At\u00e9 que David, sim aquele garoto chato aparece.",350,440);
            break; 
        case 45:
            audioaula.pause();
            audioaula.load();
            audiodavid.play();
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("David:Ei! Eu sou tudo menos chato.",350,425);
            break; 
        case 46:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("Chato e burro! Ningu\u00e9m te falou que voce esta proibido",350,410);
            text("de falar com o Narrador.",350,440);
            break;
        case 47:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("David:ue",350,410);
            text("Devem tirar do meu sal\u00e1rio.",350,440)
            break;
        case 48:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("Enfim, oque voc\u00ea tem que fazer agora?",350,425);
            break;
        case 49:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("David:O roteiro diz para eu desafiar o garoto.",350,425);
            break;
        case 50:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("Est\u00e1 esperando oque?",350,425);
            break;
        case 51:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("David:Pensando no que falar.No roteiro diz para eu improvisar.",350,425);
            break;
        case 52:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,10,50,205,300);
            text("Fale qualquer coisa!",350,425);
            break;
        case 53:
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            r.drawImage(imgman,10,50,205,300);
            text("David:Lorem ipsum dolor sit amet, consectetur adipiscing elit.",350,400);
            text("Etiam eget ligula eu lectus lobortis condimentum.",350,430);
            text("Aliquam nonummy auctor massa.",350,460);
            break;
        case 54:
            audiodavid.pause();
            audiodavid.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Uma par\u00e1bola geralmente caracteriza uma func\u00e3o do:",c.width/2,130);
            text("Esquisitangulo",210,310);
            text("1 grau",210,410);
            text("2 grau",500,310);
            text("4 grau",500,410);
            break;
        case 55:
            audioconta.pause();
            audioconta.load();
            audiodavid.play();
            r.drawImage(imgbusao,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Isso definitivamente foi muito estranho.",350,425);
        case 56:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("O garoto foi para casa bem animado, pois achava que tinha ido bem na prova.",350,425);
            break;
        case 57:
            audiodavid.pause();
            audiodavid.load();
            audioquarto.play();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Eu estou muito animado.",350,425);
            break;
        case 58:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Mas agora eu preciso me preparar.",350,425);
            break;
        case 59:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Estudarei a noite inteira.",350,425);
            break;
        case 60:
            audioquarto.pause();
            audioquarto.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("0,99999999... tamb\u00e9m \u00e9:",c.width/2,130);
            text("0,98",210,310);
            text("1",210,410);
            text("9",500,310);
            text("0,9",500,410);
            break;
        case 61:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Um tri\u00e2ngulo equilatero tem:",c.width/2,130);
            text("Lados iguais",210,310);
            text("5 lados",210,410);
            text("Lados difentes",500,310);
            text("N\u00e3o sei",500,410);
            break;
        case 62:
            audioconta.pause();
            audioconta.load();
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("No dia seguinte o garoto teve uma surpresa...",350,425);
            break;
        case 63:
            audioaula.play();
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Aqui esta a lista de classificados.",350,410);
            text("David, Lucas, Caian e o Garoto.",350,440);
            break;
        case 64:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Parab\u00e9ns ao David e ao resto.",350,425);
            break;
        case 65:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Eu consegui!",350,425);
            break;
        case 66:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:O campeonato ser\u00e1 dia 31 de fevereiro.",350,410);
            text("Preparem-se!",350,440);
            break;
        case 67:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Agora a brincadeira acabou!",350,425);
            break;
        case 68:
            audioaula.pause();
            audioaula.load();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("O garoto foi direto para casa",350,410);
            text("nem parou quando David o chamou",350,440);
            break;
        case 69:
            audioquarto.play();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Vamos l\u00e1, hora de estudo",350,425);
            break;
        case 70:
            audioquarto.pause();
            audioquarto.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Em AC=DC, A pode ser igual a:",c.width/2,130);
            text("C/DC",210,310);
            text("DC/C",210,410);
            text("A/CDC",500,310);
            text("DC/A",500,410);
            break;
        case 71:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("A raiz quadrada de 77 \u00e9",c.width/2,130);
            text("8<x<9",210,310);
            text("6<x<7",210,410);
            text("7<x<8",500,310);
            text("3<x<4",500,410);
            break;
        case 72:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Simplificando 16/8 encontraremos:",c.width/2,130);
            text("2/1",210,310);
            text("3/1",210,410);
            text("9/7",500,310);
            text("2/2",500,410);
            break;
        case 73:
            audioconta.pause();
            audioconta.load();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("E nisso o garoto ficou a noite inteira estudando...",350,425);
            break;
        case 74:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("E no dia seguinte...",350,425);
            break;
        case 75:
            audioaula.play();
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:ZzZzZz... (dormindo)",350,425);
            break;
        case 76:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Professora Debora:OHHHH GAROTO ACORDE!",350,425);
            break;
        case 77:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Eu j\u00e1 vi essa cena.",350,425);
            break;
        case 78:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Mas agora foi diferente",350,410);
            text("Ela n\u00e3o brigou comigo apenas me acordou.",350,440);
            break;
        case 79:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Bem tem uma coisa que devo falar",350,410);
            text("Para todos que foram classificados para o campeonato.",350,440);
            break;        
        case 80:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgprof,10,50,205,300);
            text("Professora Debora:Boa Sorte",350,425);
            break;
        case 81:
            r.drawImage(imgaula,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgprof,c.width-215,50,205,300);
            text("Garoto:Vamos precisar!",350,425);
            break;
        case 82:
            audioaula.pause();
            audioaula.load();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("A prova j\u00e1 era no dia seguinte",350,410);
            text("e o garoto continuava nervoso...",350,440);
            break;
        case 83:
            audioquarto.play();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Eu s\u00f3 quero saber como vou ficar",350,410);
            text("mais tranquilo para a prova.",350,440);
            break;
        case 84:
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Eu acho que estudar vai me fazer ficar mais calmo.",350,425);
            break;
        case 85:
            audioquarto.pause();
            audioquarto.load();
            audioconta.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("(CEJLL-2012) O custo de um aparelho de som abaixou",c.width/2,100);
            text("de RS 920,00 para RS713,00.",c.width/2,120);
            text("O percentual reduzido do custo desse aparelho foi de:",c.width/2,140);
            text("23,50%",210,310);
            text("77,50%",210,410);
            text("22,50%",500,310);
            text("21,50%",500,410);
            break;
        case 86:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("(CEJLL-2012) Um telefone celular sofreu",c.width/2,100);
            text("dois descontos sucessivos de 15% e 20%.",c.width/2,120)
            text("Esses dois descontos, equivalem a um desconto de:",c.width/2,140);
            text("31%",210,310);
            text("32%",210,410);
            text("38%",500,310);
            text("35%",500,410);
            break;
        case 87:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("(CEJLL-2015)O numero de lados do poligono",c.width/2,100);
            text("convexo que possui 9 diagonais",c.width/2,120)
            text("\u00e9 igual a:",c.width/2,140);
            text("5",210,310);
            text("9",210,410);
            text("6",500,310);
            text("7",500,410);
            break;
        case 88:
            audioconta.pause();
            audioconta.load();
            audioquarto.play();
            r.drawImage(imgquarto,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Agora sim! Me sinto preparado, finalmente.",350,425);
            break;
        case 89:
            audioquarto.pause();
            audioquarto.load();
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("No dia do campeonato...",350,425);
            break;
        case 90:
            audiocamp.play();
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Hoje eu irei mostrar meu verdadeiro valor.",350,425);
            break;
        case 91:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Hoje eu irei mostrar meu verdadeiro valor.",350,425);
            break;
        case 92:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:5 reais?",350,425);
            break;
        case 93:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:Garoto, voc\u00ea tem que aprender que o seu tipo de gente",350,400);
            text("N\u00e3o tem valor.",350,400);
            text("Voc\u00ea ao menos tem um nome.",350,460);
            break;
        case 94:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("Garoto: Claro que tenho nome!",350,410);
            text("Provarei para você que posso ser melhor do que voc acredita ser.",350,440);
            break;
        case 95:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("David:Vai passar a vida inteira tentando.",350,425);
            break;
        case 96:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            r.drawImage(imgdavid,c.width-215,50,205,300);
            text("Garoto:Veremos isso na prova.",350,410);
            text("Venha para sala, j\u00e1 vai iniciar.",350,440);
            break;
        case 97:
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("Chegando na sala, o Garoto pega sua prova e tenta faz\u00ea-la ",350,425);
            break;
        case 98:
            audiocamp.pause();
            audiocamp.load();
            audioccamp.play();
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual o menor angulo em graus formado por um relogio marcando 2h39min?",c.width/2,130);
            text("234",210,310);
            text("180",210,410);
            text("154,5",500,310);
            text("360",500,410);
            break;
        case 99:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual o vertice em y da par\u00e1bola da fun\u00e7\u00e3o x²+8x-20",c.width/2,120);
            text("da fun\u00e7\u00e3o x2+8x-20",c.width/2,140);
            text("-144",210,310);
            text("-4",210,410);
            text("-72",500,310);
            text("-36",500,410);
            break;
        case 100:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Qual o seno de 1200?",c.width/2,130);
            text("sen 45",210,310);
            text("sen 60",210,410);
            text("sen 90",500,310);
            text("sen 50",500,410);
            break;
        case 101:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Uma bola atirada do ponto zero segue o trajeto",c.width/2,110);
            text("de um par\u00e1bola da fun\u00e7\u00e3o 2x2+3x=0.",c.width/2,130);
            text("Aonde a bola atingiria o solo novamente?",c.width/2,150)
            text("-3/2",210,310);
            text("-2/3",210,410);
            text("3/2",500,310);
            text("2/3",500,410);
            break;
        case 102:    
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("O numero 4.580.254 pode ser multiplo de 7.",c.width/2,120);
            text("Qual dos numeros abaixo tambem pode ser multiplo de 7?");
            text("4.580.245",210,310);
            text("4.580.246",210,410);
            text("4.580.248",500,310);
            text("4.580.247",500,410);
            break;
        case 103:
            audioccamp.pause();
            audioccamp.load();
            r.drawImage(imgcamp,0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Garoto:Espero ter ido bem.",350,425);
            break;
        case 104:
            r.drawImage(imgquarto,0,0,c.width,c.height)
            r.drawImage(imgdia,0,350,700,150);
            text("Na noite daquele dia...",350,425);
            break;
        case 105:
            r.drawImage(imgquarto,0,0,c.width,c.height)
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("*Barulho de telefone tocando*",350,425);
            break;
        case 106:
            r.drawImage(imgquarto,0,0,c.width,c.height)
            r.drawImage(imgdia,0,350,700,150);
            r.drawImage(imgman,10,50,205,300);
            text("Quem ser\u00e1 no telefone.",350,425);
            break;
        case 107:
            r.fillStyle="White";
            r.fillRect(0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("Garoto:Ol\u00e1, quem fala?",350,425);
            break;
        case 108:
            r.fillStyle="White";
            r.fillRect(0,0,c.width,c.height);
            r.drawImage(imgdia,0,350,700,150);
            text("Professora Debora:Ol\u00e1, sua professora falando, eu so gostaria",350,400);
            text("de parabeniz\u00e1-lo, porque, voc\u00ea conseguiu, gabaritou o campeonato",350,430);
            text("Bom Trabalho, Gabriel!!!",350,460);
            break;
        case 10000:
            r.drawImage(imghist,0,0,c.width,c.height);
            if(mx>450&&mx<650&&my>440&&my<460)
            {
                r.drawImage(imghists,0,0,c.width,c.height);
            }
            break;
        case 10001:
            r.drawImage(imgcont,0,0,c.width,c.height);
            if(mx>450&&mx<650&&my>440&&my<460)
            {
                r.drawImage(imgconts,0,0,c.width,c.height);
            }
            break;
        case 10002:
            r.drawImage(imgcred,0,0,c.width,c.height);
            if(mx>450&&mx<650&&my>440&&my<460)
            {
                r.drawImage(imgcreds,0,0,c.width,c.height);
            }
            break;
        case 10003:
            audioconta.pause();
            audioconta.load();
            r.drawImage(imglose,0,0,c.width,c.height);
            if(mx>220&&mx<490&&my>360&&my<420)
            {
                r.drawImage(imgloses,0,0,c.width,c.height);
            }
            break;
        case 10004:
            r.drawImage(imgwin,0,0,c.width,c.height);
            if(mx>220&&mx<490&&my>360&&my<420)
            {
                r.drawImage(imgwins,0,0,c.width,c.height);
            }
            break;
        case 10005:
            r.drawImage(imgquestn,0,0,c.width,c.height);
            if(mx>100&&mx<310&&my>270&&my<330)
            {
                r.drawImage(imgquestn1,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>270&&my<330)
            {
                r.drawImage(imgquestn2,0,0,c.width,c.height);
            }
            if(mx>100&&mx<310&&my>380&&my<430)
            {
                r.drawImage(imgquestn3,0,0,c.width,c.height);
            }
            if(mx>400&&mx<610&&my>380&&my<430)
            {
                r.drawImage(imgquestn4,0,0,c.width,c.height);
            }
            text("Quantos nada voce faz por dia?",c.width/2,130)
            text("1",210,310);
            text("2",210,410);
            text("Nenhum",500,310);
            text("Varios",500,410);
            break;
    }
}
