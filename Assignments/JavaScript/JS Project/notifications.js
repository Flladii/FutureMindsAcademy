



// function startNotification(text){
//    change = setInterval(() =>{
//     if(document.title == defaultTitle ) {
//        document.title = text
//         defaultIcon = changeFavicon
//     } else{document.title = defaultTitle}
//    }, 1000)
// }


// const defaultTitle = document.querySelector('title').innerHTML;

 
// const defaultIcon = faviconElement.href;

// let faviconElement =  document.querySelector("link[rel~='icon']");

// let changeFavicon = 'https://icons8.com/icon/dI6YxQHU8JK7/bell'




// let change;

// function endNotification(){
//     clearInterval(change)
//     document.title = defaultTitle;
//     document.querySelector("link[rel~='icon']") = defaultIcon
// }






//how to change the favicon dynamically
let defaultTitle = document.title;
let faviconElement = document.querySelector("link[rel~='icon']");
let defaultIcon = faviconElement.href;
let isInDefaultState = true;
let notificationInterval;
let bellIconLink = getBellIconLink()


function startNotification(message) {
   if(notificationInterval)
     endNotification();
        notificationInterval= setInterval (()=> {
            if(isInDefaultState)
               setToNotification(message)
                  else  resetToDefaults()


                  isInDefaultState = !isInDefaultState
        },1000)};



function endNotification(){
   clearInterval(notificationInterval)
      resetToDefaults()
}

function resetToDefaults (){
   document.title = defaultTitle
   faviconElement.href = defaultIcon
}

function setToNotification(message){
   document.title = message
   faviconElement.href = bellIconLink
}

function getBellIconLink() {
   const canvas = document.createElement('canvas')
   canvas.width = 32
   canvas.height = 32
   const context = canvas.getContext('2d')
   context.font = '32px sans-serif'
   context.fillText('🔔', 0, 30)
   return canvas.toDataURL('image/png')
}






