const image = document.getElementsByClassName("overlay_image");
const eachPic = document.getElementsByClassName("click");

window.onload = function()
{
    contentOnServer('get', "php/destroy_session.php", null, null, 0);
    delete_cookie("account_data");

    dynamicContent.forEach(function(page)
    {
        contentOnServer('get', (page + ".html"), 
                        null, document.getElementById(page), 0);
    });
    
    var imported = document.createElement('script');
    imported.src = 'script/headerScript.js';
    document.body.appendChild(imported);
}