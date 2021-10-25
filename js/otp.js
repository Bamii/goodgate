(function(){
  const otpBoxes = document.querySelectorAll('[data-otp-input]')

  otpBoxes.forEach(box => {
    box.oninput = function(e)  {
      const { target: { value, dataset } } = e;
      const lvl = Number.parseInt(dataset.otpInput);

      if(
        value.length == 1 &&
        lvl < otpBoxes.length
      ) {
        document.querySelector(`[data-otp-input="${lvl + 1}"]`).focus()
      }
    
      e.target.onkeyup = function(e) {
        if(
          value.length == 0 &&
          lvl > 1 &&
          e.key === 'Backspace'
        ) {
          document.querySelector(`[data-otp-input="${lvl - 1}"]`).focus()
        }
      }
    }
  })
})()