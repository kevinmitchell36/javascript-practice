// Grab image 
  const image = document.querySelector('img');

// Click on image to log 'click event'.
  const onClick = () => console.log('click event');
  image.addEventListener('click', onClick);

// Double click on image to change background color to purple.
  const doubleClick =  () => {document.body.style.backgroundColor = 'purple'};
  image.addEventListener('dblclick', doubleClick);

// Double click on image to change background color to purple and text color to white. Allow for toggle.   
  image.addEventListener('dblclick', () => {
    if (document.body.style.backgroundColor !== 'purple') {
      document.body.style.backgroundColor = 'purple'
      document.body.style.color = 'white'
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  })

// Right click on image to log 'right click event'.
  const rightClick = function () {console.log('right click event')}
  image.addEventListener('contextmenu', rightClick);

// Mouse wheel on image to log 'wheel event'.
  const wheel = () => console.log('wheel event');
  image.addEventListener('wheel', wheel);


