import Script from "next/script";
import { LIVE_CHAT_WIDGET_URL } from "@/config/site";

/**
 * CRM live chat. Same snippet the CRM provides, loaded once the page is idle
 * so it never delays the first paint. The widget reads the current page URL
 * (`r`) to attribute each conversation.
 */
export function LiveChat() {
  if (!LIVE_CHAT_WIDGET_URL) return null;
  return (
    <Script id="contactus-jssdk-loader" strategy="lazyOnload">
      {`(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = ${JSON.stringify(LIVE_CHAT_WIDGET_URL)} + '?r=' + encodeURIComponent(window.location);
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'contactus-jssdk'));`}
    </Script>
  );
}
