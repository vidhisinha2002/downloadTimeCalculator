document.getElementById("submit").addEventListener("click",best);
function best()
{
    let speed = document.getElementById("speed").value;
    let size = document.getElementById("size").value;
    let downloadSpeed = speed/8;
    let oneGB = parseFloat(1024/downloadSpeed);
    let oneGBhours = Math.floor(oneGB / 60 / 60);
    let oneGBminutes = Math.floor(oneGB / 60) - (oneGBhours * 60);
    let oneGBseconds = Math.round(oneGB % 60,3);
    let oneGBTime;
    let minutes;
    minutes = 'mins'; 
    if(parseInt(oneGBminutes)==1)
        minutes = `min`  
    oneGBTime =  `${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `  
    if(oneGBhours == 0)
        oneGBTime =  `${oneGBminutes}${minutes}, ${oneGBseconds}s `
    let file =  (parseInt(size)*1024)/downloadSpeed;
    let fileHours =  Math.floor(file / 60 / 60);
    let fileMinutes = Math.floor(file / 60) - (fileHours * 60);
    let fileSeconds = Math.round(file % 60,3);
    let fileTime;
    minutes = 'mins';
    if(parseInt(fileMinutes)==1)
        minutes = `min`  
    fileTime =  `${fileHours}hrs, ${fileMinutes}${minutes}, ${fileSeconds}s `;
    document.getElementById("download").innerHTML = `Download speed: ${downloadSpeed}Mbps`;
    document.getElementById("sent").innerHTML = `Approximate time required to download`;
    document.getElementById("onespeed").innerHTML = `1 GB file: ${oneGBTime}`;
    document.getElementById("filespeed").innerHTML = `${size}GB file: ${fileTime}`;
    document.getElementById("output").style.background='#07C962'
    console.log(oneGBTime);
    console.log(fileTime)
}