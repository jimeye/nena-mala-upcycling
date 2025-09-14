export default function CookiesPage() {
  return (
    <main className="px-[15px] py-8 md:py-12 max-w-3xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Cookies Policy</h1>
      <p>Full legal content to be provided. Placeholder page.</p>
    </main>
  );
}

export const metadata = {
  title: 'Cookies Policy | Nena Mala',
  description: 'How Nena Mala uses cookies and similar technologies.',
};

export default function CookiesPolicyPage() {
  return (
    <main className="px-5 py-10 max-w-4xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>

      <p className="mb-4">Here is a list of cookies that we use. We’ve listed them here so you that you can choose if you want to opt-out of cookies or not.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Shopify</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>_session_id, unique token, sessional, Allows Shopify to store information about your session (referrer, landing page, etc).</li>
        <li>_shopify_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider’s internal stats tracker to record the number of visits</li>
        <li>_shopify_uniq, no data held, expires midnight (relative to the visitor) of the next day, Counts the number of visits to a store by a single customer.</li>
        <li>cart, unique token, persistent for 2 weeks, Stores information about the contents of your cart.</li>
        <li>_secure_session_id, unique token, sessional</li>
        <li>storefront_digest, unique token, indefinite If the shop has a password, this is used to determine if the current visitor has access.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Google</h2>
      <p className="mb-4">Google AdWords remarketing service is provided by Google Inc. You can opt-out of Google Analytics for Display Advertising and customise the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads. Google also recommends installing the Google Analytics Opt-out Browser Add-on – https://tools.google.com/dlpage/gaoptout – for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: http://www.google.com/intl/en/policies/privacy/</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Facebook</h2>
      <p className="mb-4">Facebook remarketing service is provided by Facebook Inc. You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950 To opt-out from Facebook’s interest-based ads follow these instructions from Facebook: https://www.facebook.com/about/ads/#568137493302217 Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings. For more information on the privacy practices of Facebook, please visit Facebook’s Data Policy: https://www.facebook.com/privacy/explanation</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Nosto</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>2c.cId - To identify browsers between their visits to the site. Each browser is given a unique random identifier created by Nosto. Information about the browser's behavior on the site is then stored into Nosto's service as a customer profile under this identifier.</li>
        <li>2c.dId - To store previous customerId as device id when merging multiple devices as 1 customer profile.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Manage your preferences</h2>
      <p className="mb-4">You can manage cookies in your browser settings. You may also adjust your preferences using your browser’s controls to block or delete cookies.</p>
    </main>
  );
}


