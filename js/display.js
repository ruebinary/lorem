import { Lorem } from './lorem.js'
import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'

createApp({
    display: null,
    displayRaw: null,
    paragraphs: null,
    generation() {
        if ( this.paragraphs > 200 ) {
            this.display = "Number of paragraphs to be generated must not exceed 200";
        } else if ( this.paragraphs < 1) {
            this.display = "Number of paragraphs to be generated must be positive";
        } else if ( this.paragraphs >= 1 ) {
            var lorem = new Lorem;
            var output = lorem.generateLorem( this.paragraphs )
            this.display = output.join("<br><br>")
            this.displayRaw = output.join("\n")
        } 
    },
    copy() {
        navigator.clipboard.writeText( this.displayRaw );
    }
}).mount()