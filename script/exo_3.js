
window.addEventListener('load', () => {
   const group = document.querySelector('.taks-adder');
   if (!group) return;

   const button = group.querySelector('button');
   const input = group.querySelector('input');
   const list = document.querySelector('ul.list-unstyled');

   if (!list) return;

   button.addEventListener('click', () => {
       const value = input.value;
       if (value !== '' && value.length >= 3) {
           const item = document.createElement('li');
           item.textContent = value;
           list.appendChild(item);
           input.value = '';
       }
   });
});