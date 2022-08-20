
function showMore() {
   const inDetails = document.getElementById("show-more-details")
   const firstArticle=document.getElementById("first-article");
   const secondArticle=document.getElementById("second-article");
   const showMoreDetails=document.getElementById("show-more-details"); 
   const firstGoBackLink=document.getElementById("first-go-back-link");


   showMoreDetails.style.display="none";
   firstGoBackLink.style.display="none";
   firstArticle.style.marginBottom= 0;
   firstArticle.style.paddingBottom= "2rem";
   firstArticle.style.backgroundColor="rgba(235, 235, 235, 0.85)";
   firstArticle.style.border="1px solid rgba(204, 204, 204)";
   secondArticle.style.marginTop= 0;
   secondArticle.style.paddingTop= "1.5rem";
   secondArticle.style.display="block";
}

function showLess() {
   const firstArticle=document.getElementById("first-article");
   const secondArticle=document.getElementById("second-article");
   const showMoreDetails=document.getElementById("show-more-details"); 
   const firstGoBackLink=document.getElementById("first-go-back-link");
   
   firstArticle.style.display="block";
   secondArticle.style.display="none";
   showMoreDetails.style.display="block";
   firstGoBackLink.style.display="block";
   firstArticle.style.marginBottom= "4rem";
   firstArticle.style.paddingBottom= "5rem";
   firstArticle.style.backgroundColor="rgba(255, 255, 255, 0.85)";
   firstArticle.style.border="none";


}