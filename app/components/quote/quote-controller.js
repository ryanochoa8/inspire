import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  console.log("Received an inspirational quote!", _qs.Quote)
  let quoteElem = document.querySelector('#quote')
  let quote = _qs.Quote
  quoteElem.innerHTML = quote.Template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
