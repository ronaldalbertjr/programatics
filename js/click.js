function click()
{
    if(cr)
    {
        lv+=1;
        cr=false;
        start=(new Date()).getTime();
        elapsed=0;
        audioclick.play();
    }
    if(wr)
    {
        lv=10003;
        wr=false;
        elapsed=0;
        audioclick.play();
    }
    switch(lv)
    {
        case 0:
            if(mx>300&&mx<400&&my>150&&my<200&&mdv==true)
            {
                cr=true;
            }
            else if(mx>300&&mx<400&&my>225&&my<275&&mdv==true)
            {
                lv=10000;
                audioclick.play();
            }
            else if(mx>270&&mx<470&&my>300&&my<350&&mdv==true)
            {
                lv=10001;
                audioclick.play();
            }
            else if(mx>300&&mx<400&&my>375&&my<425&&mdv==true)
            {
                lv=10002;
                audioclick.play();
            }
            break;
        case 12:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 22:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                lv=10005;
            }
            if(elapsed>30)
            {
                wr=true;
            }   
            break;
        case 36:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 37:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 38:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 39:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 40:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 41:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 54:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 60:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
         case 61:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 70:    
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 71:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 72:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 85:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 86:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        case 87:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 98:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                cr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 99:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                cr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 100:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 101:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                cr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                wr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 102:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                cr=true;
            }
            if(elapsed>120)
            {
                wr=true;
            }
            break;
        case 108:
            if(enter)
            {
                lv=10004
            }
            break;
            
        case 10000:
            if(mx>450&&mx<650&&my>440&&my<460&&mdv==true)
            {
                lv=0;
                audioclick.play();
            }
            break;
        case 10001:
            if(mx>450&&mx<650&&my>440&&my<460&&mdv==true)
            {
                lv=0;
                audioclick.play();
            }
            break;
        case 10002:
            if(mx>450&&mx<650&&my>440&&my<460&&mdv==true)
            {
                lv=0;
                audioclick.play();
            }
            break;
        case 10003:    
            if(mx>220&&mx<490&&my>360&&my<420&&mdv==true)
            {
                lv=0;
                audioclick.play();;
            }
            break;
        case 10004:    
            if(mx>220&&mx<490&&my>360&&my<420&&mdv==true)
            {
                lv=0;
                audioclick.play();;
            }
            break;
        case 10005:
            time();
            if(mx>100&&mx<310&&my>270&&my<330&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>270&&my<330&&mdv==true)
            {  
                wr=true;
            }
            else if(mx>100&&mx<310&&my>380&&my<430&&mdv==true)
            {
                wr=true;
            }
            else if(mx>400&&mx<610&&my>380&&my<430&&mdv==true)
            {   
                lv=10004;
                audioclick.play();
            }
            if(elapsed>30)
            {
                wr=true;
            }
            break;
        default:
            if(enter)
            {
                cr=true;
            }
            break;
            
    }
    enter=false;
    mdv=false;
}       
    