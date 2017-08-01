function modalFocusTrapFunction(modalClassname) {
  setTimeout(function(){
    var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
    $('.' + modalClassname).keydown(function(evt){
      if(evt.which == 9){ // if tab or shift-tab pressed
        var focusableItems = $('.' + modalClassname).find('*').filter(focusableElementsString).filter(':visible'); // list focusables
        var focusedItemIndex = focusableItems.index($(document.activeElement)); // index of currently focused

        if (evt.shiftKey){ // shift-tab
          if(focusedItemIndex == -1 || focusedItemIndex == 0){ // on first, go to last
            focusableItems.get(focusableItems.length - 1).focus();
            evt.preventDefault();
          }
        } else if(focusedItemIndex == focusableItems.length - 1){ // tab on last, go to the first
          focusableItems.get(0).focus();
          evt.preventDefault();
        }
      }
    });
  })
}
