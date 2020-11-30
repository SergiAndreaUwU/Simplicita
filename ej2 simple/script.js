"use strict";

const URL2 = "https://compranet.hacienda.gob.mx/esop/guest/go/public/opportunity/current?locale=es_MX"
const URL3 = "https://compranet.hacienda.gob.mx/esop/toolkit/opportunity/opportunityDetail.do?opportunityId=1888493&oppList=CURRENT";

function main(){

    window.open( URL2, "_self"); 
    setTimeout(()=>{
        window.open( URL3, "_self");     
    },500)
    
}

/* 
You mentioned 3 steps in order to not get an error 
when navigating to an URL but there are 2 steps only.
The first page/step is only to get you redirect to a 
second page, getting the url through chrome developer 
console I skipped the first step.

I noticed that there is request call which is blocking 
the page until it has a response, that response is the 
elements and info that is loaded in the second page aswell, 
so when we try to navigate to the next URL without socket info, we get an error.

In this case that I don't have access to their API 
I can't use async/await because I need a response 
from the server, for this reason I decided to have 
a little waiting time to load the first page, then
load the second page opening them in new windows in
order to not get my page closed and my script interrupted.


You may have to accept pop-up windows and then refresh my page/script to get it working.

This is the way I could resolve the issue
*/