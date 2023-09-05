/*
all HTML and CSS as JS string
*/

export default class MarkUpCode {

	// helper
	static getHtmlTemplate(source) {
		const t = document.createElement('template')
		t.innerHTML = source
		return t.content
	}

  static html() {
    return `
    <link  href="./redist/ecl/ecl-eu.css" rel="stylesheet"/>

    <div id="bg" style="
      display: none;
      position: fixed;
      overflow:hidden;
      z-index: 1000;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4);">
    </div>

    <div class="" id="main" style="
    display:none;
    position: fixed;
    overflow:hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1001;
    background-color:white;
    border-radius:4px;">
    
      <header class="ecl-modal__header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid; border-color:#dee2e6;">
        <div class="ecl-modal__header-content" id="header" style="padding: 20px 0px 20px 20px; font-weight: 700; font-size:20px; color:#515560;">
          Lorem ipsum dolor sit amet
        </div>
        <button class="ecl-button ecl-button--ghost ecl-modal__close" type="button" data-ecl-modal-close id="button" style="padding-right: 20px;">
          <span class="ecl-button__container">
            <span class="ecl-u-sr-only" data-ecl-label="true">Close</span>
            <svg class="ecl-icon ecl-icon--s ecl-button__icon ecl-button__icon--after" focusable="false" aria-hidden="true" data-ecl-icon>
              <use xlink:href="./redist/ecl/icons.svg#close-filled"></use>
            </svg>
          </span>
        </button>
      </header>

      <div class="" id="text" style="
        /*font:normal normal 400 1rem/1.5rem arial,sans-serif; */
        padding:20px 20px 20px 20px; 
        overflow-y:auto; 
        height:45vh;
      ">
        Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet.
      </div>

      <footer class="ecl-modal__footer" style="padding:20px 20px 20px 0; border-top:1px solid; border-color:#dee2e6;">
        <div class="ecl-modal__footer-content" style="display:flex; justify-content:flex-end;">
          <button class="ecl-button ecl-button--primary ecl-modal__button" type="submit" id="button2" >Close</button>
        </div>
      </footer>
    </div>


    `
  }

 

  static css() {
    return `
    <style>
    #text h4 {
      font-size: 1.5rem;
      font-weight: 500 !important; 
      line-height: 1.2 !important;
      color: #515560 !important; 
      font-size: 1.5rem !important;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    #text p {
      color: #515560;
      font-size: 1rem;
    }
    </style>   
    `
  }

}
