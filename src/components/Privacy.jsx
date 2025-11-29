function Privacy() {
  return (
    <>
      <h2 className="heading effect">Privacy Policy</h2>
      <p className="text-sm">
        Froot Salad is an individual personal project of mine and isn't an
        actual business. With that said, and based on how the website operates,
        I'm not entirely sure if I really even need a privacy policy, but I want
        to ensure that I'm doing my best to be transparent and in compliance
        with website regulations. So I've attached an official privacy policy
        that I created through the use of the service termify.io.
      </p>
      <p className="text-sm">
        I also wanted to include the following handwritten note because I feel
        that the privacy policy from termify.io can seem a bit too formal and
        legalistic for my small personal website.
      </p>
      <p className="text-sm bold">
        I would like to start by stating that this website doesn't collect
        personal data, as you've probably noticed. The only data collected is
        anonymous gameplay data used solely to enhance the game experience, and
        anonymous website analytics data used to track statistics such as page
        views, visitors, etc.
      </p>
      <p className="text-sm bold">
        The gameplay data is currently stored in the browser's local storage and
        is deleted when you clear your browser's cache. This is basically all
        the data you see on the stats page, and using local storage ensures it
        isn't lost when you exit the site.
      </p>
      <p className="text-sm bold">
        The analytics data is collected using a service called Simple Analytics,
        a privacy-friendly analytics platform that doesn't use cookies or
        trackers. Simple Analytics is compliant with all privacy policies,
        including GDPR, PECR, CCPA, and more. Please feel free to research
        Simple Analytics if you have any concerns.
      </p>
      <p className="text-sm">
        If you have any other questions or concerns about your privacy while
        using the site, or if you have any tips for me on how to improve my
        practices, please email me at{" "}
        <span className="bold">parkerglas@gmail.com</span> or reach out to me
        via Linkedin.
      </p>
      <a
        className="m4"
        href="privacy_policy.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      <a href="https://www.simpleanalytics.com/" target="_blank">
        Simple Analytics
      </a>
    </>
  );
}

export default Privacy;
