var body = document.getElementsByClassName('work')[0];
var sectionSize = document.getElementsByClassName('work-info')[0].getBoundingClientRect().height;
var offset = 500;

body.style.backgroundColor = '#E4E6F3';

//console.log("Height= " + sectionSize);
//console.log(body.getBoundingClientRect().height);

window.onscroll = function (event)
{
    var scroll = window.scrollY;
    if (scroll < sectionSize * 1.5)
    {
        // green
        body.style.backgroundColor = '#E5E7FB';

    } else if (scroll >= sectionSize * 1.5 && scroll < sectionSize * 2 + offset)
    {
        // yellow
        body.style.backgroundColor = '#EBDFE0';

    } else if (scroll >= sectionSize * 2 + offset && scroll < sectionSize * 3 + offset)
    {
        // blue
        body.style.backgroundColor = '#E6D0F2';

    } else if (scroll >= sectionSize * 3 + offset && scroll < sectionSize * 4 + offset)
    {
        // orange
        body.style.backgroundColor = '#EAEFF1';

    } else if (scroll >= sectionSize * 4 + offset && scroll < body.clientHeight)
    {
        // red
        body.style.backgroundColor = '#EAEFF1';

    } else
    {
        // purple
        body.style.backgroundColor = '#EAEFF1';
    }
    //console.log(window.scrollY);
}


