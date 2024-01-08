import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {
	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.html()).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
		this.shadowRoot.getElementById("button").addEventListener("click", e=> {this.hide()})
		this.shadowRoot.getElementById("button2").addEventListener("click", e=> {this.hide()})
		this.shadowRoot.getElementById("bg").addEventListener("click", e=> {this.hide()})

		this.shadowRoot.getElementById("button").addEventListener("keyup", e=> {if(e.key=="Enter" || e.key=="Escape") {this.hide()}} )
		this.shadowRoot.getElementById("button2").addEventListener("keyup", e=> {if(e.key=="Enter" || e.key=="Escape") {this.hide()}} )
		this.shadowRoot.getElementById("bg").addEventListener("keyup", e=> {if(e.key=="Escape") {this.hide()}} )
		this.shadowRoot.firstElementChild.addEventListener("keyup", e=> {if(e.key=="Escape") {this.hide()}} )

		this.shadowRoot.appendChild(MarkUpCode.getHtmlTemplate(MarkUpCode.css()).cloneNode(true))
	}

	setText(val) {
		this.shadowRoot.getElementById("text").innerHTML=val
	}
	setHeader(val) {
		this.shadowRoot.getElementById("header").innerHTML=val
	}
	show() {
		this.shadowRoot.getElementById("main").style.display="block"
		this.shadowRoot.getElementById("bg").style.display="block"
		//setTimeout(()=>this.hide(), 7000)
		this.shadowRoot.getElementById("button2").focus()
	}
	hide() {
		this.shadowRoot.getElementById("bg").style.display="none"
		this.shadowRoot.getElementById("main").style.display="none"
	}


}

window.customElements.define('ecl-like-modal', Element)
