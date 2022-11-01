<h1> Portfolio Website </h1> 

<hr>

<h2> Implementation </h2> 
<p> This is an implementation that is still work in progress. The notion behind it was to create a website where you could call minimalistic enough without speaking volumes of it's complexity. </p> 
<p> It uses grid areas to adjust its section where it will either stack vertically or horizontally depending the context of each element. </p> 
  <p> The Javascript is fairly simple where it will store the according layout and colour for the user's next visit. For example, at first visit the default colour is white. If the user decides to change the colour and close that tab; the next time they visit the website again, the default colour will stay at yellow. This only applies for that specific browser the user decides to visit the website as if the user decides to use a different browser, the colour will be set to it's default value. </p> 

<hr>

<h2>AWS Setup</h2>
<p>In order to deploy my website, I used the tools and services from AWS.<br> 
  First, I uploaded all the necessary images and files into an S3 bucket as well as setting up it's readability permissions by implementing a bucket policy.</p>
<p>Secondly, I created a record and registered domain with a simple traffic route through Route 53. From there, I requested an SSL certificate through the Certificate Manager tool.</p>
<p>Lastly, I created a distribution through Cloudfront, which I ended up linking both the SSL and Cloudfront to Route 53, therefore the domain name will get redirected to iasonkotakis.com instead of the original url link of the S3 bucket that was created.</p>

<img src="https://github.com/IasonKotakis/Iason-Kotakis-Website/blob/docs/images/config%20js%20action.png"><img>

<hr>

<h2> Ackowledgement </h2> 
<p> I would like to thank Dennis Ive for helping me out to create this website and have a better understanding of grid areas.</p>

<hr>

<p> You can find a preview of my website <a href="https://iasonkotakis.com">here</a>

