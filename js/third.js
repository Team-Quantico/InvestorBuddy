function th(){
    document.getElementById('id').style.display=''
    console.log('btn working')
    
    const ms= document.getElementById('th_ms').value
    const age= document.getElementById('th_age').value

    console.log(age, ms)

    const m=0.4*ms
    const n= 12
    const i = 4
    const tu=1

    var num= (1+(i/(100*n)))**(n*tu) - 1
    var deno = i/(100*n)

    var X= (m*num)/deno;

    document.getElementById('xyz').innerHTML = "Your saving account balance after one year: " + '₹' + Math.round(X)

    // document.getElementById('int').innerHTML= "Saving account balance after one year: " + Math.round(X)

    // saving account
    var ia=X
    var mc_sav=0.06*ms
    var roi=4
    
    const t=[4,9,14,19]

    console.log("working2.....")



    // const n=12
    var expt = t.map(function(element){
        return element * n;
    });

    console.log(expt)

    var ans_sav = new Array(4);
    for(let j= 0; j< 4; j++){

        // ans_sav[j]= ia*(((roi/(100*n))+1)**expt[j]) + (mc_sav*( ((roi/(100*n))+1)**expt[j] -1 ))/(roi/(100*n))
        var term= ((roi/(100*n))+1)**expt[j]
        var trm2n= term-1 
        var trm2d=(roi/(100*n))

        ans_sav[j]=ia*term  + mc_sav*(trm2n/trm2d)

        
    }
    // var ans= ia*(((roi/(100*n))+1)**expt) + mc_sav*(( ((roi/(100*n))+1)**expt -1 )/(roi/(100*n)))

    // var trm1= ((roi/(100*n))+1)**expt
    // var trm2n= trm1-1
    // var trm2d=(roi/(100*n))
    console.log("first loop ends")
    console.log(ans_sav)

    for(let k= 0; k< 4; k++){
        // document.getElementById('sav_table').rows[k+1].cells[0].innerHTML='After '+(t[k] + 1*1)+' years : ';
        console.log("loop working"+k)
        document.getElementById('sav_table').rows[k+1].cells[2].innerHTML=Math.round(ans_sav[k]);}

    console.log("sav values entered")    
    

    // sip
    var mc_sip=0.28*ms;
    var i_sip=15

    // var expt=n*tp;--done
    // var nterm1= ((1+(roi/(100*n)))**expt)-1;
    // var nterm2=(roi/(100*n))+1;
    
    // var deno= roi/(100*n);
    
    // var X= (mi*nterm1*nterm2)/deno;

    var ans_sip = new Array(4);
    for(let j= 0; j< 4; j++){

        ans_sip[j]= mc_sip*((( ((i_sip/(100*n))+1)**expt[j] -1) * ((i_sip/(100*n))+1))/(i_sip/(100*n)))
        
    }
    console.log(ans_sip)

    for(let k= 0; k< 4; k++){
        // document.getElementById('sip_table').rows[k+1].cells[0].innerHTML='After '+(t[k] + 1*1) +' years : ';
        
        document.getElementById('sip_table').rows[k+1].cells[2].innerHTML=Math.round(ans_sip[k]);}

        console.log("sip val entered")





    // // failed ppf
    // var mc_nsp=0.06*ms;
    // var i_nsp=0.10;

    // var ans_nsp = new Array(4);
    // for(let j= 0; j< 4; j++){

    //     ans_nsp[j]= mc_nsp*(( ((i_nsp/(100*n))+1)**expt[j] -1 )/(i_nsp/(100*n)))
    //     console.log("loop working_nsp"+j)
    // }

    // for(let k= 0; k< 4; k++){
    //     document.getElementById('nsp_table').rows[k].cells[0].innerHTML='After '+t[k]+' years : ';
    //     console.log("loop working_sip"+k)
    //     document.getElementById('nsp_table').rows[k].cells[1].innerHTML=Math.round(ans_nsp[k]);}





    // nsp
    var mc_nps=0.06*ms;
    var i_nps=10;

    var T= 59*1-age;

    console.log(T)

    var ans = mc_nps*((( ((i_nps/(100*n))+1)**(n*T) -1) * ((i_nps/(100*n))+1))/(i_nps/(100*n)))

    var ti_nps = mc_nps * 12 * T
    var ie_nps = ans * 1 - ti_nps*1 
    var ma_nps = 0.6*ans
    var ai_nps = 0.4*ans

    document.getElementById('nps_table').rows[1].cells[2].innerHTML = Math.round(ti_nps)
    document.getElementById('nps_table').rows[2].cells[2].innerHTML = Math.round(ie_nps)
    document.getElementById('nps_table').rows[3].cells[2].innerHTML=  Math.round(ma_nps)
    document.getElementById('nps_table').rows[4].cells[2].innerHTML=Math.round(ai_nps)

}
