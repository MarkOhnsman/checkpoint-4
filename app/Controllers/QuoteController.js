import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";
//TODO Create methods for constructor, and rendering the quote to the page

function drawQuote() {
  // console.log("THE DAILY QUOTE IS: ", ProxyState.quote);
  document.getElementById("quote").innerHTML = ProxyState.quote.Template
}

export default class QuoteController {
  constructor() {
    ProxyState.on("quote", drawQuote);
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }
}