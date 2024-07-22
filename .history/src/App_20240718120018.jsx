import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div
    id="app"
    data-page='{"component":"Home","props":{"errors":{},"ziggy":{"url":"https:\/\/almajdiah.com","port":null,"defaults":[],"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"projects.index":{"uri":"projects","methods":["GET","HEAD"]},"custom.projects.index":{"uri":"custom-projects","methods":["GET","HEAD"]},"custom-projects.show":{"uri":"custom-projects\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]},"attention-request.no-project":{"uri":"send\/attention-request","methods":["GET","HEAD"]},"projects.show":{"uri":"projects\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]},"projects.attention-request":{"uri":"projects\/{projectId}\/attention-request\/{projectName?}","methods":["GET","HEAD"],"parameters":["projectId","projectName"]},"blog.index":{"uri":"blog","methods":["GET","HEAD"]},"blog.show":{"uri":"blog\/{postId}","methods":["GET","HEAD"],"parameters":["postId"]},"about-us":{"uri":"about-us","methods":["GET","HEAD"]},"contact-us":{"uri":"contact-us","methods":["GET","HEAD"]},"rentals.index":{"uri":"rentals","methods":["GET","HEAD"]},"projects.rental.show":{"uri":"projects\/rental\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]},"projects.rental.request.show":{"uri":"project-rental-request\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]},"compare":{"uri":"compare\/{firstUnit?}","methods":["GET","HEAD"],"parameters":["firstUnit"]},"compare.units":{"uri":"compare-units","methods":["GET","HEAD"]},"units.show":{"uri":"units\/{unitId}","methods":["GET","HEAD"],"parameters":["unitId"]},"login":{"uri":"login","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"socialLogin":{"uri":"auth\/redirect","methods":["GET","HEAD"]},"LoginSessions":{"uri":"sessions\/update","methods":["POST"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"attention-request":{"uri":"attention-request","methods":["GET","HEAD"]},"units.attention-request":{"uri":"units\/{unitId}\/attention-request","methods":["GET","HEAD"],"parameters":["unitId"]},"PurchasedUnits":{"uri":"purchased\/units","methods":["GET","HEAD"]},"clientFiles":{"uri":"client\/files","methods":["GET","HEAD"]},"MyUnitRentalRequest":{"uri":"profile\/my-unit\/rental-request","methods":["GET","HEAD"]},"MyAttentionRequests":{"uri":"profile\/attention-request","methods":["GET","HEAD"]},"Profile":{"uri":"profile","methods":["GET","HEAD"]},"PasswordUpdate":{"uri":"password\/update","methods":["GET","HEAD"]},"TicketsList":{"uri":"tickets\/list","methods":["GET","HEAD"]},"TicketsDetails":{"uri":"tickets\/{ticketId}\/details","methods":["GET","HEAD"],"parameters":["ticketId"]},"EmptyingsInquiries":{"uri":"emptying\/inquiries","methods":["GET","HEAD"]},"EmptyingsInquiriesDetails":{"uri":"emptying\/{inquiryId}\/details","methods":["GET","HEAD"],"parameters":["inquiryId"]},"switch-locale":{"uri":"switch-locale","methods":["POST"]},"coming-projects":{"uri":"coming-projects","methods":["GET","HEAD"]},"PrivacyPolicy":{"uri":"privacy-policy","methods":["GET","HEAD"]},"IntellectualPropertyRights":{"uri":"intellectual-property-rights","methods":["GET","HEAD"]},"TermsOfUse":{"uri":"terms","methods":["GET","HEAD"]},"survey.show":{"uri":"survey\/{survey}","methods":["GET","HEAD"],"parameters":["survey"]},"landing-page.show":{"uri":"landing-page\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]},"greeting-cards.show":{"uri":"greeting-cards\/{card}","methods":["GET","HEAD"],"parameters":["card"]},"ProjectLanding":{"uri":"projects\/landing\/{projectId}","methods":["GET","HEAD"],"parameters":["projectId"]}},"location":"https:\/\/almajdiah.com"},"locale":"ar","loggedIn":null,"accessToken":null,"authUser":{"id":null,"name":null,"phone":null,"email":null,"avatar":null,"national_id":null,"token":null},"data":{"status":1,"message":"Success Get Home Data","data":{"slides":[],"projects":[{"id":211,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 160","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/keeqtlTY60mG7tHN5hRkjX4hImyBixg1JCkPNhLo.jpg","code":"160","status":"soon_for_sale","view_web_site_attention_request":true,"status_text":"\u0642\u0631\u064a\u0628\u0627 \u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":false,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/4Hg8iyvvOV6ALtzQZMpA2TXJI8uKzGwOouVb2zjY.jpg","buildings_count":0,"units_count":0,"location":{"address":null,"latitude":"24.660636","longitude":"46.780920","map_url":"https:\/\/maps.google.com\/maps?q=24.660636,46.780920"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1Ub7QZIg0i6CECO8OietV0pZBpazrPM5n\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":null,"project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":false,"lang":"ar"},{"id":197,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 158","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/u4IcMNKhdmvT4oB5rM0dNm72wijNO5KwzFbye541.jpg","code":"158","status":"soon_for_sale","view_web_site_attention_request":true,"status_text":"\u0642\u0631\u064a\u0628\u0627 \u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":false,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/AhCJcYKp2hGy8VL0d3R7hE4QaT9EwwNKSpDDekIQ.jpg","buildings_count":0,"units_count":0,"location":{"address":"\u0627\u0644\u062e\u0628\u0631 - \u0627\u0644\u0628\u062d\u0631","latitude":"26.354538","longitude":"50.227215","map_url":"https:\/\/maps.google.com\/maps?q=26.354538,50.227215"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":true,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/13kaWmaur-aEur5S6xeNsvlHK8WiwCD_W\/view","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":null,"project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":195,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 156","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/JdMRUKEOVoqCHAhtq4E9z0Mj5XlEhKs3CtaCgEug.jpg","code":"156","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/kMH3rc2LiNa0130wVxLlaj11A139AiKS9Yi7QIyv.jpg","buildings_count":7,"units_count":125,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u062f\u0649","latitude":"24.806933","longitude":"46.686964","map_url":"https:\/\/maps.google.com\/maps?q=24.806933,46.686964"},"video_link":"https:\/\/youtu.be\/TK9-bqjj6e0","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=kJAS7HqvY51","is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/12MnHAaA6QkUs02cqGnwGgUjXIfvtJUzT\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_aJaTtFn7MVnYnGCQpKFixzUfZfdiGasMVSvpLqLK","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":192,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 155","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/Msb7hLZsOkTTBrAaAL9yOIhtF8Bm0IxQlbJRKXAV.jpg","code":"155","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/fEyuBY1Ue2rCwzv8H65vQO0UzXOHVkcvbtUqBoSG.jpg","buildings_count":5,"units_count":130,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0639\u0631\u0642\u0629","latitude":"24.692953","longitude":"46.583121","map_url":"https:\/\/maps.google.com\/maps?q=24.692953,46.583121"},"video_link":"https:\/\/youtu.be\/i-Dyaa_vSbY","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=my2hBKvp1Kr","is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1PMDLLKZfL3VRRZGpI0eH3Z9-vuPplXyk\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_21SonLPxW9YbN1989ZLpFENF55Tb57sAvDFHSBei","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":false,"lang":"ar"},{"id":183,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 147","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/69AsJSBl9F288ujhp9oeUegkHmLWyiw76xBQdYPF.jpg","code":"147","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/NOPspx1FegYnx5A9g0mwcJcR522pxtyMgM1HZqMJ.jpg","buildings_count":26,"units_count":308,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.902066","longitude":"46.628383","map_url":"https:\/\/maps.google.com\/maps?q=24.902066,46.628383"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":true,"project_category_id":1,"view_web_site_label":true,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1ZDSbWEefRqBERpV852RbaAi5Y_M6QMR1\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":null,"project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":179,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 146","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/NKNCOHbRwoleDpQSpwn3qVlrqyVufcXV5a4IdRi9.jpg","code":"146","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/4x8xbErROZl2XceY9pNACNlXlG0Gxnv6hWXqSazy.jpg","buildings_count":5,"units_count":50,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.866526","longitude":"46.650845","map_url":"https:\/\/maps.google.com\/maps?q=24.866526,46.650845"},"video_link":"https:\/\/youtu.be\/_EF13n_J4oM","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1Wg-PVJmkkyFdBAi7r0QDsnDVuci1hC4W\/view?usp=sharing","has_financing_solutions":true,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_b8hE8y8cZxjhNHPoYP9qU49jELhEnTsjrVsULSiL","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":176,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 144","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/Wj4JCLKQ4Lewq1aYkHSocCcBMLiqCFedbnYVbqYb.jpg","code":"144","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/mRKCfGukKRMBzeKB4ZuVdHOcr31iRZMVh2wFituk.jpg","buildings_count":5,"units_count":50,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.868603","longitude":"46.649785","map_url":"https:\/\/maps.google.com\/maps?q=24.868603,46.649785"},"video_link":"https:\/\/youtu.be\/nCSFednaGK0","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":true,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/178rqSKIBd1ag7XfaawbLxw26eONDmkIi\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_eUcqS1kP9EYBckXhNcfwXX87KxmAXJVXgbKLK1JF","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":175,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 143","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/LB06FmZXUbbL7ZqgoWAE5vZJnNdCj85Nmx025QSL.jpg","code":"143","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/c2zXzLhFdhOfnhOrAWXGrDGL3XKfAoXmx678JUhZ.jpg","buildings_count":8,"units_count":105,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u062d\u0645\u0631\u0627\u0621","latitude":"24.779453","longitude":"46.772015","map_url":"https:\/\/maps.google.com\/maps?q=24.779453,46.772015"},"video_link":"https:\/\/youtu.be\/B9WYWQMRquc?si=dyApSJqIWbEGENsN","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=fnsv7BUkM4m","is_sales_on_map":false,"project_category_id":1,"view_web_site_label":true,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1zviLtmDkNRJUqf56NLZi4XUhzZMpnX1G\/view?usp=sharing","has_financing_solutions":true,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_AM7DkR8BdEzNBL6bp2ZaAxDKN8KwxWXiWtafh7aC","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":172,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 140","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/JUtCUo3GhD7yOwHz6NzVSzaruSRB4fAEbylTCGED.jpg","code":"140","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/s6LWb4jrfkTx94Cj8YftLlL1FToDrJAngmkpm1YG.jpg","buildings_count":5,"units_count":50,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.865285","longitude":"46.651418","map_url":"https:\/\/maps.google.com\/maps?q=24.865285,46.651418"},"video_link":"https:\/\/youtu.be\/bTznq2JD0T4","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=Pebiq3xdcCp","is_sales_on_map":true,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1oRJRtPiYBHUl7u1qvxZN1XIGjooFuS3j\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_yhToXbAAygMvtHvfyGmRkn2oJCeTK8UED5fMYrzD","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":171,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 139C","description":"\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u0646\u062f\u0633 139C\u060c \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u0639\u0627\u0626\u0644\u062a\u0643 \u0628\u062d\u064a \u0627\u0644\u0645\u0644\u0642\u0627 \u0648\u0627\u0644\u0630\u064a \u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u0648\u0641\u064a\u0631 \u0645\u062c\u0645\u0648\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0639\u0635\u0631\u064a\u0629\u060c \u062a\u062a\u0636\u0645\u0646 \u0645\u0635\u0644\u0649\u060c \u0645\u0633\u0637\u062d\u0627\u062a \u062e\u0636\u0631\u0627\u0621\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u062e\u062f\u0645\u0627\u062a \u062a\u0631\u0641\u064a\u0647\u064a\u0629 \u0648\u0631\u064a\u0627\u0636\u064a\u0629 \u0645\u062a\u0646\u0648\u0639\u0629 \u062a\u0644\u0628\u064a \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u062c\u0645\u064a\u0639 \u0623\u0641\u0631\u0627\u062f \u0623\u0633\u0631\u062a\u0643.","image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/7VFe9C8a5UgSgD4fF8klD43sAC0t4nr80CcUobs4.jpg","code":"139 C","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/bbCdoCGc0dJcbJLmESiCWj9NWvmHz4a7MVCNDqX7.jpg","buildings_count":15,"units_count":162,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0645\u0644\u0642\u0627","latitude":"24.797000","longitude":"46.616284","map_url":"https:\/\/maps.google.com\/maps?q=24.797000,46.616284"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1S6F4TaYv1PPwYD19vFAD7f1zTy60MWYP\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_n7jDP1d3PC3iCWtBewJzdos2dWysaTetsMTpZ14c","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":"<p>\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u0646\u062f\u0633 139C\u060c \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u0639\u0627\u0626\u0644\u062a\u0643 \u0628\u062d\u064a \u0627\u0644\u0645\u0644\u0642\u0627 \u0648\u0627\u0644\u0630\u064a \u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u0648\u0641\u064a\u0631 \u0645\u062c\u0645\u0648\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0639\u0635\u0631\u064a\u0629\u060c \u062a\u062a\u0636\u0645\u0646 \u0645\u0635\u0644\u0649\u060c \u0645\u0633\u0637\u062d\u0627\u062a \u062e\u0636\u0631\u0627\u0621\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u062e\u062f\u0645\u0627\u062a \u062a\u0631\u0641\u064a\u0647\u064a\u0629 \u0648\u0631\u064a\u0627\u0636\u064a\u0629 \u0645\u062a\u0646\u0648\u0639\u0629 \u062a\u0644\u0628\u064a \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u062c\u0645\u064a\u0639 \u0623\u0641\u0631\u0627\u062f \u0623\u0633\u0631\u062a\u0643.<\/p><p><br><\/p>","landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":169,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 139A","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/nDuzrp45waP3BcyO1wM2uGAijVT9pA8NrS14OyVv.jpg","code":"139 A","status":"soon_for_sale","view_web_site_attention_request":true,"status_text":"\u0642\u0631\u064a\u0628\u0627 \u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/Z6DfKHC5RL5fnhxv61kLq1QtQ3LWu3CHzFhdflbo.jpg","buildings_count":5,"units_count":57,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0645\u0644\u0642\u0627","latitude":"24.796664","longitude":"46.615243","map_url":"https:\/\/maps.google.com\/maps?q=24.796664,46.615243"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/14F1NWabz7DnhJUUR8MNui4X4B_KHrUWb\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_pCsGMhqn95SAZbRNxTS2DNPT7eSDtouVNXVpfQaa","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":168,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 138","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/F3ofVvmyxwjLE5jnKAnMe2SPltayFozIfB78fho5.jpg","code":"138","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/BmVhkFrgVVFM89uY9MlxQEmy6t1rnWF2cfkkPylH.jpg","buildings_count":2,"units_count":28,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0632\u0647\u0629","latitude":"24.7606491","longitude":"46.707115","map_url":"https:\/\/maps.google.com\/maps?q=24.7606491,46.707115"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/pdf\/\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 138.pdf","thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1r9jJftous4y-vIPAzz3Nr2NiZCksHkUP\/view?usp=sharing","has_financing_solutions":true,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_gX4W2K7qz9NzrjuAMw3c4vChJVwYUoExffEuVG5S","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":164,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 133","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/X6DPXo1WYijH56b0h3DZeKUweiO9vN64zZlDA9eV.jpg","code":"133","status":"soon_for_sale","view_web_site_attention_request":true,"status_text":"\u0642\u0631\u064a\u0628\u0627 \u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":false,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/66S08FYosLeLx5iiXYAMsn1b8RXbIAThwmEI3jnP.jpg","buildings_count":14,"units_count":216,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.885588","longitude":"46.636937","map_url":"https:\/\/maps.google.com\/maps?q=24.885588,46.636937"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1nh93RN15TB-TXKeRyMcWQPuxjXyUdO4j\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_GYNy6uAH1cRkPXvvvMsJmsv2Yjxyjim8pgSAS47N","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"},{"id":163,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 132","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/RXUaQocuLaP0mV9SrUg6ltyDRNNzk1jO5mLLUBzR.jpg","code":"132","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/5kdJmZsMMjAvj6qfdsKnsppybfypwkbIxmY5GeVq.jpg","buildings_count":4,"units_count":74,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0645\u0631\u0648\u062c","latitude":"24.759721","longitude":"46.670545","map_url":"https:\/\/maps.google.com\/maps?q=24.759721,46.670545"},"video_link":"https:\/\/youtu.be\/_EUpnrLkbFo?si=oiYuwYgLi3b1_Dit","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=GgVBjANgaky","is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1reAzAltHtWMHxOje8AkvyM8K1BsArkpE\/view?usp=sharing","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_47Tzf4FXCN7bmdTmFaULiEmL9LxXyhHAJoB6PUqX","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":true,"view_landing_page_nav":true,"view_landing_page_features":true,"view_soon_for_sale_label":true,"lang":"ar"},{"id":160,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 129","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/V7KaSIpiDdmB16995WRy1mYxDtWC13YzZ68njW1Q.jpg","code":"129","status":"under_sale","view_web_site_attention_request":true,"status_text":"\u0644\u0644\u0628\u064a\u0639","view_if_sold":true,"view_attention_request":true,"view_units":true,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/QEeE5PUhPjT45J0rnTkL7WISJkedWSb7uMVH9wJz.jpg","buildings_count":12,"units_count":196,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","latitude":"24.886629","longitude":"46.639913","map_url":"https:\/\/maps.google.com\/maps?q=24.886629,46.639913"},"video_link":"https:\/\/youtu.be\/qPNWmqcrLNI","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":"https:\/\/my.matterport.com\/show\/?m=4KP45yar17x","is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1iQs1uX_ySzl9_Yldnc1EsSAf15v7SA9w\/view?usp=sharing","has_financing_solutions":true,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":"pk_live_tmL1h82DAT4r1XSbiM8mGTK4uGTNoYfWn9f4bEWe","project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":true,"view_landing_page_nav":true,"view_landing_page_features":true,"view_soon_for_sale_label":true,"lang":"ar"},{"id":2,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 150","description":[],"image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/h5arF8451SN7vdCP2CtrFKvoZbGnRkRHnn4Y4FOZ.jpg","code":"150","status":"soon_for_sale","view_web_site_attention_request":true,"status_text":"\u0642\u0631\u064a\u0628\u0627 \u0644\u0644\u0628\u064a\u0639","view_if_sold":false,"view_attention_request":true,"view_units":false,"banner_img":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/viA277NGK9rpJi5p7ytrCZPMc5c3mJJaJeTO3D4G.jpg","buildings_count":1,"units_count":0,"location":{"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0639\u0631\u0642\u0629","latitude":"24.680315","longitude":"46.576881","map_url":"https:\/\/maps.google.com\/maps?q=24.680315,46.576881"},"video_link":"","gallery":null,"sold_units":null,"available_units":null,"pdf_file":null,"thd_view":null,"is_sales_on_map":false,"project_category_id":1,"view_web_site_label":false,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1AmSIxNTf-Mru4nXc7hx4qJxXMH5C5hGo\/view","has_financing_solutions":false,"latest_discount_offer":"","features":null,"moyasar_api_publishable_key":null,"project_area":0,"offices_num":0,"shops_num":0,"landing_page_paragraph":[],"landing_page_logo":null,"view_landing_page_units":false,"view_landing_page_nav":false,"view_landing_page_features":false,"view_soon_for_sale_label":true,"lang":"ar"}],"content":{"web_site_data":{"logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/VmyJSVcSg346Kz5TFlSLDFnZtTgzbF5hdcZnS21G.png","majaz_logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/xvtRnorogsRMFkzEsaHb5gpzw8pOYAylRFCJshgY.png","description":"\u0646\u0647\u062a\u0645 \u0641\u064a \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u064a\u062f\u0646\u0633 \u0628\u0625\u062b\u0628\u0627\u062a \u062f\u0648\u0631\u0646\u0627 \u0627\u0644\u0641\u0639\u0651\u0627\u0644 \u0648\u062d\u0650\u0631\u0635\u0650\u0646\u0627 \u0639\u0644\u0649 \u062a\u0642\u062f\u064a\u0645 \u062a\u0633\u0647\u064a\u0644\u0627\u062a \u062a\u064f\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u062d\u0642\u064a\u0642 \u0627\u0644\u0631\u0624\u064a\u0629 2030 \u0645. \u0628\u062f\u0627\u064a\u0629\u064b \u0645\u0646 \u0627\u0647\u062a\u0645\u0627\u0645\u0646\u0627 \u0628\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u064f\u062e\u0637\u0637\u0627\u062a \u0630\u0627\u062a \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0645\u064f\u062a\u0643\u0627\u0645\u0644\u0629 \u0648\u0645\u064f\u062c\u0647\u0632\u0629 \u0644\u0645\u064f\u0628\u0627\u0634\u0631\u0629 \u0627\u0644\u0628\u0646\u0627\u0621.","search_word":{"ar":null,"en":null},"website_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633"},"success_partner":{"title":{"ar":"\u0633\u0648\u0641 \u0646\u0643\u0648\u0646 \u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0637\u0631\u064a\u0642 \u0639\u0644\u064a \u0627\u0644\u0645\u062f\u064a \u0627\u0644\u0628\u0639\u064a\u062f","en":"We will be partners in the long-term"},"description":{"ar":"\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u062a\u0639\u062f\u064a\u0644\u0629","en":"This text is an example of text that can be modified"}},"why_us":{"image":"https:\/\/almajdiah.test\/storage\/site\/images\/Bmmvzy4s8QxVKbJj6RQ45cMtWOXDiXDaCsassfeu.jpg","title":{"ar":"\u0627\u0644\u062e\u0628\u0631\u0627\u0621 \u0641\u064a \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u062f\u0648\u0644\u064a\u0629","en":"Experts in local and international real estate"},"advantages":[{"ar":"\u0639\u0642\u0627\u0631 \u0631\u0627\u0626\u0639","en":"Fantastic property"},{"ar":"\u0627\u0645\u0627\u0643\u0646 \u062d\u062f\u064a\u062b\u0629 \u0644\u0644\u0645\u062f\u0646","en":"Modern places for cities"},{"ar":"\u062e\u0628\u0631\u0627\u0621 \u0648\u0628\u0627\u062d\u062b\u064a\u0646 \u0641\u064a \u0645\u062c\u0627\u0644 \u0627\u0644\u062a\u0633\u0648\u064a\u0642","en":"Marketing experts and researchers"}],"description":{"ar":"\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u062a\u0639\u062f\u064a\u0644\u0629","en":"This text is an example of text that can be modified"}},"terms_conditions":{"title":{"ar":"\u0627\u0644\u062e\u0628\u0631\u0627\u0621 \u0641\u064a \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u062f\u0648\u0644\u064a\u0629","en":"Experts in local and international real estate"},"description":{"ar":"\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u062a\u0639\u062f\u064a\u0644\u0629","en":"This text is an example of text that can be modified"}},"real_estate_stats":{"stats":[{"name":"\u0645\u062a\u0631 \u0645\u0631\u0628\u0639 \u062a\u0645 \u062a\u0637\u0648\u064a\u0631\u0647","value":"2,000,000","logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/4kf65Z9fTnQsijmhK7MDjYf7lj2h7apWCmNOfVCR.png"},{"name":"\u0633\u0643\u0627\u0646 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633","value":"60,000+","logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/4ba55kXy8YXj6TbOnGvVcr0j9tc9bTvIEvo3Wm6o.png"},{"name":"\u0645\u0628\u0646\u0649 \u062a\u0645 \u0625\u0646\u0634\u0627\u0624\u0647","value":"1000+","logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/KLr8OMvbwCIhzQhIA0lWQYBigfjTbDlOsHIlYrD8.png"},{"name":"\u0648\u062d\u062f\u0629 \u0633\u0643\u0646\u064a\u0629","value":"15,000+","logo":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/2Bgukif3susFKO2w8A6cUii0bsH76iyxaiuRYEdP.png"}],"title":"\u0625\u0646\u0640\u0640\u062c\u0640\u0640\u0640\u0627\u0632\u0627\u062a\u0640\u0646\u0640\u0640\u0640\u0640\u0627"},"contact_data":{"email":"info@almajdiah.com","phone":"920011719","address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u062d\u064a \u0627\u0644\u0642\u064a\u0631\u0648\u0627\u0646 - \u0634\u0645\u0627\u0644 \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0644\u0643 \u0633\u0644\u0645\u0627\u0646","twitter":"https:\/\/twitter.com\/almajdiah","youtube":"https:\/\/www.youtube.com\/@almajdiahres","linkedin":"https:\/\/www.linkedin.com\/company\/13018248\/admin\/","section1":{"ar":"<b>\u0627\u0628\u0642\u064e \u0639\u0644\u0649 \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u062f\u0627\u0626\u0645\u0627<\/b>\n                        <br\/>\n                         \u0634\u0643\u0631\u0627 \u0644\u0627\u0647\u062a\u0645\u0627\u0645\u0643. \u0646\u062d\u0646 \u0646\u0624\u0645\u0646 \u0628\u0627\u0644\u0625\u0628\u062f\u0627\u0639 \u0628\u0627\u0639\u062a\u0628\u0627\u0631\u0647 \u0623\u062d\u062f \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u062a\u0642\u062f\u0645. \u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0644\u062f\u064a\u0643 \u0623\u064a \u0634\u0643\u0627\u0648\u0649 \u0623\u0648 \u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a \u062d\u0648\u0644 \u0645\u0646\u062a\u062c\u0627\u062a\u0646\u0627 \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u062d\u062f \u0627\u0644\u062a\u0627\u0644\u064a","en":"<b>Always stay in touch with us<\/b>\n                        <br\/>\nThank you for your interest. We believe creativity is one of the main forces of progress. Please use this form if you have any questions about our products and we will get back to you shortly"},"section2":{"ar":"\u0645\u0646 \u0627\u0644\u0633\u0627\u0639\u0629 9 \u0635\u0628\u0627\u062d\u0627 \u0627\u0644\u0649 8 \u0645\u0633\u0627\u0621\u0627","en":"From 9 am to 8 pm"},"section3":{"ar":"\u0627\u0628\u0642\u0649 \u062f\u0627\u0626\u0645\u0627\u064b \u0639\u0644\u064a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0645\u0639\u0631\u0641\u0629 \u0622\u062e\u0631 \u0627\u0644\u0645\u0633\u062a\u062c\u062f\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627 \u0648\u0622\u062e\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0648\u0627\u0644\u0623\u062d\u062f\u0627\u062b","en":"Stay in touch to know our latest developments, activities, news and events"},"section4":{"ar":"\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0644\u0644\u0645\u0628\u064a\u0639\u0627\u062a\n                    <br\/>\n                    \u0645\u0646 \u0627\u0644\u0633\u0627\u0639\u0629 9 \u0635\u0628\u0627\u062d\u0627 \u0627\u0644\u0649 8 \u0645\u0633\u0627\u0621","en":"work hours sales\n                    <br\/\n                    \u0645\u0646 \u0627\u0644\u0633\u0627\u0639\u0629 9 \u0635\u0628\u0627\u062d\u0627 \u0627\u0644\u0649 3 \u0645\u0633\u0627\u0621"},"snapchat":"https:\/\/www.snapchat.com\/add\/almajdiah_res?share_id=2F1w_-envU0&amp;locale=en-GB","instagram":"https:\/\/www.instagram.com\/almajdiah\/","location_map_url":"https:\/\/www.google.com\/maps\/embed?pb=!1m14!1m8!1m3!1d14484.38582489281!2d46.6213184!3d24.8263748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee56fd12e54b3%3A0x9ad1cba7aba95a5c!2z2KfZhNmF2KfYrNiv2YrYqSDYsdmK2LLZitiv2YbYsw!5e0!3m2!1sen!2ssa!4v1671959510253!5m2!1sen!2ssa"},"about_us":{"card1":{"icon":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/aiUursLZo0jC2g5t593WrUj5YKKsNTYycXACfeMv.svg","title":{"ar":"\u0631\u0624\u064a\u062a\u0646\u0627","en":"Our vision"},"content":{"ar":"\u062a\u0644\u0628\u064a\u0640\u0640\u0640\u0640\u0640\u0629 \u062a\u0637\u0644\u0639\u0640\u0640\u0640\u0640\u0627\u062a \u062e\u0637\u0640\u0640\u0640\u0640\u0640\u0640\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0640\u0640\u0640\u0640\u0640\u0629 \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644\u064a\u0640\u0640\u0640\u0640\u0629\u060c \u0648\u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0632\u064a\u0627\u062f\u0629 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0633\u0639\u0627\u062f\u0629 \u0648\u0627\u0644\u0631\u0641\u0627\u0647 \u0627\u0644\u0625\u0642\u062a\u0635\u0627\u062f\u064a \u0648\u0627\u0644\u0625\u062c\u062a\u0645\u0627\u0639\u064a \u0645\u0646 \u0623\u062c\u0644 \u062a\u0648\u0641\u064a\u0631 \u0623\u0641\u0636\u0640\u0640\u0640\u0644 \u0627\u0644\u0623\u0645\u0640\u0627\u0643\u0640\u0640\u0646 \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u0648\u0627\u0644\u062a\u062c\u0640\u0640\u0640\u0640\u0640\u0627\u0631\u064a\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0629 \u0648\u0627\u0644\u0641\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0631\u0635 \u0627\u0644\u0625\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629.","en":"Meeting the aspirations of the Kingdom\u2019s future plan, and focusing on increasing the standards of happiness and economic and social well-being in order to provide the best residential and commercial places and investment opportunities."}},"card2":{"icon":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/N9axZC7HnkwQyEIYVF2eAaFapFprYmbLNEKKjLcU.svg","title":{"ar":"\u0631\u0633\u0627\u0644\u062a\u0646\u0627","en":"Our message"},"content":{"ar":"\u0623\u0646 \u0646\u0635\u0646\u0639 \u0628\u0635\u0645\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u0629 \u0648\u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u0645\u064a\u0640\u0632\u0629 \u0648\u0627\u0644\u0645\u0628\u062a\u0643\u0640\u0631\u0629 \u0639\u0627\u0644\u064a\u0640\u0629 \u0627\u0644\u062c\u0640\u0640\u0648\u062f\u0629\u060c \u0644\u0646\u0631\u062a\u0642\u064a \u0628\u0647\u0640\u0640\u0627 \u0644\u062c\u0640\u0640\u0648\u062f\u0629 \u0627\u0644\u062d\u0640\u064a\u0640\u0640\u0640\u0640\u0640\u0640\u0627\u0629 \u0648\u062a\u062d\u0642\u0640\u0640\u0640\u0642 \u062a\u0646\u0645\u064a\u0640\u0640\u0640\u0640\u0640\u0629 \u0627\u0644\u0645\u062c\u062a\u0645\u0639.","en":"Meeting the needs and expectations of the real estate market by constructing modern residential and commercial buildings with the highest quality standards, smart systems, and advanced protection solutions. Thus, we become an active part of the prosperity of the national economy and contribute an effective role in keeping the Kingdom in line with global lifestyles."}},"card3":{"icon":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/vtUHp7WsmYVGlIWZjfgbhpXJLgTpCz3xey7s9yLo.svg","title":{"ar":"\u0623\u0647\u062f\u0627\u0641\u0646\u0627","en":"Our goals"},"content":{"ar":"\u0627\u0646\u0634\u0627\u0621 \u0645\u062c\u062a\u0645\u0639\u0627\u062a \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0645\u0646 \u062d\u062f\u0627\u0626\u0642 \u0648\u0646\u0648\u0627\u062f\u064a \u0631\u064a\u0627\u0636\u064a\u0629 \u0648\u062d\u0636\u0627\u0646\u0627\u062a \u0623\u0637\u0641\u0627\u0644 \u0648\u0645\u064a\u0646\u064a \u0645\u0627\u0631\u0643\u062a \u0648\u0643\u0648\u0641\u064a \u0634\u0648\u0628 \u0648\u0645\u0646\u0627\u0637\u0642 \u0623\u0644\u0639\u0627\u0628 \u0644\u062a\u0642\u062f\u064a\u0645 \u062a\u062c\u0631\u0628\u0629 \u0633\u0643\u0646 \u0645\u0645\u064a\u0632\u0629\u060c  \u0648\u0641\u0642\u0627\u064b \u0644\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0623\u0645\u0646 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0644\u0644\u0623\u0628\u0646\u064a\u0629\u060c \u0648\u0630\u0627\u062a \u0645\u0648\u0627\u0642\u0639 \u0645\u062a\u0645\u064a\u0632\u0629.","en":"Creating integrated communities with services and facilities, including gardens, sports clubs, nurseries, mini-markets, coffee shops, and play areas, to provide a distinctive residential experience, in accordance with the highest building security and safety standards, in distinct locations."}},"card4":{"icon":null,"title":{"ar":"\u0642\u064a\u0645\u0646\u0627","en":"Our values"},"content":{"ar":"\u0623\u0646 \u0646\u0646\u062a\u0642\u0644 \u0645\u0646 \u0646\u062c\u0627\u062d \u0625\u0644\u0649 \u0646\u062c\u0627\u062d\u060c \u0648\u0623\u0646 \u0646\u062f\u0641\u0640\u0640\u0640\u0639 \u0639\u062c\u0644\u0640\u0640\u0640\u0629 \u0627\u0644\u0646\u0645\u0640\u0648 \u0627\u0644\u0625\u0642\u062a\u0635\u0627\u062f\u064a \u0645\u0646 \u062e\u0644\u0627\u0644 \u062a\u0648\u0641\u064a\u0631 \u0627\u0644\u062b\u0642\u0640\u0640\u0640\u0629 \u0648\u0627\u0644\u0627\u062d\u062a\u0640\u0640\u0631\u0627\u0645 \u0627\u0644\u0645\u062a\u0628\u0640\u0640\u0627\u062f\u0644 \u0648\u0648\u0636\u0640\u0640\u0640\u0640\u0639 \u0645\u0635\u0640\u0640\u0640\u0627\u0644\u062d \u0627\u0644\u0639\u0645\u0640\u0640\u0644\u0627\u0621 \u0648\u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0641\u064a \u0645\u0642\u062f\u0645\u0629 \u0623\u0648\u0644\u0648\u064a\u0627\u062a\u0646\u0627 \u0648\u0627\u0644\u062a\u062d\u0644\u064a \u0628\u062d\u0633 \u0639\u0627\u0644 \u0645\u0646 \u0627\u0644\u0645\u0633\u0640\u0640\u0624\u0648\u0644\u064a\u0629 \u062a\u062c\u0627\u0647\u0647\u0645 \u0648\u0627\u0644\u062a\u0645\u064a\u0651\u0632 \u0648\u0627\u0644\u0631\u0642\u064a\u0651.","en":"To move from success to another, to advance economic growth by providing trust and mutual respect, putting the interests of customers and investors at the top of our priorities, and exercising a high sense of responsibility towards them, excellence and sophistication."}},"card5":{"icon":null,"title":{"ar":"\u0631\u0624\u064a\u0629 2030","en":"2030 Vision"},"content":{"ar":"\u0646\u0647\u062a\u0645 \u0641\u064a \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u064a\u062f\u0646\u0633 \u0628\u0625\u062b\u0628\u0627\u062a \u062f\u0648\u0631\u0646\u0627 \u0627\u0644\u0641\u0639\u0651\u0627\u0644 \u0648\u062d\u0631\u0635\u0646\u0627 \u0639\u0644\u0649 \u062a\u0642\u062f\u064a\u0645 \u062a\u0633\u0647\u064a\u0644\u0627\u062a \u062a\u0633\u0627\u0647\u0645 \u0641\u064a \u062a\u062d\u0642\u064a\u0642 \u0627\u0644\u0631\u0624\u064a\u0629 2030. \u0628\u062f\u0627\u064a\u0629\u064b \u0645\u0646 \u0627\u0647\u062a\u0645\u0627\u0645\u0646\u0627 \u0628\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u062e\u0637\u0637\u0627\u062a \u0630\u0627\u062a \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0648\u0645\u062c\u0647\u0632\u0629 \u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0627\u0644\u0628\u0646\u0627\u0621. \u0648\u0644\u0645 \u0646\u063a\u0641\u0644 \u0639\u0646 \u062a\u0644\u0628\u064a\u0629 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0637\u0646 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0628\u062a\u0648\u0641\u064a\u0631 \u0648\u062d\u062f\u0627\u062a \u0633\u0643\u0646\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u062a\u0645\u0644\u0643 \u0628\u0623\u0633\u0639\u0627\u0631 \u062a\u0646\u0627\u0641\u0633\u064a\u0629\u060c \u062a\u062a\u0648\u0641\u0631 \u0641\u064a\u0647\u0627 \u0645\u0633\u0627\u062d\u0627\u062a \u0648\u0627\u0633\u0639\u0629 \u0645\u0639 \u0623\u0641\u0636\u0644 \u0623\u0633\u0627\u0644\u064a\u0628 \u0627\u0644\u0631\u0627\u062d\u0629 \u0648\u0627\u0644\u0623\u0645\u0627\u0646. \u0648\u0639\u0645\u0644\u0646\u0627 \u0623\u064a\u0636\u064b\u0627 \u0639\u0644\u0649 \u062a\u0642\u0648\u064a\u0629 \u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0645\u0639 \u0627\u0644\u0628\u0646\u0648\u0643 \u0648\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0645\u0648\u064a\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0648\u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0625\u0633\u0643\u0627\u0646 \u0644\u0625\u062a\u0627\u062d\u0629 \u0641\u0631\u0635 \u0627\u0644\u062a\u0645\u0644\u064f\u0643 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0644\u0644\u0645\u0648\u0627\u0637\u0646 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0628\u0645\u0627 \u064a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0645\u062a\u0648\u0633\u0637 \u062f\u062e\u0644\u0647 \u0627\u0644\u0633\u0646\u0648\u064a.","en":"---At Al Majdiah Residence, we are interested in proving our effective role and our keenness to provide facilities that contribute to achieving Vision 2030. Starting with our interest in choosing plans with integrated infrastructure and equipped to begin construction. We have not neglected to meet the needs of the Saudi citizen by providing high-quality residential units ready for ownership at competitive prices, in which large areas are available with the best methods of comfort and safety. We also worked to strengthen relationships with banks and real estate financing companies, and in cooperation with the Ministry of Housing, to provide real estate ownership opportunities for Saudi citizens in proportion to their average annual income."}},"section1":{"title":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633","en":"Al Majdiah Residence"},"content":{"ar":"\u062a\u0639\u062f\u0651 \u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0645\u0646 \u0623\u0648\u0627\u0626\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0631\u0627\u0626\u062f\u0629 \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u060c \u0648\u062a\u0642\u0648\u0645 \u0628\u062f\u0648\u0631 \u0645\u062a\u0643\u0627\u0645\u0644 \u0641\u064a \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u060c \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u0641\u0644\u0644 \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0630\u0627\u062a \u062c\u0648\u062f\u0629 \u0639\u0627\u0644\u064a\u0629\u060c \u0648\u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0648\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0644\u062a\u0633\u0627\u0647\u0645 \u0641\u064a \u0646\u0645\u0648 \u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0634\u0627\u0631\u064a\u0639 \u063a\u0637\u062a \u0641\u064a\u0647\u0627 \u0645\u0646\u0627\u0637\u0642 \u0645\u062e\u062a\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u062a\u0644\u0628\u064a \u0641\u064a\u0647\u0627 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u062a\u062d\u0642\u064a\u0642 \u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646.","en":"Al Majdiah Residence Company is one of the first leading companies in the real estate field, and it plays an integrated role in the Saudi real estate market, by building high-quality residential villas and commercial buildings, and planning and real estate investment to contribute to the growth of the real estate market economy through projects that cover different regions of the Kingdom of Saudi Arabia that meet It meets customer needs and achieves investors&apos; goals."}},"section2":{"title":{"ar":"\u0627\u0644\u0644\u0628\u0646\u0629 \u0627\u0644\u0623\u0648\u0644\u0649","en":"The first building block"},"content":{"ar":"\u0641\u064a \u0639\u0627\u0645 1969 \u0645\u060c \u0634\u064a\u0651\u062f \u0627\u0644\u0634\u064a\u062e \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0628\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0627\u062c\u062f -\u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647- \u0623\u0648\u0644 \u0628\u0646\u0627\u0621 \u0644\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0645\u062a\u0645\u062b\u0644\u0627\u064b \u0628\u0641\u064a\u0644\u0627 \u0641\u064a \u062d\u064a \u0627\u0644\u0642\u0631\u064a \u060c \u0648\u062a\u062a\u0627\u0628\u0639\u062a \u0628\u0639\u062f \u0630\u0644\u0643 \u0645\u0634\u0627\u0631\u064a\u0639\u0647 \u0648\u0646\u0645\u062a \u0623\u0643\u062b\u0631 \u0641\u0623\u0643\u062b\u0631 \u060c \u0648\u0628\u0639\u062f \u0648\u0641\u0627\u062a\u0647 -\u0631\u062d\u0645\u0647 \u0627\u0644\u0644\u0647- \u0627\u0633\u062a\u0644\u0645 \u0627\u0644\u0631\u0627\u064a\u0629 \u0623\u0628\u0646\u0627\u0624\u0647 \u0648\u0633\u0627\u0631\u0648\u0627 \u0639\u0644\u0649 \u062f\u0631\u0628\u0647 \u0641\u064a \u0627\u0644\u062a\u0639\u0645\u064a\u0631 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u062d\u062a\u0649 \u062a\u0648\u062c\u0648\u0627 \u0623\u0639\u0645\u0627\u0644\u0647\u0645 \u0628\u062a\u0623\u0633\u064a\u0633 \u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0644\u062a\u062f\u0641\u0639 \u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0646\u062d\u0648 \u0646\u062c\u0627\u062d\u0627\u062a \u0648\u0625\u0646\u062c\u0627\u0632\u0627\u062a \u0623\u0643\u0628\u0631 .","en":"In 1969 , Sheikh Abd al-Rahman bin Nasser al-Majid - may God have mercy on him - built the first residential investment villa in Riyadh city in the Al-Qari neighborhood, after that, his projects followed and grew more and more. \nAfter his death - may God have mercy on him - his sons took over the banner and followed his path in reconstruction and real estate development until They culminated in the establishment of Al Majdiah Residence Company to push the journey of real estate investment and development toward more incredible successes and achievements that lasted for more than fifty years."}},"section3":{"title":{"ar":"\u062a\u0635\u0645\u064a\u0645\u0627\u062a\u0646\u0627","en":"Our designs"},"content":{"ar":"\u0646\u0639\u0645\u0644 \u0641\u064a \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0639\u0644\u0649 \u0627\u0644\u0625\u0628\u062f\u0627\u0639 \u0648\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0641\u064a \u062a\u0635\u0627\u0645\u064a\u0645\u0646\u0627 \u0644\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u060c \u0641\u0628\u064a\u0646 \u0627\u0644\u062c\u0645\u0627\u0644 \u0648\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a \u062a\u0643\u0645\u0646 \u062a\u0635\u0627\u0645\u064a\u0645 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u060c \u0645\u0645\u0627 \u064a\u0636\u0645\u0646 \u0644\u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0623\u0641\u0636\u0644 \u062e\u064a\u0627\u0631 \u0644\u0633\u0643\u0646 \u0627\u0644\u0639\u0645\u0631.","en":"At Al Majdiah Residence, we work on creativity and innovation in our designs for residential units. Between beauty and investment in space lie Al Majdiah designs, which guarantees our customers the best choice for housing for a lifetime."}},"section4":{"title":{"ar":"\u0643\u0644\u0645\u0629 \u0627\u0644\u0631\u0626\u064a\u0633 \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u064a","en":"Executive Director&apos;s speech"},"content":{"ar":"<p>\u0639\u0645\u0644\u062a \u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0645\u0646\u0630 \u0628\u062f\u0627\u064a\u0629 \u062a\u0623\u0633\u064a\u0633\u0647\u0627 \u0639\u0627\u0645 1969\u0645 \u0639\u0644\u0649 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0631\u0627\u0626\u062f\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c \u0648\u062d\u0631\u0635\u062a \u0639\u0644\u0649 \u0623\u0646 \u062a\u0642\u062f\u0645 \u0643\u0627\u0641\u0629 \u062e\u062f\u0645\u0627\u062a\u0647\u0627 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643 \u0627\u0644\u0639\u0627\u062f\u064a \u0648\u0648\u0635\u0648\u0644\u0627\u064b \u0625\u0644\u0649 \u0631\u062c\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646.<\/p>\r\n                                <p>\r\n                                    \u0644\u0642\u062f \u062a\u062d\u0642\u0642 \u0628\u0641\u0636\u0644 \u0627\u0644\u0644\u0647 \u062d\u0644\u0645\u0646\u0627 \u0628\u062a\u0637\u0648\u064a\u0631 \u0634\u0631\u0643\u062a\u0646\u0627 \u0627\u0644\u062a\u064a \u0648\u0636\u0639\u0646\u0627 \u0641\u064a\u0647\u0627 \u062e\u0644\u0627\u0635\u0629 \u062a\u062c\u0631\u0628\u062a\u0646\u0627 \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0645\u062c\u0627\u0644 \u0628\u0645\u0627 \u064a\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u062a\u0646\u0627 \u0627\u0644\u0647\u0627\u062f\u0641\u0629 \u0625\u0644\u0649 \u062a\u0623\u0633\u064a\u0633 \u0643\u064a\u0627\u0646 \u0645\u062a\u0643\u0627\u0645\u0644 \u0642\u0627\u062f\u0631 \u0639\u0644\u0649 \u0627\u0644\u0646\u0645\u0648 \u0648\u0627\u0644\u062a\u0637\u0648\u0631 \u0645\u0639 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0648\u0631\u0624\u064a\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 2030\u060c \u0648\u0630\u0644\u0643 \u0628\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u0649 \u062e\u0628\u0631\u062a\u0646\u0627 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 \u0648\u0642\u0648\u0629 \u0648\u0645\u0643\u0627\u0646\u0629 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0633\u0639\u0648\u062f\u064a.<\/p>\r\n                                <p>\r\n                                    \u0644\u0642\u0640\u062f \u0633\u0627\u0647\u0645 \u0639\u062f\u062f \u0645\u0646 \u0627\u0644\u0639\u0648\u0627\u0645\u0644 \u0641\u064a \u062a\u062d\u0642\u064a\u0642 \u0646\u062c\u0627\u062d\u0646\u0627\u060c \u0648\u0645\u0646\u0647\u0627 \u062a\u0636\u0627\u0641\u0631 \u0627\u0644\u062c\u0647\u0648\u062f \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u0629 \u0644\u0644\u0639\u0627\u0645\u0644\u064a\u0646 \u0641\u064a \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0627\u0644\u0648\u0637\u064a\u062f\u0629 \u0627\u0644\u062a\u064a \u0628\u0646\u064a\u0646\u0627\u0647\u0627 \u0645\u0639 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0648\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646\u0627 \u0648\u0634\u0631\u0643\u0627\u0626\u0646\u0627\u060c \u0648\u0625\u064a\u0645\u0627\u0646\u0646\u0627 \u0628\u0627\u0644\u0642\u064a\u0645 \u0648\u0627\u0644\u0645\u0628\u0627\u062f\u0626 \u0627\u0644\u062a\u064a \u062a\u0643\u0641\u0644 \u0627\u0644\u0645\u0646\u0641\u0639\u0629 \u0627\u0644\u0645\u062a\u0628\u0627\u062f\u0644\u0629\u060c \u0648\u0627\u0644\u062a\u0632\u0627\u0645\u0646\u0627 \u0628\u062a\u0642\u062f\u064a\u0645 \u0639\u0631\u0648\u0636 \u0630\u0627\u062a \u062c\u0648\u062f\u0629 \u0639\u0627\u0644\u064a\u0629 \u0648\u0628\u0623\u0633\u0639\u0627\u0631 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u0644\u0644\u062c\u0645\u064a\u0639. <\/p>\r\n                                <p>\r\n                                    \u0648\u0645\u0646 \u0623\u062c\u0644 \u0645\u0648\u0627\u0643\u0628\u0629\u064b \u0645\u0642\u062a\u0636\u064a\u0627\u062a \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644\u064a\u0629 \u0648\u0627\u0646\u0637\u0644\u0627\u0642\u0627\u064b \u0645\u0646 \u0631\u0624\u064a\u062a\u0646\u0627 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 \u0644\u0648\u0627\u0642\u0639 \u0633\u0648\u0642 \u0627\u0644\u0639\u0642\u0627\u0631 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u060c \u0646\u0633\u0639\u0649 \u062f\u0627\u0626\u0645\u0627\u064b \u062a\u0642\u062f\u064a\u0645 \u0623\u0646\u0641\u0633\u0646\u0627 \u0628\u0634\u0643\u0644 \u0639\u0635\u0631\u064a \u0641\u064a \"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\" \u0645\u0646 \u0634\u0623\u0646\u0647\u0627 \u0623\u0646 \u062a\u0624\u0647\u0644\u0646\u0627 \u0644\u0644\u0639\u0645\u0644 \u0628\u0634\u0643\u0644 \u062a\u0641\u0627\u0639\u0644\u064a \u0623\u0643\u062b\u0631 \u0627\u0644\u062a\u0632\u0627\u0645\u064b\u0627 \u064a\u0639\u0643\u0633 \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0634\u0640\u0631\u0643\u0629 \u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060c \u0641\u064a\u0645\u0627 \u064a\u062d\u062f\u0648\u0646\u0627 \u0623\u0645\u0644 \u0643\u0628\u064a\u0631 \u0628\u0645\u0633\u062a\u0642\u0628\u0644 \u0646\u0642\u062f\u0645 \u0641\u064a\u0647 \u0623\u0641\u0636\u0644 \u0645\u0627 \u0644\u062f\u064a\u0646\u0627 \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0641\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.\r\n                                    \u0648\u0639\u0644\u064a\u0647 \u0641\u0625\u0646 \u0645\u0647\u0645\u062a\u0646\u0627 \u062a\u0643\u0645\u0646 \u0628\u0636\u0631\u0648\u0631\u0629 \u0623\u0646 \u0646\u062d\u0645\u0644 \u0627\u0644\u0639\u0628\u0621 \u0644\u062a\u0648\u0641\u064a\u0631 \u0627\u0644\u0648\u0642\u062a \u0648\u0627\u0644\u062c\u0647\u062f \u0648\u0627\u0644\u0645\u0627\u0644 \u0648\u0646\u0642\u062f\u0645 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0633\u0648\u0627\u0621 \u0643\u0627\u0646\u062a \u0633\u0643\u0646\u064a\u0629 \u0623\u0648 \u062a\u062c\u0627\u0631\u064a\u0629 \u0623\u0648 \u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629 \u0645\u0642\u0627\u0628\u0644 \u0646\u0633\u0628\u0629 \u0645\u0639\u0642\u0648\u0644\u0629 \u0648\u0645\u0646\u0627\u0641\u0633\u0629.<\/p>\r\n                                <p>\r\n                                \u0648\u0623\u0648\u062f \u0623\u0646 \u0623\u0630\u0643\u0631 \u0623\u0646 \u0634\u0631\u0643\u062a\u0646\u0627 \u0623\u0628\u0631\u0645\u062a \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0635\u0641\u0642\u0627\u062a \u0645\u0646 \u0627\u0644\u0623\u0635\u0648\u0644 \u0648\u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0648\u0627\u0644\u0623\u0645\u0644\u0627\u0643 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0628\u0623\u0633\u0644\u0648\u0628 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0637\u0631\u0627\u0641\u060c \u0648\u0645\u0627\u0632\u0644\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0639\u0647\u062f \u0648\u0644\u062f\u064a\u0646\u0627 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0642\u0635\u0635 \u0627\u0644\u0646\u062c\u0627\u062d. \u0648\u0627\u0646\u0646\u0627 \u0645\u0644\u062a\u0632\u0645\u0648\u0646 \u0628\u0627\u0644\u0627\u0646\u0633\u062c\u0627\u0645 \u0645\u0639 \u062a\u0648\u062c\u0647\u0627\u062a \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0637\u0645\u0648\u062d\u0629\u060c \u0648\u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u0623\u0646 \u0646\u0643\u0648\u0646 \u062c\u0632\u0621\u0627\u064b \u0623\u0633\u0627\u0633\u064a\u0627\u064b \u064a\u0639\u0645\u0644 \u0628\u0627\u0644\u062a\u0648\u0627\u0632\u064a \u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0648\u0641\u0640\u0642\u0627\u064b \u0644\u062a\u0648\u062c\u0647\u0627\u062a \u0633\u0648\u0642 \u0627\u0644\u0639\u0642\u0627\u0631 \u0627\u0644\u0633\u0639\u0648\u062f\u064a.<\/p>","en":"Since its establishment in 1969, Al Majdiah Residence Company has worked to be a pioneer in real estate work in the Kingdom of Saudi Arabia and has been keen to provide all its services to the average consumer, all the way to businessmen and investors.\nThanks to God, our dream of developing our company has been fulfilled, we put the summary of our long experience in this field in line with our strategy aimed at establishing an integrated entity capable of growth and development with the requirements of the Saudi market and the Kingdom\u2019s Vision 2030, relying on our extensive experience and the strength and position of the Saudi economy.\nSeveral factors have contributed to achieving our success, including the combined efforts of the company\u2019s employees, the close strategic relationships we have built with our customers, investors, and partners, our belief in the values and principles that ensure mutual benefit, and our commitment to providing high-quality offers at competitive prices to all.\nTo keep pace with the requirements of the current and future stage and based on our comprehensive vision of the reality of the Saudi real estate market, we always strive to present ourselves in a modern way at \u201cAl Majdiah Residence\u201d that will qualify us to work in a more interactive and committed manner that reflects the company\u2019s responsibility towards customers, while we have great hope for a future in which we provide the best Our services are available in all Saudi cities.\nAccordingly, our mission is to bear the burden of saving time, effort, and money, and we provide many services and assistance in choosing suitable properties, whether residential, commercial, or investment, in exchange for a reasonable and competitive rate.\nI would like to mention that our company has concluded many deals of assets, lands, properties, and projects in a professional manner for all parties, and we are still committed to the promise and have many success stories. We are committed to being consistent with the directions of the ambitious economic plan, and we are working to be an essential part that works in parallel to develop the real estate market by the trends of the Saudi real estate market."}},"image_about_us":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/FFS8DRVufALnswtR2JPrhoyQ0fKjCYH9Dvt9Ib5A.png","image_manager_work":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/images\/THP7anxKGuvikyrgcw9dAh4YEl29XTY0nh6etzWE.jpg"},"video":{"video_url":"https:\/\/www.youtube.com\/watch?v=ND5VMPISIKQ","video_status":"1"},"policy_pages":{"terms_of_use":{"ar":"<h2 class=\"ql-direction-rtl ql-align-right\">\u0623\u0647\u0644\u0627 \u0628\u0643\u0645 \u0628\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 (almajdiah.com \u0648 \/ \u0623\u0648 \u0645\u0648\u0627\u0642\u0639\u0647 \u0627\u0644\u0641\u0631\u0639\u064a\u0629\u060c &apos;\u0627\u0644\u0645\u0648\u0642\u0639&apos;).<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0645 \u0625\u0628\u0631\u0627\u0645 \u0634\u0631\u0648\u0637 \u0648\u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 (&apos;\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645&apos;) \u0628\u064a\u0646\u0643 \u0648\u0628\u064a\u0646 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 (&apos;\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629&apos;\u060c &apos;\u0646\u062d\u0646&apos;\u060c &apos;\u0646\u0627&apos;)<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0644\u0643 \u0627\u0644\u0645\u0648\u0642\u0639\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639\u060c \u0628\u0634\u0631\u0637 \u0642\u0628\u0648\u0644\u0643 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0651\u0629 \u0628\u0646\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u062a\u063a\u064a\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0645 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u064a\u0647\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u062a\u0639\u062f\u0651\u0644 \u0623\u0648 \u062a\u062d\u0644\u0651 \u0645\u062d\u0644 \u0623\u062d\u0643\u0627\u0645 \u0623\u0648 \u0634\u0631\u0648\u0637 \u0623\u064a \u0627\u062a\u0641\u0627\u0642 \u0622\u062e\u0631 \u0642\u062f \u064a\u0643\u0648\u0646 \u0644\u062f\u064a\u0643 \u0645\u0639\u0646\u0627 \u0623\u0648 \u0623\u064a \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u062a\u0627\u0628\u0639\u0629 \u0644\u0647\u0627 \u0623\u0648 \u0641\u0631\u0648\u0639\u0647\u0627<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u062d\u062f\u062f \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 (\u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u0623\u064a \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0645\u0634\u0627\u0631 \u0625\u0644\u064a\u0647\u0627 \u0647\u0646\u0627) \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u062a\u064a \u0628\u0645\u0648\u062c\u0628\u0647\u0627 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062f\u062e\u0648\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646\u0647\u0627\u060c \u0633\u0648\u0627\u0621 \u0628\u0635\u0641\u062a\u0643 \u0643\u0632\u0627\u0626\u0631 \u0623\u0648 \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0633\u062c\u0644:<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;\u0645\u0648\u0642\u0639\u0646\u0627 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u062c\u0648\u0627\u0644 \u0627\u0644\u062e\u0627\u0635 \u0628\u0646\u0627<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u200c\u0635\u0641\u062d\u0627\u062a\u0646\u0627 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0623\u062e\u0631\u0649 \u0648\u0623\u064a\u0627\u064b \u0643\u0627\u0646\u062a \u0635\u064a\u063a\u062a\u0647\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">(\u064a\u064f\u0634\u0627\u0631 \u0625\u0644\u064a\u0647\u0627 \u0645\u0639\u064b\u0627 \u0628\u0627\u0633\u0645 &apos;\u0645\u0646\u0635\u0627\u062a\u0646\u0627&apos; \u0623\u0648 &apos;\u0627\u0644\u0645\u0646\u0635\u0627\u062a&apos;).<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647\u060c \u0647\u064a \u0648\u062b\u064a\u0642\u0629 \u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u062a\u062d\u062f\u062f \u0627\u0644\u062d\u0642\u0648\u0642 \u0648\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a \u0628\u064a\u0646\u0643 \u0648\u0628\u064a\u0646 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\u060c \u0648\u064a\u062c\u0628 \u0623\u0646 \u062a\u064f\u0642\u0631\u0623 \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628 \u0645\u0639 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u062d\u062f\u062f \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u062a\u064a \u0639\u0644\u0649 \u0623\u0633\u0627\u0633\u0647\u0627 \u0646\u0642\u0648\u0645 \u0628\u0645\u0639\u0627\u0644\u062c\u0629 \u0623\u064a \u0628\u064a\u0627\u0646\u0627\u062a\u064d \u0634\u062e\u0635\u064a\u0629 \u064a\u062a\u0645 \u062a\u062d\u0635\u064a\u0644\u0647\u0627 \u0645\u0646\u0643 \u0623\u0648 \u0627\u0644\u062a\u064a \u062a\u0632\u0648\u062f\u0646\u0627 \u0628\u0647\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u064a\u0631\u062c\u0649 \u0642\u0631\u0627\u0621\u0629 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0628\u0639\u0646\u0627\u064a\u0629 \u0642\u0628\u0644 \u0628\u062f\u0623 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u062d\u064a\u062b \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0633\u062a\u0646\u0637\u0628\u0642 \u0639\u0644\u0649 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u062a\u0644\u0643 \u0627\u0644\u0645\u0646\u0635\u0627\u062a\u060c \u0648\u064a\u0634\u0645\u0644 \u0630\u0644\u0643 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u064a\u0647\u0627\u060c \u0648\u062a\u0635\u0641\u062d\u0647\u0627\u060c \u0648\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a\u0647\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0641\u0625\u0646\u0643 \u062a\u0642\u0631 \u0628\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627\u060c \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u0647\u0627. \u0648\u0641\u064a \u062d\u0627\u0644 \u0639\u062f\u0645 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627 \u064a\u0631\u062c\u0649 \u0639\u062f\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0648 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639.<\/h2><h2 class=\"ql-align-center ql-direction-rtl\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0642\u064a\u0648\u062f \u0627\u0644\u0633\u0646<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0625\u0630\u0627 \u0643\u0627\u0646 \u0639\u0645\u0631\u0643 \u0623\u0642\u0644 \u0645\u0646 18 \u0639\u0627\u0645\u0627\u064b\u060c \u0641\u0644\u0627 \u064a\u062c\u0648\u0632 \u0644\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0625\u0644\u0627 \u062a\u062d\u062a \u0625\u0634\u0631\u0627\u0641 \u0634\u062e\u0635 \u064a\u0645\u0627\u0631\u0633 \u0633\u0644\u0637\u0629 \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646 \u0623\u0648 \u0627\u0644\u0648\u0635\u0627\u064a\u0629 \u0639\u0644\u064a\u0643 (\u0623\u064a \u0623\u062d\u062f \u0627\u0644\u0648\u0627\u0644\u062f\u064a\u0646 \u0623\u0648 \u0627\u0644\u0648\u0635\u064a).<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0627\u0644\u0645\u062d\u062f\u0648\u062f: \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0648\u0646\u0633\u062e\u0647 \u0648\u062a\u062d\u0645\u064a\u0644\u0647 \u0648\u0637\u0628\u0627\u0639\u062a\u0647 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0634\u062e\u0635\u064a \u063a\u064a\u0631 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u060c \u0634\u0631\u064a\u0637\u0629 \u0639\u062f\u0645 \u062a\u0639\u062f\u064a\u0644 \u0623\u0648 \u062d\u0630\u0641 \u0623\u064a \u062d\u0642\u0648\u0642 \u0637\u0628\u0639 \u0648\u0646\u0634\u0631\u060c \u0623\u0648 \u0639\u0644\u0627\u0645\u0629 \u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643 \u0645\u0646 \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0630\u064a \u062a\u0642\u0648\u0645 \u0628\u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u064a\u0647 \u0623\u0648 \u0646\u0633\u062e\u0647 \u0623\u0648 \u062a\u062d\u0645\u064a\u0644\u0647 \u0623\u0648 \u0637\u0628\u0627\u0639\u062a\u0647. \u0648\u064a\u064f\u062d\u0638\u0651\u064e\u0631 \u0623\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0622\u062e\u0631 \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0648\u0645\u0646 \u0630\u0644\u0643 \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d\u0635\u0631\u060c \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0623\u0648 \u0627\u0644\u062a\u063a\u064a\u064a\u0631 \u0623\u0648 \u0625\u0646\u0634\u0627\u0621 \u0623\u0639\u0645\u0627\u0644 \u0645\u0634\u062a\u0642\u0629\u060c \u0648\u0627\u0644\u062a\u0648\u0632\u064a\u0639\u060c \u0648\u0627\u0644\u0625\u0631\u0633\u0627\u0644\u060c \u0648\u0627\u0644\u062a\u0634\u063a\u064a\u0644\u060c \u0648\u0627\u0644\u0628\u062b\u060c \u0648\u0627\u0644\u0646\u0634\u0631\u060c \u0648\u0627\u0644\u0631\u0641\u0639\u060c \u0648\u0627\u0644\u062a\u062e\u0632\u064a\u0646 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0644\u0627\u062d\u0642\u060c \u0648\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0623\u0648 \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0645\u0646 \u0627\u0644\u0628\u0627\u0637\u0646 \u0643\u0644\u064a\u064b\u0627 \u0623\u0648 \u062c\u0632\u0626\u064a\u064b\u0627 \u0628\u0623\u064a \u0637\u0631\u064a\u0642\u0629 \u0643\u0627\u0646\u062a \u062f\u0648\u0646 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0648\u0627\u0641\u0642\u0629 \u0643\u062a\u0627\u0628\u064a\u0629 \u0645\u064f\u0633\u0628\u0642\u0629 \u0645\u0646\u0627. \u0628\u0647\u0630\u0627 \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0625\u0636\u0627\u0641\u064a\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0643\u0645\u0627 \u0642\u062f \u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062b\u0647\u0627 \u0645\u0646 \u0648\u0642\u062a \u0644\u0622\u062e\u0631.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0647\u0630\u0627 \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0627\u0644\u0645\u062d\u062f\u0648\u062f \u0627\u0644\u0645\u064f\u0634\u0627\u0631 \u0625\u0644\u064a\u0647 \u0623\u0639\u0644\u0627\u0647 \u0642\u0627\u0628\u0644 \u0644\u0644\u0625\u0644\u063a\u0627\u0621 \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0648\u062d\u0633\u0628 \u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0648\u062d\u062f\u0647\u0627. \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0644\u0627 \u062a\u0636\u0645\u0646 \u0648\u0644\u0627 \u062a\u0642\u0631 \u0628\u0623\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0644\u0627 \u064a\u0646\u062a\u0647\u0643 \u062d\u0642\u0648\u0642 \u0623\u0637\u0631\u0627\u0641 \u0623\u062e\u0631\u0649 \u063a\u064a\u0631 \u062a\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u064a\u062c\u0648\u0632 \u0644\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u062a\u0645 \u062a\u0648\u0641\u064a\u0631\u0647\u0627 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0644\u0623\u064a\u0629 \u0623\u063a\u0631\u0627\u0636 \u063a\u064a\u0631 \u0645\u0635\u0631\u062d \u0628\u0647\u0627 \u0623\u0648 \u063a\u064a\u0631 \u0646\u0638\u0627\u0645\u064a\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0645\u0646\u0627\u0633\u0628\u0629 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d\u0635\u0631 \u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0623\u0648 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0626\u0644 \u063a\u064a\u0631 \u0645\u0631\u063a\u0648\u0628 \u0628\u0647\u0627 \u0623\u0648 \u0631\u0633\u0627\u0626\u0644 \u062a\u062d\u0631\u0634 \u0623\u0648 \u0627\u0641\u062a\u0631\u0627\u0621 \u0623\u0648 \u0631\u0633\u0627\u0626\u0644 \u062a\u062d\u0631\u064a\u0636\u064a\u0629 \u0623\u0648 \u0644\u0644\u062a\u0631\u0648\u064a\u062c \u0644\u0623\u0639\u0645\u0627\u0644 \u0623\u0648 \u0623\u0646\u0634\u0637\u0629 \u063a\u064a\u0631 \u0646\u0638\u0627\u0645\u064a\u0629 \u0623\u0648 \u0623\u064a \u0646\u0634\u0627\u0637 \u0622\u062e\u0631 \u064a\u0647\u062f\u062f \u0633\u0644\u0627\u0645\u0629 \u0623\u0648 \u0623\u062f\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062d\u0627\u0633\u0648\u0628\u064a \u0644\u0623\u064a \u0634\u062e\u0635\u064d \u0623\u0648 \u0643\u064a\u0627\u0646\u064d \u0622\u062e\u0631 \u0623\u0648 \u064a\u0646\u062a\u0647\u0643 \u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0629 \u0639\u0645\u0648\u0645\u064b\u0627 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a. \u0644\u0627 \u064a\u062c\u0648\u0632 \u0644\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0645\u0639\u062f\u0651\u0627\u062a \u0623\u0648 \u0628\u0631\u0627\u0645\u062c \u062a\u0647\u062f\u0641 \u0625\u0644\u0649 \u0625\u0644\u062d\u0627\u0642 \u0627\u0644\u0636\u0631\u0631 \u0623\u0648 \u0627\u0644\u062a\u062f\u062e\u0644 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0633\u0644\u064a\u0645 \u0644\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0639\u062a\u0631\u0627\u0636 \u0623\u064a \u0646\u0638\u0627\u0645 \u0623\u0648 \u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0648 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0633\u0631\u0651\u064b\u0627. \u0643\u0645\u0627 \u0623\u0646\u0651\u064e\u0643 \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0639\u062f\u0645 \u062a\u0639\u0637\u064a\u0644 \u0623\u0648 \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u0639\u0637\u064a\u0644 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0623\u064a \u0634\u0643\u0644\u064d \u0645\u0646 \u0627\u0644\u0623\u0634\u0643\u0627\u0644. \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u0648\u0642\u0639\u060c \u0641\u0623\u0646\u062a \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0639\u062f\u0645 \u0627\u0644\u0642\u064a\u0627\u0645 \u0628\u062a\u0639\u0637\u064a\u0644 \u0623\u0648 \u0645\u062d\u0627\u0648\u0644\u0629 \u062a\u0639\u0637\u064a\u0644 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0623\u064a \u0637\u0631\u064a\u0642\u0629 \u0643\u0627\u0646\u062a.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0641\u0625\u0646\u0651\u064e\u0643 \u062a\u0636\u0645\u0646 \u0628\u0623\u0646\u0651\u064e\u0643 \u062a\u0645\u062a\u0644\u0643 \u0623\u064a \u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0623\u0648 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0623\u0648 \u0645\u0648\u0627\u062f (&apos;\u0627\u0644\u0645\u0648\u0627\u062f&apos;) \u062a\u0632\u0648\u0651\u062f\u0646\u0627 \u0628\u0647\u0627. \u0643\u0645\u0627 \u0623\u0646\u0651\u064e\u0643 \u062a\u0636\u0645\u0646 \u0648\u062a\u0642\u0631\u0651 \u0628\u0623\u0646\u0647 \u064a\u062d\u0642 \u0644\u0643 \u0646\u0634\u0631 \u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0648\u0627\u0644\u0645\u0648\u0627\u062f \u0639\u0644\u0649 \u0645\u0648\u0642\u0639\u0646\u0627 \u0648\u0623\u0646\u0651\u064e\u0647 \u0644\u062f\u064a\u0643 \u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u0631\u0627\u062e\u064a\u0635 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0627\u062a \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0644\u0642\u064a\u0627\u0645 \u0628\u0630\u0644\u0643. \u0644\u0646 \u062a\u062d\u062a\u0648\u064a \u0623\u064a \u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0623\u0648 \u0645\u0648\u0627\u062f \u0639\u0644\u0649 \u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u062a\u0634\u0647\u064a\u0631\u064a \u0623\u0648 \u0627\u0641\u062a\u0631\u0627\u0626\u064a \u0623\u0648 \u0645\u0633\u064a\u0621 \u0623\u0648 \u063a\u064a\u0631 \u0644\u0627\u0626\u0642 \u0623\u0648 \u063a\u064a\u0631 \u0646\u0638\u0627\u0645\u064a \u0628\u0623\u064a \u0634\u0643\u0644 \u0622\u062e\u0631\u060c \u0648\u0627\u0644\u0630\u064a \u064a\u064f\u0639\u062f \u0627\u0646\u062a\u0647\u0627\u0643\u064b\u0627 \u0644\u0644\u062e\u0635\u0648\u0635\u064a\u0629. \u0646\u062d\u0646 \u0644\u0627 \u0646\u0634\u062c\u0639\u0643 \u0639\u0644\u0649 \u0625\u0631\u0633\u0627\u0644 \u0623\u0648 \u0646\u0634\u0631 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062a\u0639\u062a\u0628\u0631\u0647\u0627 \u0645\u0644\u0643\u064a\u0629 \u062e\u0627\u0635\u0629 \u0628\u0643 \u0623\u0648 \u0633\u0631\u0651\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639. \u0625\u0646\u0651 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062a\u0631\u0633\u0644\u0647\u0627 \u0623\u0648 \u062a\u0646\u0634\u0631\u0647\u0627\u060c \u0633\u0646\u0641\u062a\u0631\u0636 \u0623\u0646\u0647\u0627 \u0644\u064a\u0633\u062a \u0633\u0631\u064a\u0629 \u0648\u0644\u0627 \u062a\u0646\u062a\u0647\u0643 \u0623\u064a \u062d\u0642\u0648\u0642 \u0645\u0644\u0643\u064a\u0629 \u0641\u0643\u0631\u064a\u0629 \u0644\u0637\u0631\u0641\u064d \u062b\u0627\u0644\u062b. \u0643\u0645\u0627 \u0623\u0646\u0651\u064e\u0643 \u062a\u0645\u0646\u062d\u0646\u0627 \u0628\u0645\u0648\u062c\u0628 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 \u062a\u0631\u062e\u064a\u0635\u064b\u0627 \u063a\u064a\u0631 \u0645\u0642\u064a\u0651\u062f \u0648\u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u0625\u0644\u063a\u0627\u0621 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0648\u0627\u062f \u0648\u0627\u0633\u062a\u0646\u0633\u0627\u062e\u0647\u0627 \u0648\u0639\u0631\u0636\u0647\u0627 \u0648\u062a\u0646\u0641\u064a\u0630\u0647\u0627 \u0648\u062a\u0639\u062f\u064a\u0644\u0647\u0627 \u0648\u0646\u0642\u0644\u0647\u0627 \u0648\u062a\u0648\u0632\u064a\u0639\u0647\u0627\u060c \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0623\u0646 \u0644\u0646\u0627 \u0627\u0644\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0623\u0641\u0643\u0627\u0631 \u0623\u0648 \u0645\u0641\u0627\u0647\u064a\u0645 \u0623\u0648 \u0645\u0639\u0627\u0631\u0641 \u0641\u0646\u064a\u0629 \u0623\u0648 \u062a\u0642\u0646\u064a\u0627\u062a \u062a\u0631\u0633\u0644\u0647\u0627 \u0623\u0648 \u062a\u0646\u0634\u0631\u0647\u0627 \u0644\u0623\u064a \u063a\u0631\u0636.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0639\u062f\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u063a\u0631\u0636 \u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0645\u0627\u0644\u064a\u0629<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u0623\u063a\u0631\u0627\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u064a\u0629 \u0641\u0642\u0637. \u0644\u0627 \u064a\u064f\u0642\u0635\u062f \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0639\u0644\u0649 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0628\u0645\u062b\u0627\u0628\u0629 \u062d\u0627\u0641\u0632 \u0623\u0648 \u062f\u0639\u0648\u0629 \u0644\u0623\u064a \u0634\u062e\u0635 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0623\u0648\u0631\u0627\u0642 \u0645\u0627\u0644\u064a\u0629 \u0641\u064a \u0623\u064a \u0645\u0646\u0637\u0642\u0629 \u0630\u0627\u062a \u0627\u062e\u062a\u0635\u0627\u0635 \u0642\u0636\u0627\u0626\u064a.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0648\u0644\u0627 \u064a\u064f\u0639\u062f \u0623\u0648 \u064a\u0634\u0643\u0644 \u0645\u0627 \u0647\u0648 \u0645\u0630\u0643\u0648\u0631 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u062c\u0632\u0621\u0627\u064b \u0645\u0646 \u0623\u064a \u0639\u0631\u0636 \u0628\u064a\u0639 \u0623\u0648 \u0627\u0643\u062a\u062a\u0627\u0628 \u0623\u0648 \u0623\u064a \u062f\u0639\u0648\u0629 \u0644\u0639\u0631\u0636 \u0634\u0631\u0627\u0621 \u0623\u0648 \u0627\u0643\u062a\u062a\u0627\u0628 \u0641\u064a \u0623\u064a \u0623\u0648\u0631\u0627\u0642 \u0645\u0627\u0644\u064a\u0629\u060c \u0648\u0644\u0646 \u064a\u0634\u0643\u0644 \u0647\u0630\u0627 \u0623\u0648 \u0623\u064a \u062c\u0632\u0621 \u0645\u0646\u0647 \u0623\u0633\u0627\u0633\u0627\u064b \u0644\u0630\u0644\u0643\u060c \u0623\u0648 \u064a\u0645\u0643\u0646 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u064a\u0647 \u0641\u064a \u0623\u064a \u0639\u0642\u062f \u0623\u0648 \u0627\u0644\u062a\u0632\u0627\u0645 \u0645\u0646 \u0623\u064a \u0646\u0648\u0639. \u0648\u0644\u0646 \u064a\u0641\u0633\u0651\u064e\u0631 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0630\u0643\u0648\u0631 \u0623\u0648 \u0627\u0644\u0630\u064a \u0633\u064a\u062a\u0645 \u0630\u0643\u0631\u0647 \u0645\u0633\u062a\u0642\u0628\u0644\u0627\u064b \u0639\u0644\u0649 \u0623\u0646\u0647 \u0639\u0631\u0636 \u0623\u0648 \u062a\u0648\u0635\u064a\u0629 \u0644\u0628\u064a\u0639 \u0623\u0648 \u0634\u0631\u0627\u0621 \u0623\u064a \u0623\u0648\u0631\u0627\u0642 \u0645\u0627\u0644\u064a\u0629.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u0646\u0636\u0645\u0646 \u0628\u0623\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u0641\u064a\u0647\u0627 \u0633\u0648\u0641 \u062a\u0643\u0648\u0646 \u0645\u062a\u0627\u062d\u0629 \u062f\u0627\u0626\u0645\u0627\u064b \u0623\u0648 \u062f\u0648\u0646 \u0627\u0646\u0642\u0637\u0627\u0639\u060c \u0643\u0645\u0627 \u064a\u0645\u0643\u0646\u0646\u0627\u060c \u062f\u0648\u0646 \u0625\u0634\u0639\u0627\u0631\u060c \u0625\u064a\u0642\u0627\u0641 \u0643\u0644 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0648 \u0623\u064a \u062c\u0632\u0621 \u0645\u0646\u0647\u0627 \u0645\u0624\u0642\u062a\u0627\u064b\u060c \u0623\u0648 \u0646\u0647\u0627\u0626\u064a\u0627\u064b\u060c \u0623\u0648 \u0633\u062d\u0628\u0647\u0627 \u0623\u0648 \u062a\u063a\u064a\u064a\u0631\u0647\u0627\u060c \u0648\u0644\u0646 \u0646\u0643\u0648\u0646 \u0645\u0633\u0626\u0648\u0644\u064a\u0646 \u062a\u062c\u0627\u0647\u0643 \u0641\u064a \u062d\u0627\u0644 \u0643\u0627\u0646\u062a \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u0644\u0623\u064a \u0633\u0628\u0628 \u0648\u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0623\u0648 \u0644\u0623\u064a \u0645\u062f\u0629. \u062a\u062d\u062a\u0641\u0638 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0628\u0627\u0644\u062d\u0642 \u0641\u064a \u0631\u0641\u0636 \u0623\u0648 \u0625\u0644\u063a\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0623\u064a \u0634\u062e\u0635 \u0641\u064a \u0645\u0646\u0635\u0627\u062a\u0647\u0627\u060c \u0648\u0643\u0630\u0644\u0643 \u0625\u0632\u0627\u0644\u0629 \u0623\u064a \u0623\u0648 \u062d\u0638\u0631 \u0623\u064a \u0634\u062e\u0635 \u0645\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0647\u0627\u060c \u062d\u0633\u0628 \u062a\u0642\u062f\u064a\u0631\u0647\u0627 \u0648\u062d\u062f\u0647\u0627\u060c \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0648\u062f\u0648\u0646 \u0625\u0634\u0639\u0627\u0631.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0646 \u064a\u0639\u062a\u0628\u0631 \u0625\u0646\u0647\u0627\u0621 \u062f\u062e\u0648\u0644\u0643 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u0646\u0635\u0627\u062a\u060c \u0628\u0623\u0646\u0647 \u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0623\u064a \u062d\u0642 \u0648\u0644\u0646 \u064a\u0624\u062b\u0631 \u0639\u0644\u0649 \u0623\u064a \u062d\u0642 \u0623\u0648 \u0625\u062c\u0631\u0627\u0621 \u064a\u062d\u0642 \u0641\u064a\u0647 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0645\u0645\u0627\u0631\u0633\u062a\u0647 \u0646\u0638\u0627\u0645\u0627\u064b \u0636\u062f\u0643.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u0646\u0636\u0645\u0646 \u0628\u0623\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u0641\u064a\u0647\u0627 \u0633\u0648\u0641 \u062a\u0643\u0648\u0646 \u0645\u062a\u0627\u062d\u0629 \u062f\u0627\u0626\u0645\u0627\u064b \u0623\u0648 \u062f\u0648\u0646 \u0627\u0646\u0642\u0637\u0627\u0639\u060c \u0643\u0645\u0627 \u064a\u0645\u0643\u0646\u0646\u0627\u060c \u062f\u0648\u0646 \u0625\u0634\u0639\u0627\u0631\u060c \u0625\u064a\u0642\u0627\u0641 \u0643\u0644 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0648 \u0623\u064a \u062c\u0632\u0621 \u0645\u0646\u0647\u0627 \u0645\u0624\u0642\u062a\u0627\u064b \u0623\u0648 \u0646\u0647\u0627\u0626\u064a\u0627\u064b \u0623\u0648 \u0633\u062d\u0628\u0647\u0627 \u0623\u0648 \u062a\u063a\u064a\u064a\u0631\u0647\u0627\u060c \u0648\u0644\u0646 \u0646\u0643\u0648\u0646 \u0645\u0633\u0626\u0648\u0644\u064a\u0646 \u062a\u062c\u0627\u0647\u0643 \u0641\u064a \u062d\u0627\u0644 \u0643\u0627\u0646\u062a \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629 \u0644\u0623\u064a \u0633\u0628\u0628 \u0648\u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0623\u0648 \u0644\u0623\u064a \u0645\u062f\u0629. \u062a\u062d\u062a\u0641\u0638 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0628\u0627\u0644\u062d\u0642 \u0641\u064a \u0631\u0641\u0636 \u0623\u0648 \u0625\u0644\u063a\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0623\u064a \u0634\u062e\u0635 \u0641\u064a \u0645\u0646\u0635\u0627\u062a\u0647\u0627\u060c \u0648\u0643\u0630\u0644\u0643 \u0625\u0632\u0627\u0644\u0629 \u0623\u064a \u0623\u0648 \u062d\u0638\u0631 \u0623\u064a \u0634\u062e\u0635 \u0645\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0647\u0627\u060c \u062d\u0633\u0628 \u062a\u0642\u062f\u064a\u0631\u0647\u0627 \u0648\u062d\u062f\u0647\u0627\u060c \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0648\u062f\u0648\u0646 \u0625\u0634\u0639\u0627\u0631. \u0644\u0646 \u064a\u0639\u062a\u0628\u0631 \u0625\u0646\u0647\u0627\u0621 \u062f\u062e\u0648\u0644\u0643 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u0646\u0635\u0627\u062a\u060c \u0628\u0623\u0646\u0647 \u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0623\u064a \u062d\u0642 \u0648\u0644\u0646 \u064a\u0624\u062b\u0631 \u0639\u0644\u0649 \u0623\u064a \u062d\u0642 \u0623\u0648 \u0625\u062c\u0631\u0627\u0621 \u064a\u062d\u0642 \u0641\u064a\u0647 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0645\u0645\u0627\u0631\u0633\u062a\u0647 \u0646\u0638\u0627\u0645\u0627\u064b \u0636\u062f\u0643.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0624\u062f\u064a \u0628\u0639\u0636 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0625\u0644\u0649 \u0645\u062d\u062a\u0648\u0649 \u0648\u0645\u0648\u0627\u0631\u062f \u0645\u0648\u062c\u0648\u062f\u0629 \u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u062e\u0648\u0627\u062f\u0645 \u063a\u064a\u0631 \u062e\u0627\u0636\u0639\u0629 \u0644\u0633\u064a\u0637\u0631\u0629 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u060c \u0623\u0648 \u0623\u064a \u0645\u0624\u0633\u0633\u0627\u062a \u0623\u062e\u0631\u0649 \u063a\u064a\u0631 \u062a\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633. \u0648\u064a\u064f\u0634\u0627\u0631 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0648\u0623\u064a \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u0645\u0642\u062f\u0645\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644\u0647\u0627 \u0628\u0640&apos;\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b&apos;. \u062a\u0639\u062a\u0628\u0631 \u0623\u064a \u0631\u0648\u0627\u0628\u0637 \u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0645\u0642\u062f\u0645\u0629 \u0644\u0643 \u0628\u063a\u0631\u0636 \u0627\u0644\u062a\u0633\u0647\u064a\u0644 \u0641\u0642\u0637. \u0644\u0627 \u062a\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0623\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0639\u0646 \u0635\u062d\u0629 \u0623\u0648 \u0645\u062d\u062a\u0648\u0649 \u0623\u0648 \u0623\u064a \u062e\u0627\u0635\u064a\u0629 \u0623\u062e\u0631\u0649 \u0644\u0623\u064a \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b\u060c \u0633\u0648\u0627\u0621\u064b \u0643\u0627\u0646\u062a \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0645 \u0644\u0627\u060c \u0648\u062a\u062e\u0644\u064a \u0623\u064a \u0648\u0643\u0644 \u0645\u0646 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0647\u0627 \u0639\u0646\u0647\u0627\u060c \u0648\u0639\u0646 \u0623\u064a \u062a\u0628\u0639\u0627\u062a \u0644\u0642\u0631\u0627\u0631\u0643 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0625\u0646\u0643 \u062a\u0642\u0631 \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0645\u0627 \u064a\u0644\u064a:<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u064a\u062d\u0642 \u0644\u0643 \u0631\u0641\u0639 \u062f\u0639\u0648\u0649 \u0623\u0648 \u062a\u0642\u062f\u064a\u0645 \u0645\u0637\u0627\u0644\u0628\u0629 \u0636\u062f \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\u060c \u0623\u0648 \u0634\u0631\u0643\u0627\u0626\u0647\u0627\u060c \u0623\u0648 \u0645\u0648\u0638\u0641\u064a\u0647\u0627\u060c \u0623\u0648 \u0648\u0643\u0644\u0627\u0626\u0647\u0627\u060c \u0623\u0648 \u0645\u0642\u0627\u0648\u0644\u064a\u0647\u0627\u060c \u0623\u0648 \u0645\u0648\u0631\u062f\u064a\u0647\u0627\u060c \u0623\u0648 \u0623\u064a\u064d \u0645\u0646\u0647\u0645 \u0648 \u062a\u0643\u0648\u0646 \u0646\u0627\u0634\u0626\u0629 \u0639\u0646 \u0623\u0648 \u0645\u0628\u0646\u064a\u0629 \u0639\u0644\u0649 \u0634\u0631\u0627\u0626\u0643 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0645\u0648\u0627\u0631\u062f \u0623\u0648 \u0645\u0646\u062a\u062c\u0627\u062a \u0623\u0648 \u062e\u062f\u0645\u0627\u062a \u0645\u0646 \u062e\u0644\u0627\u0644 \u0623\u064a\u064d \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u064a\u062d\u0642 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0623\u0648 \u0645\u0642\u062f\u0645 \u0627\u0644\u062e\u062f\u0645\u0629 \u0644\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u062a\u0642\u064a\u064a\u062f \u0623\u0648 \u0625\u0646\u0647\u0627\u0621 \u062f\u062e\u0648\u0644\u0643 \u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0641\u064a \u0623\u064a \u0648\u0642\u062a.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u064a\u062e\u0636\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0623\u064a\u064d \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0644\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645 \u0648\u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u062a\u064a \u0642\u062f \u062a\u0641\u0631\u0636\u0647\u0627 \u062a\u0644\u0643 \u0627\u0644\u062e\u062f\u0645\u0629 \u0643\u0634\u0631\u0637 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0647\u0627\u060c \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u062a\u0642\u064a\u062f \u0628\u062c\u0645\u064a\u0639 \u062a\u0644\u0643 \u0627\u0644\u0642\u064a\u0648\u062f.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0648\u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0624\u062f\u064a \u0628\u0639\u0636 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0625\u0644\u0649 \u0645\u062d\u062a\u0648\u0649 \u0648\u0645\u0648\u0627\u0631\u062f \u0645\u0648\u062c\u0648\u062f\u0629 \u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u062e\u0648\u0627\u062f\u0645 \u063a\u064a\u0631 \u062e\u0627\u0636\u0639\u0629 \u0644\u0633\u064a\u0637\u0631\u0629 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\u060c \u0623\u0648 \u0623\u064a \u0645\u0624\u0633\u0633\u0627\u062a \u0623\u062e\u0631\u0649 \u063a\u064a\u0631 \u062a\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633. \u0648\u064a\u064f\u0634\u0627\u0631 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0648\u0623\u064a \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u0645\u0642\u062f\u0645\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644\u0647\u0627 \u0628\u0640&apos;\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b&apos;. \u062a\u0639\u062a\u0628\u0631 \u0623\u064a \u0631\u0648\u0627\u0628\u0637 \u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0645\u0642\u062f\u0645\u0629 \u0644\u0643 \u0628\u063a\u0631\u0636 \u0627\u0644\u062a\u0633\u0647\u064a\u0644 \u0641\u0642\u0637.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u062a\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0623\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0639\u0646 \u0635\u062d\u0629 \u0623\u0648 \u0645\u062d\u062a\u0648\u0649 \u0623\u0648 \u0623\u064a \u062e\u0627\u0635\u064a\u0629 \u0623\u062e\u0631\u0649 \u0644\u0623\u064a \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b\u060c \u0633\u0648\u0627\u0621\u064b \u0643\u0627\u0646\u062a \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0645 \u0644\u0627\u060c \u0648\u062a\u062e\u0644\u064a \u0623\u064a \u0648\u0643\u0644 \u0645\u0646 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0647\u0627 \u0639\u0646\u0647\u0627\u060c \u0648\u0639\u0646 \u0623\u064a \u062a\u0628\u0639\u0627\u062a \u0644\u0642\u0631\u0627\u0631\u0643 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0645\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0625\u0646\u0643 \u062a\u0642\u0631 \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0645\u0627 \u064a\u0644\u064a:<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0648\u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0641\u064a\u0631\u0648\u0633\u0627\u062a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u0646\u0642\u0631 \u0623\u0648 \u0646\u0636\u0645\u0646 \u0623\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0633\u0648\u0641 \u062a\u0643\u0648\u0646 \u0622\u0645\u0646\u0629 \u0623\u0648 \u062e\u0627\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u0641\u064a\u0631\u0648\u0633\u0627\u062a \u0623\u0648 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629. \u0623\u0646\u062a \u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u062a\u0647\u064a\u0626\u0629 \u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u0648\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0643\u0645\u0628\u064a\u0648\u062a\u0631\u060c \u0648\u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0644\u062f\u064a\u0643 \u0645\u0646 \u0623\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627. \u0648\u064a\u0646\u0628\u063a\u064a \u0639\u0644\u064a\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u062d\u062f \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0645\u0646 \u0627\u0644\u0641\u064a\u0631\u0648\u0633\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0641\u064a\u0631\u0648\u0633\u0627\u062a\u060c \u0623\u062d\u0635\u0646\u0629 \u0637\u0631\u0648\u0627\u062f\u0629\u060c \u0627\u0644\u062f\u064a\u062f\u0627\u0646\u060c \u0627\u0644\u0642\u0646\u0627\u0628\u0644 \u0627\u0644\u0645\u0646\u0637\u0642\u064a\u0629 \u0623\u0648 \u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u062a\u064a \u062a\u0639\u062a\u0628\u0631 \u0636\u0627\u0631\u0629 \u062a\u0642\u0646\u064a\u0627\u064b. \u0648\u064a\u062c\u0628 \u0623\u0644\u0627 \u062a\u062d\u0627\u0648\u0644 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u0635\u0631\u062d \u0628\u0647 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0623\u0648 \u0627\u0644\u062e\u0627\u062f\u0645 \u0627\u0644\u0630\u064a \u062a\u0645 \u062a\u062e\u0632\u064a\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0639\u0644\u064a\u0647\u0627 \u0623\u0648 \u0623\u064a \u062e\u0627\u062f\u0645 \u0623\u0648 \u0643\u0645\u0628\u064a\u0648\u062a\u0631 \u0623\u0648 \u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062a\u0635\u0644\u0629 \u0628\u0645\u0646\u0635\u0627\u062a\u0646\u0627. \u0648\u0628\u0645\u062e\u0627\u0644\u0641\u0629 \u0643\u0644 \u0645\u0627 \u0633\u0628\u0642\u060c \u0641\u0623\u0646\u062a \u062a\u0631\u062a\u0643\u0628 \u062c\u0631\u064a\u0645\u0629 \u0628\u0645\u0648\u062c\u0628 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0648\u062f\u0648\u0644\u064d \u0623\u062e\u0631\u0649. \u0648\u0633\u0648\u0641 \u0646\u0642\u0648\u0645 \u0628\u0625\u0628\u0644\u0627\u063a \u0633\u0644\u0637\u0627\u062a \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062e\u062a\u0635\u0629 \u0628\u0623\u064a \u0645\u062e\u0627\u0644\u0641\u0629 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0646\u0648\u0639 \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0645\u0639\u0647\u0627 \u0628\u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0647\u0648\u064a\u062a\u0643. \u0648\u0641\u064a \u062d\u0627\u0644 \u0627\u0631\u062a\u0643\u0627\u0628 \u0647\u0630\u0647 \u0627\u0644\u0645\u062e\u0627\u0644\u0641\u0629\u060c \u0633\u064a\u062a\u0648\u0642\u0641 \u062d\u0642\u0643 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0641\u0648\u0631\u0627\u064b.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0644\u0627 \u0646\u0642\u0631 \u0623\u0648 \u0646\u0636\u0645\u0646 \u0623\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0633\u0648\u0641 \u062a\u0643\u0648\u0646 \u0622\u0645\u0646\u0629 \u0645\u0646 \u0627\u0644\u0647\u062c\u0645\u0627\u062a \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0627\u0644\u062a\u064a \u0642\u062f \u062a\u062d\u0627\u0648\u0644 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0648 \u0627\u0644\u0627\u0633\u062a\u064a\u0644\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0639\u0644\u064a\u0647\u0627. \u0644\u0630\u0627 \u0625\u0646 \u062f\u062e\u0648\u0644\u0643 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u062a\u0642\u062f\u064a\u0645 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a\/ \u0628\u064a\u0627\u0646\u0627\u062a \u0639\u0644\u064a\u0647\u0627\u060c \u0633\u0648\u0641 \u064a\u0643\u0648\u0646 \u0639\u0644\u0649 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0643 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0625\u0639\u0641\u0627\u0621 \u0645\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0627\u062a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u063a\u064a\u0631 \u0645\u0633\u0624\u0648\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u062d\u062f \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0641\u064a \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0639\u0646 \u062f\u062e\u0648\u0644\u0643 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0647\u0627. \u0646\u062d\u0646 \u0644\u0627 \u0646\u062a\u062d\u0645\u0644 \u0623\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0648\u0644\u0627 \u0646\u0642\u062f\u0651\u0645 \u0623\u064a \u0625\u0642\u0631\u0627\u0631\u0627\u062a \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u062f\u0642\u0629 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062a\u064f\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639. \u0644\u0630\u0644\u0643\u060c \u064a\u062a\u0645 \u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0648\u0627\u062f \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0643\u0645\u0627 \u0647\u064a\u060c \u0648\u0646\u062e\u0644\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0646\u0627 \u0635\u0631\u0627\u062d\u0629\u064b \u0645\u0646 \u0623\u064a \u0636\u0645\u0627\u0646\u0627\u062a\u064d \u0636\u0645\u0646\u064a\u0629 \u0623\u0648 \u0635\u0631\u064a\u062d\u0629 \u0644\u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u0639\u0631\u0636 \u0641\u064a \u0627\u0644\u0633\u0648\u0642 \u0623\u0648 \u0627\u0644\u0645\u0644\u0627\u0621\u0645\u0629 \u0644\u063a\u0631\u0636 \u0645\u0639\u064a\u0651\u0646 \u0623\u0648 \u0639\u062f\u0645 \u0627\u0644\u062a\u0639\u062f\u064a \u0639\u0644\u0649 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0645\u0627\u062f\u0629. \u0648\u0644\u0646 \u0646\u0643\u0648\u0646 \u0645\u0633\u0624\u0648\u0644\u064a\u0646 \u0628\u0623\u064a \u062d\u0627\u0644 \u0645\u0646 \u0627\u0644\u0623\u062d\u0648\u0627\u0644 \u062a\u062c\u0627\u0647\u0643 \u0623\u0648 \u062a\u062c\u0627\u0647 \u0623\u064a \u0634\u062e\u0635\u060c \u0633\u0648\u0627\u0621\u064b \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u062a\u0639\u0627\u0642\u062f\u064a\u0629 \u0623\u0648 \u062a\u0642\u0635\u064a\u0631\u064a\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643\u060c \u0639\u0646 \u0623\u064a \u062e\u0633\u0627\u0631\u0629\u060c \u0623\u0648 \u0645\u0633\u0624\u0648\u0644\u064a\u0629\u060c \u0623\u0648 \u062a\u0643\u0644\u0641\u0629\u060c \u0623\u0648 \u0636\u0631\u0631\u060c \u0623\u0648 \u0625\u0635\u0627\u0628\u0629 \u0623\u062e\u0631\u0649 \u0623\u064a\u0627 \u0643\u0627\u0646 \u0646\u0648\u0639\u0647\u0627\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u062a\u0628\u0639\u064a\u0629\u060c \u0623\u0648 \u0627\u0644\u0639\u0631\u0636\u064a\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0623\u0648 \u0627\u0644\u062e\u0627\u0635\u0629 \u0623\u0648 \u0627\u0644\u0639\u0642\u0627\u0628\u064a\u0629\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0623\u0631\u0628\u0627\u062d \u0627\u0644\u0645\u0641\u0642\u0648\u062f\u0629\u060c \u0648\u062a\u0639\u0637\u0644 \u0627\u0644\u0639\u0645\u0644\u060c \u0648\u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0623\u0648 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0639\u0644\u0649 \u0623\u064a \u0623\u0646\u0638\u0645\u0629 \u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643\u060c \u0648\u0627\u0644\u062a\u064a \u062a\u0643\u0648\u0646 \u0646\u0627\u062a\u062c\u0629 \u0639\u0646:<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0623\u064a \u062f\u062e\u0648\u0644 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649\u060c \u0623\u0648 \u0646\u0638\u0631\u0627\u064b \u0644\u0623\u064a \u0645\u0634\u0627\u0643\u0644 \u0627\u062a\u0635\u0627\u0644 \u0642\u062f \u062a\u062d\u062f\u062b \u0641\u064a \u0645\u0642\u0631\u0643\u060c \u062d\u062a\u0649 \u0641\u064a \u062d\u0627\u0644 \u0644\u0648 \u062a\u0645 \u0625\u062e\u0637\u0627\u0631\u0643 \u0628\u0627\u062d\u062a\u0645\u0627\u0644\u064a\u0629 \u0648\u0642\u0648\u0639\u0647\u0627. \u062a\u0639\u0630\u0631 \u0645\u0646 \u0642\u0650\u0628\u064e\u0644\u0643 \u0641\u064a \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0644\u0623\u064a \u0633\u0628\u0628 \u0643\u0627\u0646. \u0623\u064a \u0647\u062c\u0648\u0645 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0623\u064a \u0633\u0631\u0642\u0629 \u0623\u0648 \u0641\u0642\u062f\u0627\u0646 \u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0646 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649.&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0623\u064a \u0641\u064a\u0631\u0648\u0633\u060c \u0623\u0648 \u0647\u062c\u0648\u0645 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u064a\u0647\u062f\u0641 \u0625\u0644\u0649 \u062d\u062c\u0628 \u0627\u0644\u062e\u062f\u0645\u0629\u060c \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0636\u0627\u0631\u0629 \u062a\u0642\u0646\u064a\u0627\u064b \u0627\u0644\u062a\u064a \u0642\u062f \u062a\u0635\u064a\u0628 \u0623\u062c\u0647\u0632\u0629 \u0623\u0648 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0643\u0645\u0628\u064a\u0648\u062a\u0631 \u0644\u062f\u064a\u0643\u060c \u0623\u0648 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0648 \u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u062f \u0645\u0633\u062c\u0644\u0629 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0646\u062a\u064a\u062c\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0623\u0648 \u062a\u062d\u0645\u064a\u0644\u0643 \u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u0639\u0644\u064a\u0647\u0627\u060c \u0623\u0648 \u0639\u0644\u0649 \u0623\u064a \u062a\u0637\u0628\u064a\u0642\u060c \u0623\u0648 \u0645\u0648\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u0623\u0648 \u0645\u062d\u062a\u0648\u0649 \u0645\u0631\u062a\u0628\u0637 \u0628\u0647\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062f\u0648\u0646 \u0627\u0644\u0625\u062e\u0644\u0627\u0644 \u0628\u0623\u064a\u064d \u0645\u0645\u0627 \u0633\u0628\u0642\u060c \u0648\u0625\u0644\u0649 \u0623\u0642\u0635\u0649 \u062d\u062f \u062a\u0633\u0645\u062d \u0628\u0647 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627\u060c \u062a\u0639\u0641\u0649 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0645\u0646 \u0623\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0628\u0627\u0644\u0646\u064a\u0627\u0628\u0629 \u0639\u0646\u0647\u0627 \u0648\u0639\u0646 \u0623\u064a\u064d \u0645\u0646 \u0627\u0644\u0643\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0627\u0628\u0639\u0629 \u0644\u0647\u0627 \u062a\u062c\u0627\u0647 \u0623\u064a \u0645\u0637\u0627\u0644\u0628\u0627\u062a \u0623\u0648 \u0645\u0633\u0627\u0626\u0644 \u062a\u0646\u0634\u0623 \u0628\u0645\u0648\u062c\u0628 \u0623\u0648 \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647. \u0648\u0644\u0627 \u064a\u062d\u0642 \u0644\u0643 \u0627\u0644\u062a\u0642\u062f\u0645 \u0628\u0645\u0637\u0627\u0644\u0628\u0629 \u0623\u0648 \u0631\u0641\u0639 \u062f\u0639\u0648\u0649 \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0636\u062f \u0623\u064a \u0643\u064a\u0627\u0646 \u062a\u0627\u0628\u0639 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0625\u0644\u0649 \u0627\u0644\u062d\u062f \u0627\u0644\u0630\u064a \u0644\u0627 \u064a\u0648\u062c\u062f \u0641\u064a\u0647 \u0623\u064a \u0639\u0644\u0627\u0642\u0629 \u062a\u0639\u0627\u0642\u062f\u064a\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u064a\u0646\u0643 \u0648\u0628\u064a\u0646 \u062a\u0644\u0643 \u0627\u0644\u0643\u064a\u0627\u0646\u0627\u062a. \u0648\u0644\u0627 \u064a\u062c\u0648\u0632 \u0644\u0643 \u0627\u0644\u062a\u0642\u062f\u0645 \u0628\u0645\u0637\u0627\u0644\u0628\u0629 \u0623\u0648 \u0631\u0641\u0639 \u062f\u0639\u0648\u0649 \u0636\u062f \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0625\u0644\u0627 \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0623\u0646\u0647\u0627 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0630\u064a \u062a\u0639\u0627\u0642\u062f\u062a \u0645\u0639\u0647 \u0628\u0645\u0648\u062c\u0628 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647.&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0623\u0646\u062a \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u062d\u0645\u0627\u064a\u062a\u0646\u0627 \u0648\u0627\u0644\u062f\u0641\u0627\u0639 \u0639\u0646\u0627 \u0636\u062f \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0646 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u062a\u064a \u062a\u0632\u0648\u062f\u0646\u0627 \u0628\u0647\u0627. \u0644\u0646 \u0646\u0643\u0648\u0646 \u0645\u0633\u0624\u0648\u0644\u064a\u0646 \u0639\u0646 \u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u064a\u062c\u0628 \u062a\u0642\u062f\u064a\u0645 \u0623\u064a \u0645\u0637\u0627\u0644\u0628\u0629 \u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643 \u0628\u0645\u0648\u062c\u0628 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 \u062e\u0644\u0627\u0644 \u0645\u062f\u0629 \u0644\u0627 \u062a\u0632\u064a\u062f \u0639\u0646 (12) \u0634\u0647\u0631\u0627\u064b \u0645\u0646 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0641\u0639\u0644 \u0623\u0648 \u0627\u0644\u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0630\u064a \u064a\u0632\u0639\u0645 \u0623\u0646\u0647 \u062a\u0633\u0628\u0628 \u0641\u064a \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u062d\u0643\u0645 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647\u060c \u0648\u064a\u0643\u0648\u0646 \u0644\u0644\u0645\u062d\u0627\u0643\u0645 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0635 \u0627\u0644\u062d\u0635\u0631\u064a \u0644\u0623\u064a \u0645\u0646\u0627\u0632\u0639\u0627\u062a \u0642\u062f \u062a\u0646\u0634\u0623 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062e\u0635\u0648\u0635.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&amp;nbsp;<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062a\u0645\u062b\u0644 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0628\u064a\u0646\u0643 \u0648\u0628\u064a\u0646 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639\u060c \u0648\u062a\u0633\u0628\u0642 \u0623\u064a \u0625\u062e\u0644\u0627\u0621 \u0645\u0633\u0626\u0648\u0644\u064a\u0629 \u0648\/\u0623\u0648 \u0625\u062e\u0637\u0627\u0631 \u0645\u0631\u062a\u0628\u0637 \u0628\u0623\u064a \u0627\u062a\u0635\u0627\u0644 \u0648\/\u0623\u0648 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0631\u062f\u0629 \u0645\u0646\u0643<\/h2>","en":"<p>Welcome to the Al Majdiah Residence website (almajdiah.com and\/or its sub-sites, the &apos;Site&apos;).<\/p><p>These terms and conditions of use (\u201cTerms of Use\u201d) are entered into between you and Al Majidiya Residence (\u201cAl Majidiya\u201d, \u201cwe\u201d, \u201cus\u201d).<\/p><p>Al Majidiya Residence offers you the Site, including all information, tools and services available from the Site, conditional on your acceptance of these Terms of Use and our Privacy Policy.<\/p><p>The information obtained through this website does not alter, amend or replace the terms or conditions of any other agreement you may have with us or any of its affiliates or subsidiaries.<\/p><p>These terms of use (together with any documents referred to herein) set out the terms on which you may access and make use of, whether as a visitor or a registered user:<\/p><p>&amp;nbsp;Our website<\/p><p>Our mobile application<\/p><p>Our pages on social media platforms<\/p><p>Our other technical platforms and whatever their form.<\/p><p>(together referred to as &apos;our platforms&apos; or &apos;the platforms&apos;).<\/p><p>&amp;nbsp;<\/p><p>These Terms of Use are a legal document that sets out the rights and obligations between you and Al Majidiya Residence, and should be read in conjunction with our Privacy Policy.<\/p><p>Our Privacy Policy sets out the terms on which we process any personal data we collect from you or that you provide to us.<\/p><p>Please read the Terms of Use and Privacy Policy carefully before you start using our Platforms, as these documents will apply to your use of those Platforms, including accessing, browsing, and registering on them.<\/p><p>By using our Platforms, you acknowledge your acceptance of, and agree to abide by, our Terms of Use and Privacy Policy. If you do not agree to our terms of use and privacy policy, please do not use our platforms or access the site.<\/p><p>&amp;nbsp;<\/p><p>Age restrictions<\/p><p>If you are under 18, you may use our Platforms only under the supervision of a person exercising parental authority or guardianship over you (i.e., a parent or guardian).<\/p><p>&amp;nbsp;<\/p><p>Use of content on the platforms<\/p><p>Limited License: You may access, copy, download and print Content on the Platforms for your personal, non-commercial use, provided that you do not modify or delete any copyright, trademark or other proprietary notices appearing on the Content you access, copy or download Or print it. Any other use of the content on our platforms, including, but not limited to, modifying, altering, creating derivative works, distributing, transmitting, playing, broadcasting, publishing, uploading, storing for subsequent use, licensing or sublicensing in whole or in part is prohibited in any way. method without our prior written consent. You hereby agree to abide by all additional restrictions displayed on our Platforms as may be updated from time to time.<\/p><p>This limited license referred to above is revocable at any time and in Al Majidiya Residence&apos;s sole discretion. Al Majidiya Residence does not warrant or represent that your use of content on the Platforms does not infringe the rights of third parties not affiliated with Al Majidiya Residence.<\/p><p>You may not use the information provided on our platforms for any unauthorized, illegal or inappropriate purposes, including but not limited to marketing, sending spam, harassing, slanderous or inflammatory messages, or to promote unauthorized business or activities. illegality or any other activity that threatens the integrity or performance of any other person or entity&apos;s computer system or violates generally accepted standards of Internet use. You may not use any equipment or software intended to damage or interfere with the proper working of the Platforms or secretly intercept any system, data or personal information from the Platforms. You also agree not to disrupt or attempt to disrupt the operation of the Site in any way. By using the Site, you agree not to disrupt or attempt to disrupt the operation of the Site in any way.<\/p><p>By using our Platforms, you warrant that you own any data, information or materials (\u201cMaterials\u201d) that you provide to us. You also warrant and represent that you are entitled to post comments and materials on our website and that you have all necessary licenses and consents to do so. No comments or materials will contain any libelous, defamatory, offensive, indecent or otherwise unlawful content which would be an invasion of privacy. We do not encourage you to submit or post any information that you consider proprietary or confidential on the Site. We will assume that any information you submit or post is not confidential and does not infringe any third party intellectual property rights. You also grant us under these Terms of Use an unrestricted, irrevocable license to use, reproduce, display, perform, modify, transmit and distribute the Materials, and you agree that we are free to use any ideas, concepts, know-how or techniques that you transmit or post for any purpose.<\/p><p>&amp;nbsp;<\/p><p>Third Party Services<\/p><p>Some links on our platforms lead to content and resources located on websites and servers that are not under the control of Al Majidiya Residence, or any other organizations not affiliated with Al Majidiya Residence. These websites and resources and any products and services offered through them are referred to as &apos;Third Party Services&apos;. Any links to third-party services are provided to you for convenience only. Al Majidiya Residence assumes no responsibility for, and disclaims any and all liability for, the accuracy, content or other feature of any Third Party Services, whether or not linked to our Platforms, and for any consequences of your decision to use any Third Party Services.<\/p><p>You acknowledge and agree to the following:<\/p><p>You have no right to file a claim or claim against Al Majidiya Residence, its partners, employees, agents, contractors, suppliers, or any of them arising out of or based on your purchase or use of resources, products or services through any of the Services. third party.<\/p><p>Al Majidiya Residence or its Third Party Service Provider has the right to restrict or terminate your access to Third Party Services at any time.<\/p><p>Your use of any third-party services through our Platforms is subject to the terms, conditions and restrictions that such service may impose as a condition of your use of it, and you agree to abide by all such restrictions.<\/p><p>&amp;nbsp;<\/p><p>Amendments and updates to the Terms of Use<\/p><p>Some links on our platforms lead to content and resources located on websites and servers that are not under the control of Al Majidiya Residence, or any other organizations not affiliated with Al Majidiya Residence. These websites and resources and any products and services offered through them are referred to as &apos;Third Party Services&apos;. Any links to third-party services are provided to you for convenience only.<\/p><p>Al Majidiya Residence assumes no responsibility for, and disclaims any and all liability for, the accuracy, content or other feature of any Third Party Services, whether or not linked to our Platforms, and for any consequences of your decision to use any Third Party Services.<\/p><p>You acknowledge and agree to the following:<\/p><p>Changes and updates to the platforms.<\/p><p>&amp;nbsp;<\/p><p>Viruses<\/p><p>We do not represent or warrant that our Platforms will be secure or free of viruses or bugs. You are responsible for configuring your information technology, computer software, and operating system in order to access our Platforms. You should use one of your own antivirus programs.<\/p><p>Viruses, Trojan horses, worms, logic bombs or other material deemed technically harmful. You must not attempt to gain unauthorized access to our Platforms, the server on which our Platforms are stored or any server, computer or database connected to our Platforms. By violating all of the above, you are committing a crime under the laws of the Kingdom of Saudi Arabia and other countries. We will inform the relevant system enforcement authorities of any violation of this type and coordinate with them to reveal your identity. If you commit this violation, your right to use our platforms will cease immediately.<\/p><p>We do not represent or warrant that our Platforms will be secure from cyber-attacks that may attempt to disrupt access to our Platforms or seize data on our Platforms. Therefore, if you access our platforms and provide any information\/data on them, you will be entirely at your own risk.<\/p><p>&amp;nbsp;<\/p><p>Exemption from responsibilities<\/p><p>Al Majidiya Residence is not responsible, to the extent permitted by the laws of the Kingdom of Saudi Arabia, for your access to and use of our platforms. We assume no responsibility and make no representations as to the accuracy of any information displayed on the Site. Therefore, all materials and information are provided \"as is\" and we expressly disclaim any express or implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property related to such material. In no event will we be liable to you or to any person, whether in contract, tort or otherwise, for any loss, liability, cost, damage or other injury of any kind, including consequential or incidental damages. or indirect, special or punitive damages, including lost profits, business interruption, loss of programs or data on any information processing systems or otherwise, which are caused by:<\/p><p>Any access to or use of the Platforms or Content, or due to any communication problems that may occur at your premises, even if you have been advised of their possibility. You are unable to access the Platforms or Content for any reason. Any cyber attack on the Platforms or Content, including any theft or loss of data from the Platforms or Content.<\/p><p>Any virus, denial-of-service attack, or other technologically harmful material that may infect your computer hardware, software, data or other proprietary material due to your use of the Platforms or Content or to your downloading of any Content on it, or on any Application. , website, or related content.<\/p><p>Without prejudice to any of the foregoing, and to the maximum extent permitted by applicable regulations, Al Majidiya Residences hereby releases itself from any liability on behalf of itself and any of its affiliated entities for any claims or matters arising under or in connection with these terms of use. You have no right to make a claim or bring a claim in connection with the Platforms or Content against any entity affiliated with Al Majidiya Residences to the extent that there is no direct contractual relationship between you and those entities. You may not make a claim or file a claim against Al Majidiya Residence except on the basis that it is the party with whom you have contracted under these Terms of Use.<\/p><p>You agree to protect and defend us against all claims arising from materials you provide to us. We will not be responsible for any content appearing on your website.<\/p><p>Any claim relating to the Platforms, Content or otherwise under these Terms of Use must be brought no more than (12) months from the date of the act or negligence that allegedly gave rise to the claim.<\/p><p>&amp;nbsp;<\/p><p>The system in place<\/p><p>The laws of the Kingdom of Saudi Arabia govern these terms of use, and the Saudi courts have exclusive jurisdiction for any disputes that may arise in this regard.<\/p><p>&amp;nbsp;<\/p><p>Entire agreement<\/p><p>These Terms of Use represent the entire agreement between you and Al Majidiya Residence for the use of this website, and precede any disclaimer and\/or notice associated with any communication and\/or information received from you.<\/p>"},"privacy_policy":{"ar":"<h2>\u0623\u0647\u0644\u0627 \u0628\u0643\u0645 \u0641\u064a \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\u060c \u062a\u0644\u062a\u0632\u0645 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0628\u062a\u0642\u062f\u064a\u0645 \u0623\u0641\u0636\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0644\u0643\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u060c \u0648\u064a\u0634\u0645\u0644 \u0630\u0644\u0643 \u0627\u062d\u062a\u0631\u0627\u0645 \u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u062a\u062e\u0627\u0630 \u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u062f\u0627\u0628\u064a\u0631 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u062d\u0645\u0627\u064a\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0628\u064a\u0627\u0646\u0627\u062a\u0647\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0641\u0642\u064b\u0627 \u0644\u0644\u0648\u0627\u0626\u062d \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. <\/h2><h2>\u0646\u0642\u062f\u0645 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0647\u0630\u0647 \u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u0627 \u0644\u064a\u0645\u0643\u0646\u0647\u0645 \u0641\u0647\u0645 \u0643\u064a\u0641\u064a\u0629 \u0645\u0639\u0627\u0644\u062c\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u0627 \u0648\u062c\u0645\u0639\u0647\u0627 \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0648\u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627 \u0648\u062d\u0645\u0627\u064a\u062a\u0647\u0627 \u0639\u0646\u062f \u0632\u064a\u0627\u0631\u062a\u0647\u0645 \u0644\u0645\u0648\u0642\u0639\u0646\u0627 \u0648\u0639\u0646\u062f \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0645 \u0644\u0643\u0627\u0641\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062c\u0648\u0627\u0644 \u0648\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0627\u0644\u0623\u062e\u0631\u0649 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0647\u0627 \u0648\u0627\u0644\u062a\u064a \u0642\u062f \u062a\u062a\u0637\u0644\u0628 \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0623\u064a \u0634\u0643\u0644&amp;nbsp;(\u0648\u064a\u064f\u0634\u0627\u0631 \u0625\u0644\u064a\u0647\u0627 \u0645\u0639\u0627\u064b \u0628\u0640 \"\u0645\u0646\u0635\u0627\u062a\u0646\u0627\" \u0623\u0648 \"\u0627\u0644\u0645\u0646\u0635\u0627\u062a\"). \u064a\u0631\u062c\u0649 \u0642\u0631\u0627\u0621\u0629 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0647\u0630\u0647 \u0628\u0639\u0646\u0627\u064a\u0629 \u0644\u0641\u0647\u0645 \u0646\u0647\u062c\u0646\u0627 \u0648\u0645\u0645\u0627\u0631\u0633\u0627\u062a\u0646\u0627 \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u0628\u064a\u0627\u0646\u0627\u062a\u0643.<\/h2><h2>\u064a\u0646\u0628\u063a\u064a \u0623\u0646 \u062a\u064f\u0642\u0631\u0623 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0647\u0630\u0647 \u0645\u0639 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627 \u0648\u0623\u064a \u0648\u062b\u0627\u0626\u0642 \u0623\u062e\u0631\u0649 \u064a\u0634\u0627\u0631 \u0625\u0644\u064a\u0647\u0627. (\u0625\u0646 \u0648\u062c\u062f\u062a).<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0643\u064a\u0641 \u0646\u062c\u0645\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0646\u0633\u062a\u062e\u062f\u0645\u0647\u0627\u061f<\/h2><h2>\u0646\u0642\u0648\u0645 \u0628\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0648 \u062c\u0645\u0639\u0647\u0627 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0641\u0642\u0637 \u062d\u0633\u0628\u0645\u0627 \u062a\u0642\u062a\u0636\u064a\u0647 \u0627\u0644\u0636\u0631\u0648\u0631\u0629 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u0639\u0642\u0648\u0644\u0629 \u0644\u0636\u0645\u0627\u0646 \u062a\u0648\u0641\u064a\u0631 \u0623\u0641\u0636\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u0627. <\/h2><h2>\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c \u0642\u062f \u062a\u062a\u0637\u0644\u0628 \u0628\u0639\u0636 \u062e\u062f\u0645\u0627\u062a\u0646\u0627 \u0623\u0646 \u062a\u0642\u0648\u0645 \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0648\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u0623\u0648 \u062a\u0642\u062f\u064a\u0645 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0627\u0644\u0634\u062e\u0635\u064a\u0629\u060c \u0648\u0641\u064a \u0645\u062b\u0644 \u0647\u0630\u0647 \u0627\u0644\u0638\u0631\u0648\u0641 \u0642\u062f \u0646\u0637\u0644\u0628 \u0645\u0646\u0643 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062b\u0644 \u0627\u0633\u0645\u0643 \u0648\u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0648\u0631\u0642\u0645 \u0647\u0627\u062a\u0641\u0643.<\/h2><h2>\u0645\u0646 \u062e\u0644\u0627\u0644 \u062a\u0642\u062f\u064a\u0645 \u0647\u0630\u0647 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0641\u0625\u0646\u0643 \u062a\u0648\u0627\u0641\u0642\u060c \u0648\u0641\u0642 \u0627\u0644\u062d\u062f \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0628\u0645\u0648\u062c\u0628 \u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627\u060c&amp;nbsp;\u0639\u0644\u0649 \u0623\u0646\u0647 \u064a\u062c\u0648\u0632 \u0644\u0646\u0627 \u0645\u0627 \u064a\u0644\u064a:<\/h2><h2>\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u062a\u0632\u0648\u064a\u062f\u0643 \u0628\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0637\u0644\u0628\u0647\u0627 \u0645\u0646\u0627.<\/h2><h2>&amp;nbsp;\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0639 \u0645\u0642\u062f\u0645\u064a \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0633\u0648\u0627\u0621 \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0623\u0648 \u062e\u0627\u0631\u062c\u0647\u0627.<\/h2><h2>&amp;nbsp;\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062e\u0627\u0631\u062c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<\/h2><h2>&amp;nbsp;\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u0631\u062f \u0639\u0644\u0649 \u0623\u0633\u0626\u0644\u062a\u0643 \u0648\u062a\u0639\u0644\u064a\u0642\u0627\u062a\u0643 \u0648\u0637\u0644\u0628\u0627\u062a\u0643.<\/h2><h2>&amp;nbsp;\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0625\u0634\u0639\u0627\u0631\u0643 \u0628\u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0637\u0631\u0623 \u0639\u0644\u0649 \u0625\u062d\u062f\u0649 \u0623\u0648 \u062c\u0645\u064a\u0639 \u0645\u0646\u0635\u0627\u062a\u0646\u0627.<\/h2><h2>&amp;nbsp;\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0646\u0642\u062f\u0645\u0647\u0627.<\/h2><h2>&amp;nbsp;\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0628\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a\u0646\u0627 \u0628\u0645\u0648\u062c\u0628 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u0627\u0631\u064a\u0629 \u0627\u0644\u0645\u0641\u0639\u0648\u0644.<\/h2><h2>&amp;nbsp;\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0636\u0645\u0627\u0646 \u0623\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u064a\u064f\u0639\u0631\u0636 \u0628\u0623\u0641\u0636\u0644 \u0637\u0631\u064a\u0642\u0629 \u0641\u0639\u0627\u0644\u0629 \u0644\u0643 \u0648 \u0644\u062c\u0647\u0627\u0632\u0643 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0645\u0627 \u0647\u064a \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0646\u0642\u0648\u0645 \u0628\u062c\u0645\u0639\u0647\u0627\u061f<\/h2><h2>&amp;nbsp;<\/h2><h2>\u062a\u0634\u0645\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0642\u062f \u0646\u062c\u0645\u0639\u0647\u0627 (\u0648\u0627\u0644\u062a\u064a \u0642\u062f \u064a\u062a\u0645 \u062c\u0645\u0639\u0647\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0641\u064a \u0628\u0639\u0636 \u0627\u0644\u0623\u062d\u0648\u0627\u0644)\u060c \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d\u0635\u0631\u060c \u0645\u0627 \u064a\u0644\u064a:<\/h2><h2>\u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a (IP).<\/h2><h2>\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0645\u062b\u0644 (\u0637\u0631\u0627\u0632 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0625\u0635\u062f\u0627\u0631 \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u060c \u0648\u0645\u0639\u0631\u0641\u0627\u062a \u0627\u0644\u062c\u0647\u0627\u0632 \u0627\u0644\u0641\u0631\u064a\u062f\u0629\u060c \u0648\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u0628\u0643\u0629 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u062c\u0648\u0627\u0644 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641).<\/h2><h2>\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062d\u0648\u0627\u062f\u062b \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0645\u062b\u0644 \u0627\u0644\u062a\u0639\u0637\u0644\u060c \u0648\u0646\u0634\u0627\u0637 \u0627\u0644\u0646\u0638\u0627\u0645\u060c \u0648\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0646\u0648\u0639 \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0648\u0644\u063a\u062a\u0647\u060c \u0648\u062a\u0627\u0631\u064a\u062e \u0648\u0648\u0642\u062a \u0637\u0644\u0628\u0643 \u0648\u0639\u0646\u0648\u0627\u0646 (URL) \u0627\u0644\u0625\u062d\u0627\u0644\u0629.<\/h2><h2>\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 (cookies) \u0623\u0648 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0645\u0627\u062b\u0644\u0629 \u0627\u0644\u062a\u064a \u0642\u062f \u062a\u0639\u0631\u0641 \u0628\u0635\u0648\u0631\u0629 \u0641\u0631\u064a\u062f\u0629 \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u0623\u0648 \u0623\u064a \u0645\u0646 \u062d\u0633\u0627\u0628\u0627\u062a\u0643 \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627.<\/h2><h2>\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a (\u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629) \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0645\u062d\u0644\u064a\u0627\u064b \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0622\u0644\u064a\u0627\u062a \u0645\u062b\u0644\u060c \u062a\u062e\u0632\u064a\u0646 \u0648\u064a\u0628 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0648\u0630\u0627\u0643\u0631\u0627\u062a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a.<\/h2><h2>\u0642\u062f \u0646\u0642\u0648\u0645 \u0623\u064a\u0636\u064b\u0627 \u0628\u062c\u0645\u0639 \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0646\u062f \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0623\u064a \u0645\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 \u062a\u0642\u0646\u064a\u0627\u062a\u064d \u0645\u062e\u062a\u0644\u0641\u0629\u060c \u0645\u062b\u0644 \u0646\u0642\u0627\u0637 \u0648\u0635\u0648\u0644 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0644\u0627\u0633\u0644\u0643\u064a\u0629\u060c \u0648\u0623\u0628\u0631\u0627\u062c \u0634\u0628\u0643\u0629 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u062c\u0648\u0627\u0644\u060c \u0648\u0639\u0646\u0627\u0648\u064a\u0646 \u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a.<\/h2><h2>\u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0630\u0644\u0643\u060c \u0642\u062f \u0646\u0637\u0644\u0628 \u0645\u0646\u0643 \u062a\u0642\u062f\u064a\u0645 \u0628\u064a\u0627\u0646\u0627\u062a \u0634\u062e\u0635\u064a\u0629 \u0645\u0639\u064a\u0646\u0629 \u0623\u062e\u0631\u0649 \u0644\u0644\u062a\u0633\u062c\u064a\u0644 \u0623\u0648 \u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u0645\u0639\u0646\u0627.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0644\u0645\u0627\u0630\u0627 \u0646\u062c\u0645\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u0643\u061f<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0646\u0642\u0648\u0645&amp;nbsp;\u0628\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u062c\u0645\u0639\u0647\u0627 \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0641\u0642\u0637 \u062d\u0633\u0628\u0645\u0627 \u062a\u0642\u062a\u0636\u064a\u0647 \u0627\u0644\u0636\u0631\u0648\u0631\u0629 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u0639\u0642\u0648\u0644\u0629&amp;nbsp;\u0644\u0636\u0645\u0627\u0646 \u062a\u0648\u0641\u064a\u0631 \u0623\u0641\u0636\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u0627. \u0648\u062a\u0634\u0645\u0644 \u0627\u0644\u0623\u063a\u0631\u0627\u0636 \u0627\u0644\u062a\u064a \u0646\u062c\u0645\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0646 \u0623\u062c\u0644\u0647\u0627\u060c \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d\u0635\u0631\u060c \u0645\u0627 \u064a\u0644\u064a:<\/h2><h2>\u0625\u062f\u0627\u0631\u0629 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u0644\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0644\u0623\u063a\u0631\u0627\u0636 \u0627\u0633\u062a\u0643\u0634\u0627\u0641 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u0625\u0635\u0644\u0627\u062d\u0647\u0627\u060c \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0648\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631\u060c \u0648\u0627\u0644\u0628\u062d\u062b\u060c \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0625\u062d\u0635\u0627\u0621\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0628\u064a\u0627\u0646.<\/h2><h2>&amp;nbsp;\u062a\u0642\u062f\u064a\u0645 \u0645\u062d\u062a\u0648\u0649 \u0645\u062e\u0635\u0635 \u062d\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.<\/h2><h2>&amp;nbsp;\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0628\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a\u0646\u0627 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0628\u0645\u0648\u062c\u0628 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627.<\/h2><h2>&amp;nbsp;\u062a\u062d\u0633\u064a\u0646 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0644\u0636\u0645\u0627\u0646 \u0623\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u064a\u064f\u0639\u0631\u0636 \u0628\u0623\u0641\u0636\u0644 \u0637\u0631\u064a\u0642\u0629 \u0641\u0639\u0627\u0644\u0629 \u0644\u0643 \u0648\u0644\u062c\u0647\u0627\u0632\u0643 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a.<\/h2><h2>&amp;nbsp;\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0629 \u0639\u0644\u0649 \u0633\u0644\u0627\u0645\u0629 \u0648\u0633\u0631\u064a\u0629 \u0645\u0646\u0635\u0627\u062a\u0646\u0627.<\/h2><h2>&amp;nbsp;\u062a\u0632\u0648\u064a\u062f\u0643 \u0628\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u062e\u062f\u0645\u0627\u062a \u0645\u0639\u064a\u0646\u0629.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0627\u0644\u0625\u0641\u0635\u0627\u062d \u0639\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629:<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0642\u062f \u0646\u0643\u0634\u0641 \u0639\u0646 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0648\u0641\u0642\u064b\u0627 \u0644\u0645\u0627 \u064a\u0642\u062a\u0636\u064a\u0647 \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u0644\u0647\u064a\u0626\u0627\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629\u060c \u0648\u0648\u0643\u0627\u0644\u0627\u062a \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0646\u0638\u0627\u0645\u060c \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0623\u062e\u0631\u0649 \u0627\u0644\u062a\u064a \u0644\u0647\u0627 \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u064a\u0647\u0627. \u0648\u064a\u062c\u0648\u0632 \u0644\u0646\u0627 \u0623\u064a\u0636\u064b\u0627 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0644\u0623\u064a \u0637\u0631\u0641 \u0625\u0644\u0649 \u0627\u0644\u062d\u062f \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0628\u0645\u0648\u062c\u0628 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627.<\/h2><h2>\u064a\u0645\u0643\u0646\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0639\u062f\u0645 \u062a\u0642\u062f\u064a\u0645 \u0628\u0639\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u0645\u0639\u064a\u0646\u0629 \u0627\u0644\u062a\u064a \u0646\u0637\u0644\u0628\u0647\u0627. \u0648\u0644\u0646 \u064a\u0624\u062b\u0631 \u0630\u0644\u0643 \u0639\u0645\u0648\u0645\u064b\u0627 \u0639\u0644\u0649 \u0642\u062f\u0631\u062a\u0643 \u0639\u0644\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0627\u062f\u0629 \u0645\u0646\u0647\u0627. \u0648\u0645\u0639 \u0630\u0644\u0643\u060c \u0642\u062f \u0644\u0627 \u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u0639\u0636 \u0648\u0638\u0627\u0626\u0641 \u0645\u0646\u0635\u0627\u062a\u0646\u0627 \u0623\u0648 \u0628\u0639\u0636 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0646\u0642\u062f\u0645\u0647\u0627.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0648\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u062a\u0639\u0642\u0628<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0641\u064a \u0628\u0639\u0636 \u0627\u0644\u062d\u0627\u0644\u0627\u062a\u060c \u0642\u062f \u0646\u062c\u0645\u0639 \u0623\u064a\u0636\u0627\u064b \u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637. \u0648\u064a\u0634\u064a\u0631 \u0645\u0635\u0637\u0644\u062d \"\u0645\u0644\u0641 \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637\" \u0644\u0646\u0635 \u0642\u0635\u064a\u0631 \u064a\u062a\u0645 \u062a\u062d\u0645\u064a\u0644\u0647 \u0648\u062a\u062e\u0632\u064a\u0646\u0647 \u0639\u0644\u0649 \u0627\u0644\u0642\u0631\u0635 \u0627\u0644\u0635\u0644\u0628 \u0644\u062f\u064a\u0643 \u0644\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0645\u0635\u0645\u0645 \u0628\u0634\u0643\u0644 \u0623\u0633\u0627\u0633\u064a \u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0646\u0642\u062f\u0645\u0647\u0627. <\/h2><h2>\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0647\u0630\u0647 \u0644\u0646 \u064a\u062a\u0645 \u062a\u062e\u0632\u064a\u0646\u0647 \u0639\u0644\u0649 \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0644\u062f\u064a\u0643 \u062f\u0648\u0646 \u0625\u0630\u0646\u0643\u061b \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0644\u0627 \u062a\u0634\u063a\u0644 \u0633\u0648\u0649 \u0645\u0633\u0627\u062d\u0629 \u0636\u0626\u064a\u0644\u0629 \u0645\u0646 \u0627\u0644\u0642\u0631\u0635 \u0627\u0644\u0635\u0644\u0628. <\/h2><h2>\u0642\u062f \u0646\u0642\u0648\u0645 \u0628\u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641 \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0625\u0644\u0649 \u062c\u0647\u0627\u0632\u0643. \u0648\u062b\u0645\u0629 \u0623\u0634\u0643\u0627\u0644 \u0623\u062e\u0631\u0649 \u0645\u0646 \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u062a\u0639\u0642\u0628 \u0627\u0644\u062a\u064a \u0642\u062f \u0646\u0633\u062a\u062e\u062f\u0645\u0647\u0627 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637\u060c \u0645\u062b\u0644 \u0639\u0644\u0627\u0645\u0627\u062a \u0628\u0643\u0633\u0644. \u062a\u062a\u064a\u062d \u0644\u0646\u0627 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0648\u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u062a\u0639\u0642\u0628\u060c \u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643 \u0648\u062a\u062e\u0635\u064a\u0635 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u062a\u0635\u0641\u062d \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a. \u0643\u0645\u0627 \u062a\u0633\u0627\u0639\u062f\u0646\u0627 \u0639\u0644\u0649 \u062a\u0639\u0642\u0628 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0637\u0644\u0639 \u0639\u0644\u064a\u0647\u0627\u060c \u062d\u062a\u0649 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0625\u0631\u0633\u0627\u0644\u0643 \u0623\u062e\u0628\u0627\u0631 \u0639\u0646 \u062a\u0644\u0643 \u0627\u0644\u062e\u062f\u0645\u0627\u062a. <\/h2><h2>\u0643\u0630\u0644\u0643 \u0646\u0633\u062a\u062e\u062f\u0645 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0644\u0642\u064a\u0627\u0633 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u062d\u0631\u0643\u0629 \u0644\u062a\u062d\u062f\u064a\u062f \u0623\u064a \u0645\u0646 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0645\u0646 \u0645\u0648\u0627\u0642\u0639\u0646\u0627 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0642\u062f \u062a\u0645\u062a \u0632\u064a\u0627\u0631\u062a\u0647\u0627\u060c \u0648\u0642\u064a\u0627\u0633 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0641\u064a \u0646\u0645\u0627\u0630\u062c \u0645\u062c\u0645\u0639\u0629.<\/h2><h2>\u0625\u0646\u0646\u0627 \u0646\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0627 \u0644\u0644\u0628\u062d\u062b \u0644\u0644\u062a\u0639\u0631\u0641 \u0639\u0646 \u0642\u0631\u0628 \u0639\u0644\u0649 \u0639\u0627\u062f\u0627\u062a \u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u0627 \u062d\u062a\u0649 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u0646\u0642\u062f\u0645\u0647\u0627 \u0645\u0639 \u0636\u0645\u0627\u0646 \u062d\u0645\u0627\u064a\u0629 \u0628\u064a\u0627\u0646\u0627\u062a\u0647\u0645 \u0639\u0644\u0649 \u0627\u0644\u0646\u062d\u0648 \u0627\u0644\u0645\u0639\u0642\u0648\u0644.<\/h2><h2>\u0641\u064a \u062d\u0627\u0644 \u0639\u062f\u0645 \u0631\u063a\u0628\u062a\u0643 \u0628\u062a\u0644\u0642\u064a \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637\u060c \u064a\u0645\u0643\u0646\u0643 \u0636\u0628\u0637 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0644\u062f\u064a\u0643 \u0628\u062d\u064a\u062b \u0644\u0627 \u064a\u0642\u0628\u0644\u0647\u0627 \u062c\u0647\u0627\u0632\u0643.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0641\u0625\u0646\u0643 \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u0628\u0646\u0648\u062f \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0647\u0630\u0647 \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0646\u0627 \u0644\u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0628\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0645\u0648\u0636\u062d \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0633\u064a\u0627\u0633\u0629.<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0625\u062e\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u0626\u0648\u0644\u064a\u0629<\/h2><h2>&amp;nbsp;<\/h2><h2>\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u062a\u062e\u0644\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0647\u0627 \u0641\u064a \u062d\u0627\u0644 \u0643\u0627\u0646\u062a \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u063a\u064a\u0631 \u062f\u0642\u064a\u0642\u0629 \u0623\u0648 \u0643\u0627\u0645\u0644\u0629 \u0623\u0648 \u062d\u062f\u064a\u062b\u0629. \u0648\u0642\u062f \u062a\u0645 \u062a\u0648\u0641\u064a\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0644\u0623\u063a\u0631\u0627\u0636 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0641\u0642\u0637. \u0648\u0623\u064a \u0627\u0639\u062a\u0645\u0627\u062f \u0645\u0646 \u062c\u0627\u0646\u0628\u0643 \u0639\u0644\u0649 \u062a\u0644\u0643 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0647\u0648 \u0639\u0644\u0649 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0643 \u0627\u0644\u062e\u0627\u0635\u0629 \u0643\u0644\u064a\u0627. \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u062a\u062d\u0645\u0644\u0643 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0639\u0646 \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0641\u064a \u0645\u0646\u0635\u0627\u062a\u0646\u0627.<\/h2><h2>\u0648\u0627\u0639\u062a\u0628\u0627\u0631\u064b\u0627 \u0645\u0646 \u0627\u0644\u064a\u0648\u0645\u060c \u0641\u0625\u0646\u0643 \u062a\u062f\u0631\u0643 \u0623\u0646\u0647 \u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0646\u0638\u0645\u0629 \u0639\u0627\u0645\u0629 \u0648\u0634\u0627\u0645\u0644\u0629 \u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0648\u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0627\u0633\u060c \u0641\u0625\u0646 \u0645\u0639\u0627\u0644\u062c\u062a\u0646\u0627 \u0644\u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u062a\u0633\u062a\u0646\u062f \u0625\u0644\u0649 \u062a\u0641\u0633\u064a\u0631\u0646\u0627 \u0627\u0644\u0645\u0639\u0642\u0648\u0644 \u0644\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062a\u064a \u0646\u0639\u062a\u0642\u062f \u0623\u0646\u0647\u0627 \u0630\u0627\u062a \u0635\u0644\u0629\u060c \u0648\u0645\u0645\u0627\u0631\u0633\u0627\u062a \u0627\u0644\u0633\u0648\u0642 \u0644\u0644\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0645\u0645\u0627\u062b\u0644\u064a\u0646 \u0641\u064a \u0627\u0644\u0633\u0648\u0642.<\/h2><h2>\u0643\u0645\u0627 \u0623\u0646\u0643 \u062a\u062f\u0631\u0643 \u0648\u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0623\u0646\u0646\u0627 \u0633\u0646\u0635\u0646\u0641 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0625\u0644\u0649 \u0627\u0644\u062d\u062f \u0627\u0644\u0630\u064a \u064a\u0633\u0645\u062d \u0628\u0647 \u0627\u0644\u0646\u0638\u0627\u0645\u060c \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 2 \u0623\u0648 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 1 \u062d\u0633\u0628 \u062d\u0627\u0644\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0648\u0630\u0644\u0643 \u0644\u0623\u063a\u0631\u0627\u0636 \u0648\u0648\u0641\u0642\u064b\u0627 \u0644\u0644\u0625\u0637\u0627\u0631 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a \u0644\u0644\u062d\u0648\u0633\u0628\u0629 \u0627\u0644\u0633\u062d\u0627\u0628\u064a\u0629 \u0627\u0644\u0635\u0627\u062f\u0631 \u0628\u062a\u0627\u0631\u064a\u062e 14 \u0645\u0627\u0631\u0633 2019\u0645 \u0639\u0646 \u0647\u064a\u0626\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0648\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.<\/h2><h2>\u0643\u0645\u0627 \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u062a\u0639\u0648\u064a\u0636 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0648\u062d\u0645\u0627\u064a\u062a\u0647\u0627 \u0648\u0625\u0628\u0631\u0627\u0626\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629\u060c \u0648\u0643\u0630\u0644\u0643 \u0627\u0644\u0643\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0627\u0628\u0639\u0629 \u0644\u0647\u0627\u060c \u0648\u0645\u0633\u0624\u0648\u0644\u064a\u0647\u0627\u060c \u0648\u0645\u062f\u064a\u0631\u064a\u0647\u0627\u060c \u0648\u0645\u0648\u0638\u0641\u064a\u0647\u0627\u060c \u0648\u0645\u0642\u0627\u0648\u0644\u064a\u0647\u0627\u060c \u0648\u0648\u0643\u0644\u0627\u0626\u0647\u0627\u060c \u0648\u0645\u0631\u062e\u0635\u064a\u0647\u0627 \u0645\u0646 \u0648\u0636\u062f \u0623\u064a \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0633\u0627\u0626\u0631\u060c \u0648\u0627\u0644\u062a\u0628\u0639\u0627\u062a\u060c \u0648\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0639\u0648\u064a\u0636\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u0645\u062d\u0627\u0643\u0645 \u0648\u0623\u062a\u0639\u0627\u0628 \u0627\u0644\u0645\u062d\u0627\u0645\u0627\u0629 \u0627\u0644\u0645\u0639\u0642\u0648\u0644\u0629\u060c \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0646 \u0623\u0648 \u0627\u0644\u0646\u0627\u062a\u062c\u0629 \u0645\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0644\u0645\u0646\u0635\u0627\u062a \u0648\u0623\u064a \u0645\u062e\u0627\u0644\u0641\u0629 \u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629.<\/h2><h2>\u0648\u0641\u064a \u062d\u0627\u0644 \u062a\u0633\u0628\u0628\u062a \u0641\u064a \u062a\u0639\u0637\u064a\u0644 \u0641\u0646\u064a \u0644\u0644\u0645\u0646\u0635\u0627\u062a \u0623\u0648 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062a\u064a \u062a\u0628\u062b \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0625\u0644\u064a\u0643 \u0623\u0648 \u0625\u0644\u0649 \u063a\u064a\u0631\u0643\u060c \u0641\u0623\u0646\u062a \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0639\u0646 \u0623\u064a \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u0633\u0627\u0626\u0631\u060c \u0648\u0627\u0644\u062a\u0628\u0639\u0627\u062a\u060c \u0648\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0639\u0648\u064a\u0636\u0627\u062a\u060c \u0648\u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u0645\u062d\u0627\u0643\u0645 \u0648\u0623\u062a\u0639\u0627\u0628 \u0627\u0644\u0645\u062d\u0627\u0645\u0627\u0629 \u0627\u0644\u0645\u0639\u0642\u0648\u0644\u0629\u060c \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0646 \u0623\u0648 \u0627\u0644\u0646\u0627\u062a\u062c\u0629 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u062a\u0639\u0637\u064a\u0644.<\/h2><h2>&amp;nbsp;<\/h2><p><br><\/p>","en":"<p>Welcome to Al Majdiah Residence. Al Majdiah Residence is committed to providing the best services to all users. This includes respecting users\u2019 privacy and ensuring that all available measures are taken to protect users\u2019 information and data, including their data, by the regulations in force in the Kingdom of Saudi Arabia.<\/p><p>We provide this privacy policy to our users so that they can understand how we process, collect, use, process, and protect our user&apos;s data when they visit our website and when they use all mobile applications, social media pages, and other associated platforms that may require data to be processed in any way (together referred to as \u201cour platforms\u201d or \u201cplatforms\u201d). ). Please read this Privacy Policy carefully to understand our approach and practices concerning your data.<\/p><p>This Privacy Policy should be read in conjunction with our Terms of Use and any other documents to which it refers. (If any).<\/p><p>&amp;nbsp;<\/p><p>How do we collect and use data?<\/p><p>We process, collect, or use data only as reasonably necessary to ensure the best services available to our users.<\/p><p>For example, some of our Services may require that you register and create an account or provide your data, and in such circumstances, we may ask you for data such as your name, email address, and telephone number.<\/p><p>By submitting this data, you agree that, to the extent permitted under applicable laws, we may:<\/p><p>Use of data to provide you with the information and services you request from us.<\/p><p>&amp;nbsp;Sharing data with third-party service providers, whether inside or outside the Kingdom of Saudi Arabia.<\/p><p>&amp;nbsp;Storing data outside the Kingdom of Saudi Arabia.<\/p><p>&amp;nbsp;Use data to respond to your questions, comments, and requests.<\/p><p>&amp;nbsp;Use data to notify you about changes to one or all our platforms.<\/p><p>&amp;nbsp;Use data to improve the services we provide.<\/p><p>&amp;nbsp;Use data to comply with our obligations under applicable regulations.<\/p><p>&amp;nbsp;Use data to ensure that content on our platforms is displayed most effectively for you and your device.<\/p><p>&amp;nbsp;<\/p><p>What information do we collect?<\/p><p>&amp;nbsp;<\/p><p>The information we may collect (which in some cases may be collected automatically) includes, but is not limited to:<\/p><p>Internet Protocol (IP) address.<\/p><p>Device-specific information, such as (device model, operating system version, unique device identifiers, and mobile network information including phone number).<\/p><p>Device incident information, such as crash, system activity, device settings, browser software type and language, date and time of your request, and referring URL.<\/p><p>Cookies or similar technologies may uniquely identify your browser software or any of your accounts on our Platforms.<\/p><p>Information (including personal data) is located locally on your device using mechanisms such as browser web storage and application caches.<\/p><p>We may also collect and process location information when you use any of our Platforms through various technologies, such as wireless network access points, mobile network towers, and Internet Protocol addresses.<\/p><p>In addition, we may ask you to provide certain other personal data to register or create an account with us.<\/p><p>&amp;nbsp;<\/p><p>Why do we collect your information?<\/p><p>&amp;nbsp;<\/p><p>We process, collect, and use data only as reasonably necessary to ensure the best services available to our users. The purposes for which we collect data include, but are not limited to:<\/p><p>To administer our Platforms and for internal operations, including troubleshooting, data analysis, testing, research, statistical, and survey work.<\/p><p>&amp;nbsp;Provide content tailored to your needs.<\/p><p>&amp;nbsp;Comply with our legal obligations under applicable regulations.<\/p><p>&amp;nbsp;Improving our platforms to ensure that content is displayed most effectively for you and your device.<\/p><p>&amp;nbsp;Maintaining the integrity and confidentiality of our platforms.<\/p><p>&amp;nbsp;Providing you with access to certain products and services.<\/p><p>&amp;nbsp;<\/p><p>Disclosure of personal information:<\/p><p>&amp;nbsp;<\/p><p>We may disclose your data as required by law to government bodies, law enforcement agencies, and other organizations that have the authority to receive it. We may also disclose your data to any party to the extent permitted under applicable regulations.<\/p><p>You may choose not to provide certain personal information that we request. This will generally not affect your ability to access and benefit from our platforms. However, you may not be able to access some of the functionality of our Platforms or some of the services we offer.<\/p><p>&amp;nbsp;<\/p><p>Cookies and Tracking Technologies<\/p><p>&amp;nbsp;<\/p><p>In some cases, we may also collect your data through the use of cookies. The term \"cookie\" refers to a short piece of text that is downloaded and stored on your hard drive to store information and is primarily designed to improve the services we provide.<\/p><p>These cookies will not be stored on your browser without your permission; Cookies take up only a small amount of space on your hard drive.<\/p><p>We may send a cookie to your device. There are other forms of tracking technology that we may use in addition to cookies, such as pixel tags. Cookies and other tracking technologies allow us to recognize your device and personalize your online browsing experience. It also helps us keep track of the services you view, so we can send you news about those services.<\/p><p>We also use cookies to measure traffic patterns to determine which sections of our websites have been visited and to measure transaction patterns in aggregated forms.<\/p><p>We use this for research to better understand our users&apos; habits so that we can improve the services we provide while ensuring that their data is reasonably protected.<\/p><p>If you do not wish to receive cookies, you can set your browser so that your device does not accept them.<\/p><p>&amp;nbsp;<\/p><p>Approval<\/p><p>&amp;nbsp;<\/p><p>By using our Platforms, you agree to be bound by the terms of this Privacy Policy and our use of your data as described in this Policy.<\/p><p>&amp;nbsp;<\/p><p>Evacuation responsibility<\/p><p>&amp;nbsp;<\/p><p>Al Majdiah Residence disclaims any responsibility if the information made available on the Platforms is not accurate, complete, or current. The information is provided for general information purposes only. Any reliance you place on such information is entirely at your own risk. You agree that you are responsible for monitoring changes to our platforms.<\/p><p>As of today, you understand that there are no general and comprehensive systems for protecting personal data in the Kingdom of Saudi Arabia. On this basis, our processing of your data is based on our reasonable interpretation of the regulations we believe to be relevant, and the market practices of similar partners in the market.<\/p><p>You also understand and agree that we will classify data, to the extent permitted by the system, into Level 2 or Level 1 depending on the status of the data, for and by the Regulatory Framework for Cloud Computing issued on March 14, 2019, by the Communications and Information Technology Commission in the Kingdom of Saudi Arabia.<\/p><p>You also agree to indemnify, hold harmless, and hold harmless Al Majdiah Residence, its affiliated entities, officers, directors, employees, contractors, agents, and licensors from and against any losses, liabilities, expenses, damages, and costs, including court costs and reasonable attorneys&apos; fees, Arising from or resulting from your use of the Platforms and any violation of the Terms of Use and the Privacy Policy.<\/p><p class=\"ql-direction-rtl\">If you cause a technical disruption to the platforms or systems that broadcast the platforms to you or others, you agree to bear responsibility for any and all losses, liabilities, expenses, compensations, and costs, including court costs and reasonable attorneys\u2019 fees, arising from or resulting from this. Disruption.<\/p>"},"intellectual_property_rights":{"ar":"<h2 class=\"ql-direction-rtl ql-align-right\"><br><\/h2><h2 class=\"ql-direction-rtl ql-align-right\">&apos;\u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629&apos; \u062a\u0639\u0646\u064a \u062c\u0645\u064a\u0639 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0648\u062a\u0634\u0645\u0644: \u062d\u0642\u0648\u0642 \u0627\u0644\u0637\u0628\u0639 \u0648\u0627\u0644\u0646\u0634\u0631\u060c \u0648\u0628\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0639\u060c \u0648\u062d\u0642\u0648\u0642 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0648\u062d\u0642\u0648\u0642 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0648\u0627\u0644\u062a\u0635\u0627\u0645\u064a\u0645 \u0648\u0627\u0644\u062f\u0631\u0627\u064a\u0629\u060c \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0633\u0631\u064a\u0629 (\u0633\u0648\u0627\u0621\u064b \u0643\u0627\u0646\u062a \u0645\u0633\u062c\u0644\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0645\u0633\u062c\u0644\u0629)\u061b<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0633\u062c\u064a\u0644\u060c \u0648\u062d\u0642 \u062a\u0642\u062f\u064a\u0645 \u0637\u0644\u0628 \u0627\u0644\u062a\u0633\u062c\u064a\u0644\u060c \u0644\u0623\u064a\u064d \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u062d\u0642\u0648\u0642\u061b<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u062c\u0645\u064a\u0639 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0627\u0644\u0623\u062e\u0631\u0649 \u0648\u0645\u0627 \u064a\u0643\u0627\u0641\u0626\u0647\u0627 \u0623\u0648 \u064a\u0645\u0627\u062b\u0644\u0647\u0627 \u0645\u0646 \u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u064a \u0623\u064a \u0645\u0643\u0627\u0646 \u0641\u064a \u0627\u0644\u0639\u0627\u0644\u0645\u061b \u0648\u0623\u064a \u062a\u0631\u0627\u062e\u064a\u0635 \u0623\u0648 \u0645\u0648\u0627\u0641\u0642\u0627\u062a \u0623\u0648 \u062d\u0642\u0648\u0642 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u064a\u062d\u0635\u0644 \u0639\u0644\u064a\u0647\u0627 \u0637\u0631\u0641 \u062b\u0627\u0644\u062b \u0645\u0627\u0644\u0643 \u0644\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u062b\u0627\u0644\u062b \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0639\u0644\u0649 \u0645\u0646\u0635\u0627\u062a\u0646\u0627.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0645\u062d\u062a\u0648\u0649&apos; \u064a\u0642\u0635\u062f \u0628\u0647 \u0645\u0646\u0635\u0627\u062a\u0646\u0627\u060c \u0648\u062a\u0634\u0645\u0644 \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d\u0635\u0631\u060c \u0644\u063a\u0629 \u062a\u0631\u0645\u064a\u0632 \u0625\u0646\u0634\u0627\u0621 \u0648\u062a\u0635\u0645\u064a\u0645 \u0635\u0641\u062d\u0627\u062a \u0648\u0645\u0648\u0642\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a HTML \u060c \u0648\u0627\u0644\u0646\u0635\u0648\u0635\u060c \u0648\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629\u060c \u0648\u0627\u0644\u0634\u0639\u0627\u0631\u0627\u062a\u060c \u0648\u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0648\u0627\u0644\u0635\u0648\u0631\u060c \u0648\u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0635\u0648\u062a \u0648\u0627\u0644\u0641\u064a\u062f\u064a\u0648\u060c \u0648\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 (\u0648\u0643\u0630\u0644\u0643 \u062a\u0646\u0638\u064a\u0645 \u0648\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0645\u0646\u0635\u0627\u062a)\u060c \u0648\u0627\u0644\u0646\u0634\u0631\u0627\u062a \u0627\u0644\u0635\u062d\u0641\u064a\u0629\u060c \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c\u060c \u0648\u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u064a\u0648\u0641\u0631\u0647 \u0645\u0642\u062f\u0645\u064a \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b\u060c \u0648 \u0627\u0644\u0630\u064a \u064a\u0643\u0648\u0646 \u0645\u0646\u0634\u0648\u0631\u0627\u064b \u0648\u0645\u062a\u0627\u062d\u0627\u064b \u0644\u0643 \u0639\u0644\u0649 \u062a\u0644\u0643 \u0627\u0644\u0645\u0646\u0635\u0627\u062a<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0647\u064a \u0627\u0644\u0645\u0627\u0644\u0643 (\u0648\u0627\u0644\u0645\u0631\u062e\u0635 \u062d\u0633\u0628 \u0627\u0644\u0627\u0642\u062a\u0636\u0627\u0621) \u0644\u062c\u0645\u064a\u0639 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0644\u0644\u0645\u062d\u062a\u0648\u0649. \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u062a\u0644\u0643 \u0627\u0644\u062a\u064a \u0644\u0645 \u062a\u064f\u0645\u0646\u062d \u0628\u0634\u0643\u0644 \u0635\u0631\u064a\u062d\u060c \u0641\u064a \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0648\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0630\u064a \u064a\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064a\u0647\u060c \u062a\u0639\u062f \u0643\u0644\u0647\u0627 \u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633.<\/h2><h2 class=\"ql-direction-rtl ql-align-right\">\u0628\u0627\u0633\u062a\u062b\u0646\u0627\u0621 \u0645\u0627 \u0647\u0648 \u0645\u0648\u0636\u062d \u0647\u0646\u0627 \u0628\u0637\u0631\u064a\u0642\u0629 \u0623\u062e\u0631\u0649\u060c \u0644\u0627 \u064a\u0648\u062c\u062f \u0641\u064a \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0645\u0627 \u064a\u064f\u0641\u0633\u0651\u064e\u0631 \u0639\u0644\u0649 \u0623\u0646\u0647 \u0645\u0646\u062d\u060c \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u062a\u0636\u0645\u064a\u0646\u060c \u0623\u0648 \u0633\u0642\u0648\u0637 \u0644\u0644\u062d\u0642\u060c \u0623\u0648 \u063a\u064a\u0631 \u0630\u0644\u0643\u060c \u0644\u0623\u064a \u062a\u0631\u062e\u064a\u0635 \u0623\u0648 \u062d\u0642 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0639\u0644\u0627\u0645\u0629 \u062a\u062c\u0627\u0631\u064a\u0629 \u0623\u0648 \u0634\u0639\u0627\u0631 \u0645\u0639\u0631\u0648\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0627\u062a\u060c \u062f\u0648\u0646 \u0625\u0630\u0646 \u062e\u0637\u064a \u0645\u0646 \u0627\u0644\u0645\u0627\u0644\u0643. \u0625\u0646\u0651\u064e \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0627\u0644\u0634\u0639\u0627\u0631\u0627\u062a\u060c \u0648\u0627\u0644\u0635\u0648\u0631 \u0648\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0647\u064a \u0645\u0644\u0643 \u0644\u0646\u0627 \u0648\u0644\u0627 \u064a\u062c\u0648\u0632 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u062f\u0648\u0646 \u0625\u0630\u0646\u064d \u0645\u0646\u0627 \u0648\u0628\u0634\u0631\u0637 \u0625\u0642\u0631\u0627\u0631\u064d \u0645\u0646\u0627\u0633\u0628.<\/h2><h2>&amp;nbsp;<\/h2>","en":"<p>&apos;Intellectual Property Rights&apos; means all intellectual property rights and includes: copyright, patents, database rights, trade mark rights, designs, know-how and confidential information (whether registered or unregistered);<\/p><p>Applications for registration, and the right to apply for registration, for any of these rights.<\/p><p>All other intellectual property rights and equivalent or similar forms of protection existing anywhere in the world; and any licenses, consents or usage rights obtained by a third-party intellectual property owner to use the content on our platforms.<\/p><p>&apos;Content&apos; means our platforms, and includes, but is not limited to, HTML pages, text, graphics, logos, button icons, images, audio and video clips, digital upload files (as well as the organization and layout of the platforms), and press releases. , software, and other content, including that provided by third-party service providers, that is published and made available to you on those platforms.<\/p><p>Al Majdiah Residence is the owner (and licensor as applicable) of all intellectual property rights to the Content. All rights, including those not expressly granted, in the Platforms and accessible content are reserved to Al Majdiah Residence.<\/p><p>Except as otherwise described herein, nothing contained on the Platforms shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark or logo displayed on the Platforms, without the written permission of the owner. The trademarks, logos, images, and service marks used on this site are our property and may not be used without our permission and subject to appropriate acknowledgment.<\/p>"}},"licenses":{"fal_licenses":"1200017342"}},"articles":[{"id":22,"title":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u062a\u0633\u062a\u062d\u0648\u0630 \u0639\u0644\u0649 \u0645\u062c\u0645\u0648\u0639\u0629 \u0623\u0631\u0627\u0636\u064a \u0628\u0645\u0633\u0627\u062d\u0629 17,840 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639 \u0628\u0642\u064a\u0645\u0629 190 \u0645\u0644\u064a\u0648\u0646 \u0631\u064a\u0627\u0644","excerpt":"\u064a\u0633\u0631\u0646\u0627 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0639\u0646 \u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0639\u0644\u0649 \u0645\u062c\u0645\u0648\u0639\u0629 \u0623\u0631\u0627\u0636\u064a \u0628\u0645\u0633\u0627\u062d\u0629 17,840 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639 \u0641\u064a \u0639\u062f\u0629 \u0645\u0648\u0627\u0642\u0639 \u0645\u062a\u0645\u064a\u0632\u0629 \u0641\u064a \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u064a\u0627\u0636\u060c \u0648\u0630\u0644\u0643 \u0628\u0642\u064a\u0645\u0629 190 \u0645\u0644\u064a\u0648\u0646 \u0631\u064a\u0627\u0644 \u0633\u0639\u0648\u062f\u064a.","image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/posts\/images\/0JgBPvR8Y3ZdS9vjbKMZbeofGQBu1xkRHTVwuAK8.jpg","content":[],"created_at":"\u0645\u0627\u064a\u0648  2"},{"id":19,"title":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u064a\u062f\u0646\u0633 \u062a\u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0623\u062a\u0639\u0627\u0628 \u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 123 \u0644\u0635\u0627\u0644\u062d \u062c\u0645\u0639\u064a\u0629 \"\u062a\u0639\u0644\u064e\u0651\u0645\" \u0644\u062a\u062d\u0641\u064a\u0638 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645","excerpt":"\u0627\u0646\u0637\u0644\u0627\u0642\u064b\u0627 \u0645\u0646 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0646\u0627 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629\u060c \u0646\u0639\u0644\u0646 \u0639\u0646 \u062a\u0646\u0627\u0632\u0644\u0646\u0627 \u0639\u0646 \u0623\u062a\u0639\u0627\u0628 \u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 123","image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/posts\/images\/AqcHDim0qGtROiNdtjXyWqkDLm96qQB66xxQFJ0d.jpg","content":[],"created_at":"\u0623\u0628\u0631\u064a\u0644  17"},{"id":18,"title":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 \u0627\u0644\u0631\u0627\u0639\u064a \u0627\u0644\u0645\u0627\u0633\u064a \u0644\u0645\u0639\u0631\u0636 \u0645\u0633\u0643\u0646 \u0627\u0644\u0639\u0642\u0627\u0631\u064a 2023 \u0641\u064a \u0627\u0644\u0631\u064a\u0627\u0636","excerpt":"\u062a\u062d\u062a \u0631\u0639\u0627\u064a\u0629 \u0627\u0644\u0631\u0626\u064a\u0633 \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u064a \u0644\u0644\u0647\u064a\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0627\u0644\u0645\u0647\u0646\u062f\u0633 \u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u0628\u0646 \u0633\u0639\u0648\u062f \u0627\u0644\u062d\u0645\u0627\u062f \u0634\u0627\u0631\u0643\u0646\u0627 \"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633\" \u0643\u0631\u0627\u0639\u064d \u0645\u0627\u0633\u064a \u0644\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629 \u0645\u0646 \u0645\u0639\u0631\u0636","image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/posts\/images\/FuKwvHD49guE7U54ORKCqXSYCBcyXbttDkoAUE1m.jpg","content":[],"created_at":"\u0623\u0628\u0631\u064a\u0644  17"}],"forRent":[{"id":1298,"unit_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 8-B3","bedrooms_count":3,"bathrooms_count":3,"halls_design_text":"\u0645\u062c\u0644\u0633 \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u0635\u0627\u0644\u0629","is_has_maid_room":0,"is_has_storage_room":0,"is_has_roof":0,"is_has_rather":0,"parking_text":"\u0645\u0648\u0642\u0641 \u062e\u0627\u0631\u062c\u064a","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":0,"is_furnished":0,"unit_map_url":"https:\/\/maps.app.goo.gl\/Ezy5N39EWwdSvBs29","total_area":"124","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a","view":null,"unit_description":"","project":null,"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/zhoBhob77g98KoKUoKqxBAJcam9sgbrW7CiROlpU.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/hw3FLy2zDBBNNtAQyp8J9JdI1a14YwgNupAg2hdc.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/LVx638ORB2EacLkuh95phgjoGtkjmj2H4StDjMdb.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/uzMnwImqKqQHg7xDcE7QsYPkaY7AaykcM5lj8EtC.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/Mu1aXOJZKsjF4Nxg24nTN35oXHayXEVyccLpW1pt.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/XENFOD5wZZTA5JZGgCMAsUgw8NyNV6ur4SwdiOdW.jpg"],"project_image":null,"one_batches_price":70000,"two_batches_price":75000,"insurance":"2500"},{"id":1554,"unit_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 127 - I 1","bedrooms_count":3,"bathrooms_count":3,"halls_design_text":"\u0635\u0627\u0644\u0629 \u0645\u0633\u062a\u0642\u0644\u0647 \u062a\u0645\u0627\u0645\u0627\u064b \u0639\u0646 \u0627\u0644\u0645\u062c\u0644\u0633","is_has_maid_room":0,"is_has_storage_room":1,"is_has_roof":1,"is_has_rather":0,"parking_text":"\u0645\u0648\u0642\u0641 \u0642\u0628\u0648","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":1,"is_furnished":0,"unit_map_url":"https:\/\/www.google.com\/maps\/search\/?api=1&amp;query=24.819342,46.607356","total_area":"103.47","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a","view":null,"unit_description":"\u0645\u0637\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 - \u0645\u0633\u062a\u0648\u062f\u0639","project":{"id":158,"is_clone":false,"is_archiving":false,"moyasar_api_key":"sk_live_ccUm6zRRGWBPfo6mcSxQNbRZAKzSxLXQi5ceWhCm","moyasar_api_publishable_key":"pk_live_nwYC4yYGEmvXiJ7uXMjbvVvE2dvgZ9dF3t5VMMEd","bank_id":11,"bank_iban":"SA0930400138095409400010","developer_name":null,"type":null,"owner_id":84,"steps_completed_percent":70,"sales_start_date":null,"first_sale_date":"2023-10-05","last_sale_date":"2024-04-04","duration_of_foundations_concrete_guarantee":null,"sales_end_date":null,"project_manager_user_id":null,"work_days":null,"receipt_delivery_place":null,"start_work_date":null,"company_id":1,"project_category_id":1,"license_number":"1443\/4772","project_area":0,"offices_num":0,"shops_num":0,"view_landing_page":false,"landing_page_paragraph":{"ar":"","en":""},"view_web_site_latest_project":false,"view_web_site_if_sold":false,"view_web_site_attention_request":false,"view_web_site_units":false,"view_web_site_label":false,"has_financing_solutions":false,"sales_on_mp_license_date":null,"sales_on_mp_license_number":null,"cost_of_development":74000000,"cost_of_development_expenses":null,"cost_of_contractor":56840000,"cost_of_contractor_expenses":null,"sub_project_step_id":127,"main_project_step_id":116,"template_sanad_brokerage_bank_id":10,"template_sanad_orbon_bank_id":null,"template_sanad_bank_id":17,"template_sanad_brokerage_id":null,"maintenance_cleaning_of_common_area_period_to":"2025-02-01","maintenance_cleaning_of_common_area_period_from":"2024-02-01","comprehensive_warranty_period_to":"2025-02-01","comprehensive_warranty_period_from":"2024-02-01","template_print_model_id":null,"template_sanad_receipt_id":null,"template_orbon_instrucation_bank_id":null,"template_orbon_instrucation_id":null,"template_sanad_tax_id":null,"template_sanad_contract_id":3,"template_contract_bank_brokerage_id":16,"template_contract_cash_fifty_id":null,"template_sanad_orbon_id":null,"view_web_site_all_project":false,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 127","description":{"en":"","ar":""},"video":null,"units_delivery_date":"2024-02-01","project_receipt_date":null,"image":"site\/projects\/jupyNdCeynpnZrwqMspjYQ9Eoe2CphYc3SIYVkcZ.jpg","code":"127","status":"under_sale","auto_receive_sales_support":true,"complete_map_percent":97,"is_sales_on_map":false,"allow_fifty_purchase_method":false,"government_user_id":null,"emptying_user_id":null,"sales_on_map_user_id":null,"owners_union_user_id":null,"latitude":"24.819342","longitude":"46.607356","view_web_site_unit_img":false,"pdf_file":null,"video_link":"https:\/\/youtu.be\/yzhdSvyPp8o","banner_img":"site\/projects\/2XYOerJ22a7bRGxqIved63eb9CHyJMdjERKN70NN.jpg","thd_view":"https:\/\/my.matterport.com\/show\/?m=k5cxEDLaK7X","display_name":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 127","en":"Al Majdiah Residence 127"},"contractor_id":207,"advisor_id":212,"contractor_start_at":"2022-09-11","contractor_contract_days":null,"contractor_contract_archive_id":null,"created_at":"2022-07-04","updated_at":"2024-07-11 10:48 AM","deleted_at":null,"designer_office":"\u0627\u064a\u0643\u0648\u0646","supervising_office":"\u0627\u064a\u0643\u0648\u0646","apartments_count":196,"villas_count":null,"view":"european","contractor_direct_start_at":"2022-03-01","contractor_execution_end_at":"2023-07-01","web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1-d0VV63ilnakIx_0ubpuq0RoU1zNqa3Q\/view?usp=sharing","web_site_project_brochure_en":null,"view_landing_page_features":false,"view_soon_for_sale_label":true,"view_landing_page_nav":false,"view_landing_page_units":false,"landing_page_logo":null,"image_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/jupyNdCeynpnZrwqMspjYQ9Eoe2CphYc3SIYVkcZ.jpg","banner_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/2XYOerJ22a7bRGxqIved63eb9CHyJMdjERKN70NN.jpg","video_url":null,"services_progress":0,"pdf_url":null,"comprehensive_warranty_years":1,"maintenance_cleaning_of_common_area_years":1,"status_text":"\u062a\u062d\u062a \u0627\u0644\u0628\u064a\u0639","can_swith_label_text":false,"type_text":null,"sum_expenses":null,"rent_cost_of_development":74000000,"rent_allocated_budget":17160000,"rent_cost_of_contractor":56840000,"contractor_end_at":null,"view_text":"\u0623\u0648\u0631\u0648\u0628\u064a","sales_end_date_text":null,"sales_start_date_text":null,"allocated_budget":17160000,"allocated_budget_expenses":0,"sales_on_map_text":"\u0646\u0638\u0627\u0645\u064a","end_work_date":null,"percent_work_day":null,"diff_between_first_last_sale_days":182,"has_moyasar_conection":true,"web_hook_url":"https:\/\/etmaam.almajdiah.sa\/api\/client\/v1\/moyasar\/webhook\/158","landing_page_logo_url":null,"map_url":"https:\/\/www.google.com\/maps\/search\/?api=1&amp;query=24.819342,46.607356","land":{"id":161,"is_clone":false,"company_id":1,"land_owner_from_id":14,"land_owner_to_id":63,"move_type":"buy","lat":null,"lng":null,"city_id":829,"project_id":158,"title":"127","space":13914.45,"plan_number":"\u0628\u062f\u0648\u0646","chart_number":"3114","block_number":"000","meter_price":0,"price":0,"vat_number":"000","vat_amount":0,"vat_date":"0001-01-01","vat_paid_date":null,"note":null,"created_at":"2022-06-30","updated_at":"2022-10-05 06:16 AM","deleted_at":null,"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0645\u0644\u0642\u0627","move_type_text":"\u0634\u0631\u0627\u0621","block":{"id":829,"country_id":1,"name":"\u0627\u0644\u0645\u0644\u0642\u0627","parent_id":16,"created_at":null,"updated_at":"2023-02-21T08:21:38.000000Z","deleted_at":null,"city":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null},"region":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null}}}},"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/m9GkHS3dj3qkogixmYI98sY4BvOowl9Zqf5iMbsZ.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/JA536B40cOkOEjzimEpeFRhtOlL2BUCzaQGmrcPP.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/OBIYDeECCqV4fRxqV9vV3YUfruuFPoQiUTFacNgm.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/dom2Nydd0p0eWkkhJpkzNhptQdZNVwRgrmWXyXdw.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/ufFahY7sQ5IW97umVxsAuBUmLSH7KhuHxRqhpT8l.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/sIgOHZAflQ3xEJYlPkEF69QC5hj95pQV4qyT4QnE.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/2GE93hNahWzbpNAkLLvoGyp0p7Y80Co4imBq1Z6T.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/0mxsyXZ1eqN3bCxLhVy0YlsxM6iMjimrk7jWcpO7.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/ACc6EGVdBhL1JyBAV2hX754oX0tOyolP7WHFPFky.jpg"],"project_image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/jupyNdCeynpnZrwqMspjYQ9Eoe2CphYc3SIYVkcZ.jpg","one_batches_price":85000,"two_batches_price":90000,"insurance":"2500","address":"\u0627\u0644\u0645\u0644\u0642\u0627 - \u0627\u0644\u0631\u064a\u0627\u0636","area":"\u0627\u0644\u0631\u064a\u0627\u0636","regionBlock":"\u0627\u0644\u0645\u0644\u0642\u0627","region":"\u0627\u0644\u0631\u064a\u0627\u0636"},{"id":1527,"unit_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 90 A4","bedrooms_count":3,"bathrooms_count":4,"halls_design_text":"\u0635\u0627\u0644\u0629 \u0645\u0633\u062a\u0642\u0644\u0647 \u062a\u0645\u0627\u0645\u0627\u064b \u0639\u0646 \u0627\u0644\u0645\u062c\u0644\u0633","is_has_maid_room":0,"is_has_storage_room":1,"is_has_roof":0,"is_has_rather":0,"parking_text":"\u0645\u0648\u0642\u0641 \u062e\u0627\u0631\u062c\u064a","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":1,"is_furnished":0,"unit_map_url":"https:\/\/maps.app.goo.gl\/oSMCV5UBMz9HQZWU7","total_area":"125","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a","view":null,"unit_description":"","project":null,"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/nK7A0rQleUkNc7mWoISi0rpTv4mZMSCownG8gKP0.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/CmS49DrQoySbGqENjlY2RYtd0B372MsplXPFSjxC.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/HQs1q1p5i3EllHf3rJc6fGMqvRk1MhI1JV4uTdrw.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/iiIGZxZEIa38V6d8ObInIBIoGDZFr5zWcZrlcFvE.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/XeQC5LBEp7jK7siaCVWI5paXkwIcpCY3JeLpbwhi.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/UYShqKCPH09t0nF2xJazuR5o3q8zmPfpFYPfxjdn.jpg"],"project_image":null,"one_batches_price":80000,"two_batches_price":85000,"insurance":"2500"},{"id":1423,"unit_name":"\u0641\u064a\u0644\u062c - 1 - F 8","bedrooms_count":3,"bathrooms_count":3,"halls_design_text":"\u0645\u062c\u0644\u0633 \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u0635\u0627\u0644\u0629","is_has_maid_room":1,"is_has_storage_room":0,"is_has_roof":1,"is_has_rather":1,"parking_text":"\u0645\u0648\u0642\u0641 \u062e\u0627\u0631\u062c\u064a","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":1,"is_furnished":1,"unit_map_url":"https:\/\/maps.app.goo.gl\/d7hr5aTqEoDQmZ7w5","total_area":"160.379","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0648\u0644","view":null,"unit_description":"","project":{"id":151,"is_clone":false,"is_archiving":false,"moyasar_api_key":null,"moyasar_api_publishable_key":null,"bank_id":null,"bank_iban":null,"developer_name":null,"type":null,"owner_id":null,"steps_completed_percent":null,"sales_start_date":null,"first_sale_date":"2022-03-31","last_sale_date":"2023-01-29","duration_of_foundations_concrete_guarantee":null,"sales_end_date":null,"project_manager_user_id":null,"work_days":null,"receipt_delivery_place":null,"start_work_date":null,"company_id":1,"project_category_id":8,"license_number":null,"project_area":0,"offices_num":0,"shops_num":0,"view_landing_page":false,"landing_page_paragraph":{"en":""},"view_web_site_latest_project":false,"view_web_site_if_sold":true,"view_web_site_attention_request":false,"view_web_site_units":false,"view_web_site_label":false,"has_financing_solutions":false,"sales_on_mp_license_date":null,"sales_on_mp_license_number":null,"cost_of_development":null,"cost_of_development_expenses":null,"cost_of_contractor":null,"cost_of_contractor_expenses":null,"sub_project_step_id":null,"main_project_step_id":null,"template_sanad_brokerage_bank_id":null,"template_sanad_orbon_bank_id":null,"template_sanad_bank_id":null,"template_sanad_brokerage_id":null,"maintenance_cleaning_of_common_area_period_to":null,"maintenance_cleaning_of_common_area_period_from":null,"comprehensive_warranty_period_to":null,"comprehensive_warranty_period_from":null,"template_print_model_id":null,"template_sanad_receipt_id":null,"template_orbon_instrucation_bank_id":null,"template_orbon_instrucation_id":null,"template_sanad_tax_id":null,"template_sanad_contract_id":null,"template_contract_bank_brokerage_id":null,"template_contract_cash_fifty_id":null,"template_sanad_orbon_id":null,"view_web_site_all_project":false,"name":"\u0641\u064a\u0644\u062c - 1","description":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0641\u064a\u0644\u062c\u060c \u062c\u062a\u0645\u0639 \u0645\u062a\u0643\u0627\u0645\u0644 \u0628\u0623\u0633\u0644\u0648\u0628 \u0645\u064f\u062e\u062a\u0644\u0641\u060c \u0628\u0645\u062d\u064a\u0637 \u064a\u0636\u064f\u0645 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0648\u0627\u0644\u062a\u0631\u0641\u064a\u0647\u064a\u0629.\n\u064a\u062a\u0643\u0648\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0645\u0646 24 \u0645\u0628\u0646\u0649 338 \u0648\u062d\u062f\u0629 \u0633\u0643\u0646\u064a\u0629.\n\u064a\u062a\u0645\u064a\u0632 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0645\u0648\u0642\u0639 \u0645\u062b\u0627\u0644\u064a \u0648\u0633\u0637 \u0645\u062d\u064a\u0637 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0639\u064a\u0634\u064a\u0629 \u0644\u0645\u062c\u062a\u0645\u0639 \u0645\u062a\u0643\u0627\u0645\u0644 \u0648\u0631\u0641\u0627\u0647\u064a\u0629 \u0645\u0637\u0644\u0642\u0629\u060c \u064a\u0648\u0641\u0631 \u0645\u0634\u0631\u0648\u0639 \"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0641\u064a\u0644\u062c\" \u0644\u0633\u0643\u0627\u0646\u0647 \u0635\u0627\u0644\u0629 \u0644\u0627\u0648\u0646\u062c\u060c \u0648\u0645\u0633\u0627\u062d\u0627\u062a \u062e\u0636\u0631\u0627\u0621 \u062a\u062a\u0648\u0632\u0639 \u0639\u0644\u0649 \u0623\u0631\u0628\u0639 \u062d\u062f\u0627\u0626\u0642 \u062f\u0627\u062e\u0644\u064a\u0629 \u0628\u0645\u0633\u0627\u062d\u0629 4 \u0622\u0644\u0627\u0641 \u0645\u062a\u0631 \u0645\u0631\u0628\u0639\u060c \u0645\u0639 \u0625\u0637\u0644\u0627\u0644\u0627\u062a \u0644\u0623\u063a\u0644\u0628 \u0627\u0644\u0634\u0642\u0642 \u0639\u0644\u064a\u0647\u0627.\n\u0648\u0646\u0627\u062f\u064a \u0631\u064a\u0627\u0636\u064a \u0631\u062c\u0627\u0644\u064a \u0648\u0622\u062e\u0631 \u0646\u0633\u0627\u0626\u064a\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0647 \u0644\u0633\u0648\u0628\u0631 \u0645\u0627\u0631\u0643\u062a \u0644\u0636\u0645\u0627\u0646 \u062a\u0648\u0641\u064a\u0631 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u0645\u0648\u064a\u0646\u064a\u0629 \u0648\u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0644\u0644\u0633\u0643\u0627\u0646 \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0648\u064a\u0633\u0631.\n\u062d\u0636\u0627\u0646\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u060c \u0643\u0627\u0641\u064a\u0647\u060c \u0645\u063a\u0633\u0644\u0629 \u0645\u062c\u0644\u0633 \u0636\u064a\u0627\u0641\u0629 \u0645\u0639 \u0635\u0627\u0644\u0629 \u0637\u0639\u0627\u0645\u060c","en":""},"video":null,"units_delivery_date":null,"project_receipt_date":null,"image":"site\/projects\/BkwD6v5pPaQVBduBRj1XMJfWZW4dT6zhpRwcYvvs.jpg","code":"1","status":"sold","auto_receive_sales_support":true,"complete_map_percent":null,"is_sales_on_map":false,"allow_fifty_purchase_method":false,"government_user_id":null,"emptying_user_id":null,"sales_on_map_user_id":null,"owners_union_user_id":null,"latitude":"24.7804268","longitude":"46.5830478","view_web_site_unit_img":false,"pdf_file":"site\/pdf\/\u0641\u064a\u0644\u062c - 1.pdf","video_link":"https:\/\/www.youtube.com\/watch?v=CO5iPDyqNtU","banner_img":"site\/projects\/mQgNeqZ3c58sEkBUHqH6RdAY1BJ5LKNqKRt33eFY.jpg","thd_view":null,"display_name":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0641\u064a\u0644\u062c","en":"Al Majdiah Village"},"contractor_id":null,"advisor_id":null,"contractor_start_at":null,"contractor_contract_days":null,"contractor_contract_archive_id":null,"created_at":"2022-06-28","updated_at":"2024-07-10 11:09 AM","deleted_at":null,"designer_office":null,"supervising_office":null,"apartments_count":null,"villas_count":null,"view":null,"contractor_direct_start_at":null,"contractor_execution_end_at":null,"web_site_project_brochure":null,"web_site_project_brochure_en":null,"view_landing_page_features":false,"view_soon_for_sale_label":false,"view_landing_page_nav":false,"view_landing_page_units":false,"landing_page_logo":null,"image_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/BkwD6v5pPaQVBduBRj1XMJfWZW4dT6zhpRwcYvvs.jpg","banner_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/mQgNeqZ3c58sEkBUHqH6RdAY1BJ5LKNqKRt33eFY.jpg","video_url":null,"services_progress":0,"pdf_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/pdf\/\u0641\u064a\u0644\u062c - 1.pdf","comprehensive_warranty_years":0,"maintenance_cleaning_of_common_area_years":0,"status_text":"\u0645\u0628\u0627\u0639","can_swith_label_text":false,"type_text":null,"sum_expenses":null,"rent_cost_of_development":0,"rent_allocated_budget":0,"rent_cost_of_contractor":0,"contractor_end_at":null,"view_text":null,"sales_end_date_text":null,"sales_start_date_text":null,"allocated_budget":null,"allocated_budget_expenses":0,"sales_on_map_text":"\u0646\u0638\u0627\u0645\u064a","end_work_date":null,"percent_work_day":null,"diff_between_first_last_sale_days":304,"has_moyasar_conection":false,"web_hook_url":null,"landing_page_logo_url":null,"map_url":"https:\/\/www.google.com\/maps\/search\/?api=1&amp;query=24.7804268,46.5830478","land":{"id":152,"is_clone":false,"company_id":1,"land_owner_from_id":null,"land_owner_to_id":56,"move_type":"buy","lat":"24.780322","lng":"46.583109","city_id":874,"project_id":151,"title":"\u0623\u0631\u0636 \u0645\u0634\u0631\u0648\u0639 \u0641\u064a\u0644\u062c 1","space":null,"plan_number":"\u0628\u0644\u0643 86","chart_number":"3057","block_number":null,"meter_price":null,"price":null,"vat_number":null,"vat_amount":null,"vat_date":null,"vat_paid_date":null,"note":null,"created_at":"2022-06-28","updated_at":"2022-10-05 06:16 AM","deleted_at":null,"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u062d\u0637\u064a\u0646","move_type_text":"\u0634\u0631\u0627\u0621","block":{"id":874,"country_id":1,"name":"\u062d\u0637\u064a\u0646","parent_id":16,"created_at":null,"updated_at":"2023-02-21T08:21:39.000000Z","deleted_at":null,"city":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null},"region":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null}}}},"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/vPnE7yomLLzpfbRAA7TgF7R9J4J0XyRiPp9qhgdf.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/mHnm4ElmnS8GLKyiFLGF3KlsPO9IWr9xc0IaTsFL.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/QfAjfjpamD9WyiJhBDDIQR0inivDZ3I773RZf9KJ.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/0N99yU0mYqllnpyWdHVAAPQOIUM4pNs5mFpAC4A6.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/UeiZFr4CSfIGlDoz6dZKm1JGuhDNkMsUVS1p0JnO.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/n7Ro6saF4OwHHv8Phjzmjc3nXkP30XYDsN6JeO2M.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/SV6QewFy8H7x4UxTk8oZI3CPPraPXcStrL9pWzQw.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/w8G5tVXSBK2uKh6Fggzk5xqnqU1mrLnEeqM7jqPR.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/caNrXd9ksVXpZDUH2obDhVC7NrrjKD6jxUtSeL0C.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/oJNpwbAMOjXlyMIVXN13m4pJG1tednBvw7xcm1x2.jpg"],"project_image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/BkwD6v5pPaQVBduBRj1XMJfWZW4dT6zhpRwcYvvs.jpg","one_batches_price":125000,"two_batches_price":140000,"insurance":"5000","address":"\u062d\u0637\u064a\u0646 - \u0627\u0644\u0631\u064a\u0627\u0636","area":"\u0627\u0644\u0631\u064a\u0627\u0636","regionBlock":"\u062d\u0637\u064a\u0646","region":"\u0627\u0644\u0631\u064a\u0627\u0636"},{"id":1405,"unit_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 139 B - I 1","bedrooms_count":3,"bathrooms_count":3,"halls_design_text":"\u0645\u062c\u0644\u0633 \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u0635\u0627\u0644\u0629","is_has_maid_room":1,"is_has_storage_room":0,"is_has_roof":1,"is_has_rather":0,"parking_text":"\u0645\u0648\u0642\u0641 \u0642\u0628\u0648","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":0,"is_furnished":0,"unit_map_url":"https:\/\/maps.app.goo.gl\/CXg9JghKq7cGJC536","total_area":"174.94","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a","view":null,"unit_description":"","project":{"id":170,"is_clone":false,"is_archiving":false,"moyasar_api_key":"sk_live_iFA3Cbb1sFVyxS8FGPoztmcQJpGmqaQihYGpt4yx","moyasar_api_publishable_key":"pk_live_2k8qSfyhhNYhSoF7Vm55vZtf5qKjhxTApuxTYcAL","bank_id":null,"bank_iban":null,"developer_name":"\u0634\u0631\u0643\u0629 \u062f\u0627\u0631 \u0627\u0644\u0645\u0627\u062c\u062f \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u0629","type":null,"owner_id":null,"steps_completed_percent":70,"sales_start_date":null,"first_sale_date":"2023-07-20","last_sale_date":"2024-02-19","duration_of_foundations_concrete_guarantee":null,"sales_end_date":null,"project_manager_user_id":null,"work_days":null,"receipt_delivery_place":null,"start_work_date":null,"company_id":1,"project_category_id":1,"license_number":"6511","project_area":0,"offices_num":0,"shops_num":0,"view_landing_page":false,"landing_page_paragraph":{"ar":"","en":""},"view_web_site_latest_project":false,"view_web_site_if_sold":true,"view_web_site_attention_request":true,"view_web_site_units":true,"view_web_site_label":false,"has_financing_solutions":false,"sales_on_mp_license_date":null,"sales_on_mp_license_number":null,"cost_of_development":19980000,"cost_of_development_expenses":null,"cost_of_contractor":16750000,"cost_of_contractor_expenses":null,"sub_project_step_id":728,"main_project_step_id":717,"template_sanad_brokerage_bank_id":10,"template_sanad_orbon_bank_id":11,"template_sanad_bank_id":null,"template_sanad_brokerage_id":7,"maintenance_cleaning_of_common_area_period_to":null,"maintenance_cleaning_of_common_area_period_from":null,"comprehensive_warranty_period_to":null,"comprehensive_warranty_period_from":null,"template_print_model_id":8,"template_sanad_receipt_id":4,"template_orbon_instrucation_bank_id":null,"template_orbon_instrucation_id":null,"template_sanad_tax_id":2,"template_sanad_contract_id":39,"template_contract_bank_brokerage_id":null,"template_contract_cash_fifty_id":null,"template_sanad_orbon_id":1,"view_web_site_all_project":false,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 139 B","description":{"ar":"\u0641\u064a \u062d\u064a \u0627\u0644\u0645\u0644\u0642\u0627\u060c 4 \u0645\u0628\u0627\u0646\u064a\u060c \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u062a\u0633\u0645\u062d \u0644\u0643 \u0628\u0639\u064a\u0634 \u062a\u062c\u0631\u0628\u0629 \u0645\u0645\u064a\u0632\u0629.\n48 \u0634\u0642\u0629 \u0648 6 \u062a\u0627\u0648\u0646 \u0647\u0627\u0648\u0633 \u0645\u062a\u0648\u0641\u0631\u0629 \u0628\u0634\u062a\u0649 \u0627\u0644\u0623\u062d\u062c\u0627\u0645 \u062a\u0648\u0641\u0631 \u0644\u0643 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c \u0648\u0623\u0643\u062b\u0631. \u062d\u0640\u0640\u0627\u0632 \u0645\u0634\u0640\u0640\u0631\u0648\u0639 \u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0640\u0640\u0629 \u0631\u064a\u0632\u062f\u0646\u0640\u0640\u0633 139\u0639\u0644\u0640\u0640\u0649 \u0634\u0640\u0640\u0647\u0627\u062f\u0629 \u0627\u0644\u062c\u0640\u0640\u0648\u062f\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0640\u0640\u0629 \u0627\u0644\u0645\u0642\u062f\u0645\u0640\u0640\u0629 \u0645\u0640\u0640\u0646 \u0634\u0640\u0640\u0631\u0643\u0629 \u0628\u064a\u0640\u0640\u0631\u0648 \u0641\u064a\u0631\u064a\u062a\u0640\u0640\u0627\u0633 \u0627\u0644\u0641\u0631\u0646\u0633\u0640\u0640\u064a\u0629 \u0648\u0627\u0644\u062a\u0640\u064a \u062a\u0648\u0654\u0643\u0640\u062f \u062a\u0637\u0627\u0628\u0640\u0642 \u062c\u0640\u0648\u062f\u0629 \u0627\u0644\u062a\u0646\u0641\u064a\u0640\u0630 \u062d\u0633\u0640\u0628 \u0627\u0644\u0645\u062e\u0637\u0637\u0640\u0627\u062a \u0627\u0644\u0645\u0639\u062a\u0645\u0640\u062f\u0629 \u0648\u0643\u0648\u062f \u0627\u0644\u0628\u0646\u0627\u0621 \u0627\u0644\u0633\u0639\u0648\u062f\u064a.","en":""},"video":null,"units_delivery_date":"2024-04-01","project_receipt_date":null,"image":"site\/projects\/uOPcUcvZzBeMGKMv8hY1KLtCi2WgvqBT5aewa7a6.jpg","code":"139 B","status":"under_sale","auto_receive_sales_support":true,"complete_map_percent":100,"is_sales_on_map":true,"allow_fifty_purchase_method":false,"government_user_id":null,"emptying_user_id":null,"sales_on_map_user_id":null,"owners_union_user_id":null,"latitude":"24.796854","longitude":"46.615686","view_web_site_unit_img":true,"pdf_file":"site\/pdf\/\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 139 B.pdf","video_link":null,"banner_img":"site\/projects\/svVYjQJSCM51for5mEUaToDtn8xl3sBEsRQKjmn4.jpg","thd_view":null,"display_name":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 139 B","en":"Al Majdiah Residence 139B"},"contractor_id":null,"advisor_id":null,"contractor_start_at":null,"contractor_contract_days":null,"contractor_contract_archive_id":null,"created_at":"2022-07-04","updated_at":"2024-07-11 10:52 AM","deleted_at":null,"designer_office":null,"supervising_office":null,"apartments_count":null,"villas_count":null,"view":null,"contractor_direct_start_at":null,"contractor_execution_end_at":null,"web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1O5MdRlz9KrwaBWPZNctaUSfnzuU5ruUP\/view?usp=sharing","web_site_project_brochure_en":null,"view_landing_page_features":false,"view_soon_for_sale_label":true,"view_landing_page_nav":false,"view_landing_page_units":false,"landing_page_logo":null,"image_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/uOPcUcvZzBeMGKMv8hY1KLtCi2WgvqBT5aewa7a6.jpg","banner_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/svVYjQJSCM51for5mEUaToDtn8xl3sBEsRQKjmn4.jpg","video_url":null,"services_progress":0,"pdf_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/pdf\/\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 139 B.pdf","comprehensive_warranty_years":0,"maintenance_cleaning_of_common_area_years":0,"status_text":"\u062a\u062d\u062a \u0627\u0644\u0628\u064a\u0639","can_swith_label_text":false,"type_text":null,"sum_expenses":null,"rent_cost_of_development":19980000,"rent_allocated_budget":3230000,"rent_cost_of_contractor":16750000,"contractor_end_at":null,"view_text":null,"sales_end_date_text":null,"sales_start_date_text":null,"allocated_budget":3230000,"allocated_budget_expenses":0,"sales_on_map_text":"\u0628\u064a\u0639 \u0639\u0644\u064a \u0627\u0644\u062e\u0627\u0631\u0637\u0629","end_work_date":null,"percent_work_day":null,"diff_between_first_last_sale_days":214,"has_moyasar_conection":true,"web_hook_url":"https:\/\/etmaam.almajdiah.sa\/api\/client\/v1\/moyasar\/webhook\/170","landing_page_logo_url":null,"map_url":"https:\/\/www.google.com\/maps\/search\/?api=1&amp;query=24.796854,46.615686","land":{"id":173,"is_clone":false,"company_id":1,"land_owner_from_id":14,"land_owner_to_id":4,"move_type":"buy","lat":null,"lng":null,"city_id":829,"project_id":170,"title":"139 B","space":4500,"plan_number":"261-262-263","chart_number":"3175","block_number":"017","meter_price":0,"price":0,"vat_number":"000","vat_amount":0,"vat_date":"0001-01-01","vat_paid_date":null,"note":null,"created_at":"2022-07-03","updated_at":"2022-10-05 06:16 AM","deleted_at":null,"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0645\u0644\u0642\u0627","move_type_text":"\u0634\u0631\u0627\u0621","block":{"id":829,"country_id":1,"name":"\u0627\u0644\u0645\u0644\u0642\u0627","parent_id":16,"created_at":null,"updated_at":"2023-02-21T08:21:38.000000Z","deleted_at":null,"city":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null},"region":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null}}}},"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/jiG6y7CYkcoptyJTmmLfDr6BrVNqZOUf6lmG2XIg.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/R0PD0mXT0NsIlN9QlgbeNVuZEvR6pGKSCj1iFOAL.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/vgmJGypGYHwjjwJnf145B0cLS7hZkf0u3i4QB8Lx.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/PerQ2GHciHUjTb2ZEGc3EhSFTyzVgWq76TaawyA3.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/n6yzAN8LNtD30WKGkRQRBzlKRhcyE1szRFNMmN7Z.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/W95TGLOfsjThTyLTSGlqcXyXAGopc1EMwiTNQiQk.jpg"],"project_image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/uOPcUcvZzBeMGKMv8hY1KLtCi2WgvqBT5aewa7a6.jpg","one_batches_price":95000,"two_batches_price":105000,"insurance":"3000","address":"\u0627\u0644\u0645\u0644\u0642\u0627 - \u0627\u0644\u0631\u064a\u0627\u0636","area":"\u0627\u0644\u0631\u064a\u0627\u0636","regionBlock":"\u0627\u0644\u0645\u0644\u0642\u0627","region":"\u0627\u0644\u0631\u064a\u0627\u0636"},{"id":1179,"unit_name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 123 - D 7","bedrooms_count":3,"bathrooms_count":3,"halls_design_text":"\u0645\u062c\u0644\u0633 \u0645\u0641\u062a\u0648\u062d \u0639\u0644\u0649 \u0627\u0644\u0635\u0627\u0644\u0629","is_has_maid_room":0,"is_has_storage_room":1,"is_has_roof":0,"is_has_rather":0,"parking_text":"\u0645\u0648\u0642\u0641 \u0642\u0628\u0648","is_has_air_conditioning":1,"is_has_kitchen":1,"is_kitchen_has_apps":0,"is_furnished":0,"unit_map_url":null,"total_area":"127.2","floor_text":"\u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0648\u0644","view":null,"unit_description":"\u0645\u0637\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062d\u062f\u064a\u0642\u0629 - \u0645\u0633\u062a\u0648\u062f\u0639","project":{"id":155,"is_clone":false,"is_archiving":false,"moyasar_api_key":"sk_live_cdJvg9YKUqJhKL7jiW7iJCfHZ5RLzsKLar44JBVr","moyasar_api_publishable_key":"pk_live_9VHKojGBXwdiqCVxs5RXtGr6VtRXtGEdgBF3TxJp","bank_id":4,"bank_iban":"SA9180000166608010037646","developer_name":null,"type":null,"owner_id":89,"steps_completed_percent":70,"sales_start_date":"2023-07-20","first_sale_date":"2023-07-25","last_sale_date":"2024-06-27","duration_of_foundations_concrete_guarantee":null,"sales_end_date":null,"project_manager_user_id":null,"work_days":null,"receipt_delivery_place":null,"start_work_date":null,"company_id":1,"project_category_id":1,"license_number":"6259","project_area":0,"offices_num":0,"shops_num":0,"view_landing_page":false,"landing_page_paragraph":{"en":""},"view_web_site_latest_project":false,"view_web_site_if_sold":true,"view_web_site_attention_request":true,"view_web_site_units":true,"view_web_site_label":false,"has_financing_solutions":true,"sales_on_mp_license_date":null,"sales_on_mp_license_number":null,"cost_of_development":18700000,"cost_of_development_expenses":18187986.72,"cost_of_contractor":17110000,"cost_of_contractor_expenses":17174523.93,"sub_project_step_id":79,"main_project_step_id":68,"template_sanad_brokerage_bank_id":10,"template_sanad_orbon_bank_id":11,"template_sanad_bank_id":17,"template_sanad_brokerage_id":7,"maintenance_cleaning_of_common_area_period_to":"2024-12-01","maintenance_cleaning_of_common_area_period_from":"2023-12-01","comprehensive_warranty_period_to":"2024-12-01","comprehensive_warranty_period_from":"2023-12-01","template_print_model_id":8,"template_sanad_receipt_id":4,"template_orbon_instrucation_bank_id":null,"template_orbon_instrucation_id":null,"template_sanad_tax_id":2,"template_sanad_contract_id":3,"template_contract_bank_brokerage_id":16,"template_contract_cash_fifty_id":null,"template_sanad_orbon_id":1,"view_web_site_all_project":false,"name":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 123","description":{"en":""},"video":null,"units_delivery_date":"2023-12-01","project_receipt_date":null,"image":"site\/projects\/UA9srBdJDtWT6K0Yg4Ee8Z0WGTV92zepGC2wMfqp.jpg","code":"123","status":"under_sale","auto_receive_sales_support":true,"complete_map_percent":100,"is_sales_on_map":false,"allow_fifty_purchase_method":false,"government_user_id":null,"emptying_user_id":null,"sales_on_map_user_id":null,"owners_union_user_id":null,"latitude":"24.842350","longitude":"46.677137","view_web_site_unit_img":true,"pdf_file":"site\/pdf\/\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 123.pdf","video_link":"https:\/\/youtu.be\/djOhYnI57uo","banner_img":"site\/projects\/rYueaOwCg3jsDY4PeZwHJeGwNu1o5h9EpBkNNbAq.jpg","thd_view":null,"display_name":{"ar":"\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 123","en":"Almajdiah residence 123"},"contractor_id":207,"advisor_id":212,"contractor_start_at":"2021-02-21","contractor_contract_days":null,"contractor_contract_archive_id":null,"created_at":"2022-07-03","updated_at":"2024-07-01 01:29 PM","deleted_at":null,"designer_office":"\u0645\u062e\u062a\u0644\u0641","supervising_office":"\u0645\u062e\u062a\u0644\u0641","apartments_count":59,"villas_count":null,"view":"european","contractor_direct_start_at":"2022-06-01","contractor_execution_end_at":"2023-07-01","web_site_project_brochure":"https:\/\/drive.google.com\/file\/d\/1u2r35GnbGlnOvwhUp9mu6V1OD9JAh9QE\/view?usp=sharing","web_site_project_brochure_en":null,"view_landing_page_features":false,"view_soon_for_sale_label":true,"view_landing_page_nav":false,"view_landing_page_units":false,"landing_page_logo":null,"image_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/UA9srBdJDtWT6K0Yg4Ee8Z0WGTV92zepGC2wMfqp.jpg","banner_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/rYueaOwCg3jsDY4PeZwHJeGwNu1o5h9EpBkNNbAq.jpg","video_url":null,"services_progress":0,"pdf_url":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/pdf\/\u0627\u0644\u0645\u0627\u062c\u062f\u064a\u0629 \u0631\u064a\u0632\u062f\u0646\u0633 - 123.pdf","comprehensive_warranty_years":1,"maintenance_cleaning_of_common_area_years":1,"status_text":"\u062a\u062d\u062a \u0627\u0644\u0628\u064a\u0639","can_swith_label_text":false,"type_text":null,"sum_expenses":18187986.72,"rent_cost_of_development":512013.2800000012,"rent_allocated_budget":576537.2100000009,"rent_cost_of_contractor":-64523.9299999997,"contractor_end_at":null,"view_text":"\u0623\u0648\u0631\u0648\u0628\u064a","sales_end_date_text":null,"sales_start_date_text":"2023-07-20","allocated_budget":1590000,"allocated_budget_expenses":1013462.7899999991,"sales_on_map_text":"\u0646\u0638\u0627\u0645\u064a","end_work_date":null,"percent_work_day":null,"diff_between_first_last_sale_days":338,"has_moyasar_conection":true,"web_hook_url":"https:\/\/etmaam.almajdiah.sa\/api\/client\/v1\/moyasar\/webhook\/155","landing_page_logo_url":null,"map_url":"https:\/\/www.google.com\/maps\/search\/?api=1&amp;query=24.842350,46.677137","land":{"id":158,"is_clone":false,"company_id":1,"land_owner_from_id":14,"land_owner_to_id":62,"move_type":"buy","lat":null,"lng":null,"city_id":845,"project_id":155,"title":"123","space":4359.35,"plan_number":"2408\/\u0623","chart_number":"2737","block_number":"000","meter_price":0,"price":0,"vat_number":"000","vat_amount":0,"vat_date":"0001-01-01","vat_paid_date":null,"note":null,"created_at":"2022-06-30","updated_at":"2023-08-17 09:49 AM","deleted_at":null,"address":"\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u0646\u0631\u062c\u0633","move_type_text":"\u0634\u0631\u0627\u0621","block":{"id":845,"country_id":1,"name":"\u0627\u0644\u0646\u0631\u062c\u0633","parent_id":16,"created_at":null,"updated_at":"2023-02-21T08:21:38.000000Z","deleted_at":null,"city":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null},"region":{"id":16,"country_id":1,"name":"\u0627\u0644\u0631\u064a\u0627\u0636","parent_id":1,"created_at":null,"updated_at":null,"deleted_at":null}}}},"images":["https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/AFA3r55PgDO7gyvZm9PKqhdAB0zpzmVnKX7fm7Uz.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/kVXBXujvTj8dMEMCKTyIyfMeW0KytAqqF8DVnagQ.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/xLhzCgGNuO9TP5nf8VmDSEdVuTSOEs0f1YYp4PjA.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/KQ7djlUSOhGzmZWc9K8edKb6hp5EoZqVR2oufYkF.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/CMOk2UYTFrM9YlVTlRzWe9OaprITi9zhrdkUv88i.jpg","https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/rental_request_unit_images\/6b6iEqW4y3WFfnCN7pq9Y9kYTHeq1jtNYelfO3sW.jpg"],"project_image":"https:\/\/minio.almajdiah.sa:9000\/etmaam-public\/site\/projects\/UA9srBdJDtWT6K0Yg4Ee8Z0WGTV92zepGC2wMfqp.jpg","one_batches_price":70000,"two_batches_price":75000,"insurance":"2500","address":"\u0627\u0644\u0646\u0631\u062c\u0633 - \u0627\u0644\u0631\u064a\u0627\u0636","area":"\u0627\u0644\u0631\u064a\u0627\u0636","regionBlock":"\u0627\u0644\u0646\u0631\u062c\u0633","region":"\u0627\u0644\u0631\u064a\u0627\u0636"}]}}},"url":"\/","version":"b2dbbc765eb5e136650ac9d777a271a8"}'
    data-v-app=""
  >
    <div class="min-h-screen bg-secondary-50 dark:bg-gray-900">
      <!---->
      <nav
        class="bg-black shadow-lg z-[99999] font-header font-bold sticky top-0 w-full"
      >
        <div class="md:container px-4 m-auto">
          <div class="flex justify-between h-16 lg:h-20">
            <div class="flex grow">
              <div class="w-40 xl:w-64">
                <a href="https://almajdiah.com" class="block h-full py-2"
                  ><img
                    src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/VmyJSVcSg346Kz5TFlSLDFnZtTgzbF5hdcZnS21G.png"
                    alt="home"
                    class="lg:w-full xl:w-auto h-full brightness-0 invert"
                /></a>
              </div>
              <div
                class="hidden grow flex-shrink lg:flex space-x-reverse space-x-4 mx-8"
              >
                <a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition text-primary-500"
                  href="https://almajdiah.com/"
                  >الرئيسية</a
                ><a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                  href="https://almajdiah.com/projects"
                  >المشاريع</a
                ><a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                  href="https://almajdiah.com/rentals"
                  >وحدات للإيجار</a
                ><a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                  href="https://almajdiah.com/blog"
                  >المدونة</a
                ><a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                  href="https://almajdiah.com/about-us"
                  >من نحن</a
                ><a
                  class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
                  href="https://almajdiah.com/contact-us"
                  >تواصل معنا</a
                >
              </div>
              <div
                class="hidden grow lg:flex justify-end items-center rtl:space-x-reverse space-x-4 text-primary-500 relative"
              >
                <a
                  class="p-1 leading-[10px]"
                  href="https://almajdiah.com/compare"
                  ><svg
                    class="w-6 h-6 text-primary-500 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <defs></defs>
                    <title>مقارنة</title>
                    <path
                      d="M28,6H18V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H14v2a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,15h6.17L7.59,17.59,9,19l5-5L9,9,7.59,10.41,10.17,13H4V4H16V24H4ZM16,28V26a2,2,0,0,0,2-2V8H28v9H21.83l2.58-2.59L23,13l-5,5,5,5,1.41-1.41L21.83,19H28v9Z"
                      transform="translate(0)"
                    ></path>
                    <rect
                      id="_Transparent_Rectangle_"
                      data-name="<Transparent Rectangle>"
                      class="cls-1"
                      width="32"
                      height="32"
                      style="fill: none"
                    ></rect></svg
                  ><br />
                  مقارنة</a
                ><a
                  class="p-1 text-center leading-[10px]"
                  href="https://almajdiah.com/login"
                  ><svg
                    class="w-6 h-6 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <defs></defs>
                    <title>user--filled</title>
                    <path
                      d="M6,30H26V25a7.0082,7.0082,0,0,0-7-7H13a7.0082,7.0082,0,0,0-7,7Z"
                      transform="translate(0 0)"
                    ></path>
                    <path
                      d="M9,9a7,7,0,1,0,7-7A7,7,0,0,0,9,9Z"
                      transform="translate(0 0)"
                    ></path>
                    <rect
                      id="_Transparent_Rectangle_"
                      data-name="<Transparent Rectangle>"
                      class="cls-1"
                      width="32"
                      height="32"
                      style="fill: none"
                    ></rect></svg
                  ><br />
                  دخول</a
                ><button class="items-center font-medium">
                  <svg
                    class="svg-inline--fa fa-globe text-xl mx-1 mt-[12px] leading-[10px]"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      class=""
                      fill="currentColor"
                      d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                    ></path></svg
                  ><br />
                  AR
                </button>
              </div>
            </div>
            <div class="-mr-2 flex-shrink-0 flex items-center lg:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <img
                  src="https://almajdiah.com/images/menu-bars.png"
                  class="w-6"
                  alt="menu bars"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="hidden lg:hidden">
          <div class="pt-2 pb-3 space-y-1 px-3">
            <a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition text-primary-500"
              href="https://almajdiah.com/"
              >الرئيسية</a
            ><a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
              href="https://almajdiah.com/projects"
              >المشاريع</a
            ><a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
              href="https://almajdiah.com/rentals"
              >وحدات للإيجار</a
            ><a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
              href="https://almajdiah.com/blog"
              >المدونة</a
            ><a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
              href="https://almajdiah.com/about-us"
              >من نحن</a
            ><a
              class="block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition"
              href="https://almajdiah.com/contact-us"
              >تواصل معنا</a
            ><a
              class="p-1 block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition p-1"
              href="https://almajdiah.com/login"
              >تسجيل الدخول</a
            ><a
              class="flex items-center block py-3 px-3 lg:inline-flex items-center lg:py-1 text-lg font-ge-dinar-medium leading-5 text-white transition flex items-center"
              href=""
              ><div class="block">
                <svg
                  class="svg-inline--fa fa-globe text-xl mx-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="globe"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    class=""
                    fill="currentColor"
                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                  ></path>
                </svg>
                AR
              </div></a
            >
          </div>
        </div>
      </nav>
      <main class="font-content">
       
        <div>
          <iframe
            class="w-full aspect-[16/9]"
            src="https://www.youtube.com/embed/ND5VMPISIKQ?playlist=ND5VMPISIKQ&amp;autoplay=1&amp;loop=1&amp;mute=1"
            frameborder="0"
            allowfullscreen=""
            autoplay="1"
            allow="xr-spatial-tracking; accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          ></iframe>
        </div>
        <section class="my-8">
          <div class="md:container px-4 m-auto">
            <div class="text-center mb-3 lg:mb-5">
              <svg
                class="inline-block w-6 h-6 lg:w-10 lg:h-10"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="12"
                height="17.433"
                viewBox="0 0 12 17.433"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_14058"
                      data-name="Rectangle 14058"
                      width="12"
                      height="17.433"
                      fill="none"
                      stroke="#707070"
                      stroke-width="0.75"
                    ></rect>
                  </clipPath>
                </defs>
                <g
                  id="Group_11582"
                  data-name="Group 11582"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_11581"
                    data-name="Group 11581"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <line
                      id="Line_153"
                      data-name="Line 153"
                      y1="10.531"
                      x2="7.951"
                      transform="translate(3.941 0.081)"
                      fill="none"
                      stroke="#a4874c"
                      stroke-miterlimit="10"
                      stroke-width="0.75"
                    ></line>
                    <line
                      id="Line_154"
                      data-name="Line 154"
                      y1="10.531"
                      x2="7.951"
                      transform="translate(0.107 6.821)"
                      fill="none"
                      stroke="#a4874c"
                      stroke-miterlimit="10"
                      stroke-width="0.75"
                    ></line>
                  </g>
                </g>
              </svg>
              <h1
                class="inline-block text-xl font-header md:text-2xl px-1.5 lg:text-4xl font-ge-dinar-medium leading-none text-black dark:text-white"
              >
                مشاريعنا
              </h1>
            </div>
            <div class="flex items-center justify-center pb-5 lg:pb-6">
              <span
                class="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer border-b-2 font-bold"
                >المتاحة</span
              ><span
                class="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer"
                >القادمة</span
              ><span
                class="text-lg md:text-xl font-header lg:text-2xl mx-3 pb-1 lg:pb-2 border-black cursor-pointer"
                >للإيجار</span
              >
            </div>
            <div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/195"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/JdMRUKEOVoqCHAhtq4E9z0Mj5XlEhKs3CtaCgEug.jpg"
                        alt="الماجدية ريزدنس 156"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <div></div>
                    
                      </div>
                   
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="156"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >156</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - الندى</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/192"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/Msb7hLZsOkTTBrAaAL9yOIhtF8Bm0IxQlbJRKXAV.jpg"
                        alt="الماجدية ريزدنس 155"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div></div>
                   
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="155"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >155</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - عرقة</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/183"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/69AsJSBl9F288ujhp9oeUegkHmLWyiw76xBQdYPF.jpg"
                        alt="الماجدية ريزدنس 147"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <div></div>
                       
                      </div>
                     
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="147"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >147</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النرجس</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/179"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/NKNCOHbRwoleDpQSpwn3qVlrqyVufcXV5a4IdRi9.jpg"
                        alt="الماجدية ريزدنس 146"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      /><img
                        src="https://almajdiah.com/images/discount_label.png"
                        alt="project sold"
                        class="absolute -top-1 -left-2 m-auto w-36"
                      />
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="146"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >146</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النرجس</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/176"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/Wj4JCLKQ4Lewq1aYkHSocCcBMLiqCFedbnYVbqYb.jpg"
                        alt="الماجدية ريزدنس 144"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <img
                          src="https://almajdiah.com/images/project-state-on_map-ar.png"
                          alt="project sale on map"
                          class="absolute -left-2 -top-2 w-36"
                        />
                      </div>
                    
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="144"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >144</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النرجس</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/175"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/LB06FmZXUbbL7ZqgoWAE5vZJnNdCj85Nmx025QSL.jpg"
                        alt="الماجدية ريزدنس 143"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      /><img
                        src="https://almajdiah.com/images/discount_label.png"
                        alt="project sold"
                        class="absolute -top-1 -left-2 m-auto w-36"
                      />
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="143"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >143</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - الحمراء</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/172"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/JUtCUo3GhD7yOwHz6NzVSzaruSRB4fAEbylTCGED.jpg"
                        alt="الماجدية ريزدنس 140"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <img
                          src="https://almajdiah.com/images/project-state-on_map-ar.png"
                          alt="project sale on map"
                          class="absolute -left-2 -top-2 w-36"
                        />
                      </div>
                    
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="140"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >140</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النرجس</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/171"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/7VFe9C8a5UgSgD4fF8klD43sAC0t4nr80CcUobs4.jpg"
                        alt="الماجدية ريزدنس 139C"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <div></div>
                       
                      </div>
                   
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="139 C"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >139 C</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - الملقا</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/168"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/F3ofVvmyxwjLE5jnKAnMe2SPltayFozIfB78fho5.jpg"
                        alt="الماجدية ريزدنس 138"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      /><img
                        src="https://almajdiah.com/images/discount_label.png"
                        alt="project sold"
                        class="absolute -top-1 -left-2 m-auto w-36"
                      /><!---->
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="138"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >138</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النزهة</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/163"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/RXUaQocuLaP0mV9SrUg6ltyDRNNzk1jO5mLLUBzR.jpg"
                        alt="الماجدية ريزدنس 132"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />
                      <div>
                        <div></div>
                      
                      </div>
                    
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="132"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >132</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - المروج</span
                        >
                      </div>
                    </div></a
                  >
                </div>
                <div class="group shadow bg-white overflow-hidden rounded-lg">
                  <a
                    class="block mb-2 text-secondary-500"
                    href="https://almajdiah.com/projects/160"
                    ><div
                      class="rounded-tl-lg rounded-tr-lg cursor-pointer relative"
                    >
                      <img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/site/projects/V7KaSIpiDdmB16995WRy1mYxDtWC13YzZ68njW1Q.jpg"
                        alt="الماجدية ريزدنس 129"
                        class="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      /><img
                        src="https://almajdiah.com/images/discount_label.png"
                        alt="project sold"
                        class="absolute -top-1 -left-2 m-auto w-36"
                      />
                    </div>
                    <div class="py-2 px-3 flex justify-between items-center">
                      <div class="flex content-center items-center">
                        <img
                          src="https://almajdiah.com/images/project-category-1-ar.png"
                          class="w-12 xs:w-12 lg:w-14 xl:w-20 inline-block dark:invert dark:brightness-0"
                          alt="129"
                        /><span
                          class="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2"
                          >129</span
                        >
                      </div>
                      <div class="text-primary-500">
                        <svg
                          class="w-3 xl:w-6 xl:h-6 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="10.799"
                          height="17.247"
                          viewBox="0 0 10.799 17.247"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_13947"
                                data-name="Rectangle 13947"
                                width="10.799"
                                height="17.247"
                                fill="currentColor"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g
                            id="Group_11453"
                            data-name="Group 11453"
                            transform="translate(0 0)"
                          >
                            <g
                              id="Group_11452"
                              data-name="Group 11452"
                              transform="translate(0 0)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Path_71"
                                data-name="Path 71"
                                d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                                transform="translate(0 0)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g></svg
                        ><span
                          class="text-sm font lg:text-base px-0.5 font-ge-dinar-medium"
                          >الرياض - النرجس</span
                        >
                      </div>
                    </div></a
                  >
                </div>
              </div>
              <div class="mt-4 lg:my-8 text-center">
                <a
                  class="text-black dark:text-white text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-6 border border-black dark:border-white inline-block"
                  href="https://almajdiah.com/projects"
                  >مزيد من المشاريع</a
                >
              </div>
             
            </div>
          </div>
        </section>
        <div class="relative">
          <div
            id="map"
            class="aspect-[5/4] md:aspect-[5/3] lg:aspect-[5/2.2] mb-8 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-touch-zoom"
            tabindex="0"
            data-gesture-handling-touch-content="Use two fingers to move the map"
            data-gesture-handling-scroll-content="Use ctrl + scroll to zoom the map"
            style="position: relative"
          >
            <div
              class="leaflet-pane leaflet-map-pane"
              style="transform: translate3d(-550px, -167px, 0px)"
            >
              <div class="leaflet-pane leaflet-tile-pane">
                <div class="leaflet-layer" style="z-index: 1; opacity: 1">
                  <div
                    class="leaflet-tile-container leaflet-zoom-animated"
                    style="
                      z-index: 18;
                      transform: translate3d(0px, 0px, 0px) scale(1);
                    "
                  >
                    <img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2578/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(526px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2578/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(526px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2577/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(270px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2579/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(782px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2578/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(526px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2577/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(270px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2579/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(782px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2577/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(270px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2579/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(782px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2576/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(14px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2580/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1038px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2576/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(14px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2580/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1038px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2576/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(14px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2580/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1038px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2575/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(-242px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2581/1756.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1294px, 171px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2575/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(-242px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2581/1755.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1294px, -85px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2575/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(-242px, 427px, 0px);
                        opacity: 1;
                      "
                    /><img
                      alt=""
                      src="https://tile.thunderforest.com/transport/12/2581/1757.png?apikey=6170aad10dfd42a38d4d8c709a536f38"
                      class="leaflet-tile leaflet-tile-loaded"
                      style="
                        width: 256px;
                        height: 256px;
                        transform: translate3d(1294px, 427px, 0px);
                        opacity: 1;
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="leaflet-pane leaflet-overlay-pane"></div>
              <div class="leaflet-pane leaflet-shadow-pane"></div>
              <div class="leaflet-pane leaflet-marker-pane">
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(511px, 704px, 0px);
                    z-index: 704;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-soon_for_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(591px, 270px, 0px);
                    z-index: 270;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(560px, 280px, 0px);
                    z-index: 280;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(1024px, 465px, 0px);
                    z-index: 465;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(715px, 218px, 0px);
                    z-index: 218;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(584px, 281px, 0px);
                    z-index: 281;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(576px, 238px, 0px);
                    z-index: 238;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(853px, 415px, 0px);
                    z-index: 415;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(568px, 285px, 0px);
                    z-index: 285;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(555px, 295px, 0px);
                    z-index: 295;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(726px, 215px, 0px);
                    z-index: 215;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(937px, 427px, 0px);
                    z-index: 427;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(647px, 251px, 0px);
                    z-index: 251;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(592px, 285px, 0px);
                    z-index: 285;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(789px, 345px, 0px);
                    z-index: 345;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(655px, 419px, 0px);
                    z-index: 419;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(724px, 372px, 0px);
                    z-index: 372;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(869px, 454px, 0px);
                    z-index: 454;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(554px, 306px, 0px);
                    z-index: 306;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(592px, 278px, 0px);
                    z-index: 278;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(925px, 381px, 0px);
                    z-index: 381;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(564px, 278px, 0px);
                    z-index: 278;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(707px, 535px, 0px);
                    z-index: 535;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(716px, 219px, 0px);
                    z-index: 219;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(550px, 273px, 0px);
                    z-index: 273;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(573px, 299px, 0px);
                    z-index: 299;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(581px, 300px, 0px);
                    z-index: 300;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(575px, 302px, 0px);
                    z-index: 302;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(583px, 270px, 0px);
                    z-index: 270;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(673px, 610px, 0px);
                    z-index: 610;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(869px, 410px, 0px);
                    z-index: 410;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(724px, 215px, 0px);
                    z-index: 215;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(739px, 208px, 0px);
                    z-index: 208;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(571px, 245px, 0px);
                    z-index: 245;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(711px, 525px, 0px);
                    z-index: 525;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(855px, 416px, 0px);
                    z-index: 416;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(559px, 292px, 0px);
                    z-index: 292;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(558px, 293px, 0px);
                    z-index: 293;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(540px, 417px, 0px);
                    z-index: 417;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(587px, 276px, 0px);
                    z-index: 276;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(857px, 415px, 0px);
                    z-index: 415;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(571px, 245px, 0px);
                    z-index: 245;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(577px, 206px, 0px);
                    z-index: 206;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(882px, 386px, 0px);
                    z-index: 386;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(867px, 427px, 0px);
                    z-index: 427;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(744px, 397px, 0px);
                    z-index: 397;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(578px, 661px, 0px);
                    z-index: 661;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(675px, 625px, 0px);
                    z-index: 625;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(893px, 382px, 0px);
                    z-index: 382;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(784px, 347px, 0px);
                    z-index: 347;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(573px, 227px, 0px);
                    z-index: 227;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(580px, 210px, 0px);
                    z-index: 210;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(557px, 309px, 0px);
                    z-index: 309;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(877px, 406px, 0px);
                    z-index: 406;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(563px, 305px, 0px);
                    z-index: 305;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(1027px, 486px, 0px);
                    z-index: 486;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(593px, 276px, 0px);
                    z-index: 276;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(932px, 458px, 0px);
                    z-index: 458;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(594px, 585px, 0px);
                    z-index: 585;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(856px, 411px, 0px);
                    z-index: 411;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(686px, 490px, 0px);
                    z-index: 490;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(596px, 258px, 0px);
                    z-index: 258;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(562px, 290px, 0px);
                    z-index: 290;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(869px, 417px, 0px);
                    z-index: 417;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(904px, 436px, 0px);
                    z-index: 436;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(904px, 408px, 0px);
                    z-index: 408;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(593px, 551px, 0px);
                    z-index: 551;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(726px, 214px, 0px);
                    z-index: 214;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(817px, 305px, 0px);
                    z-index: 305;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(563px, 291px, 0px);
                    z-index: 291;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(623px, 342px, 0px);
                    z-index: 342;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(775px, 214px, 0px);
                    z-index: 214;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(684px, 402px, 0px);
                    z-index: 402;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(994px, 280px, 0px);
                    z-index: 280;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(729px, 213px, 0px);
                    z-index: 213;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(855px, 410px, 0px);
                    z-index: 410;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(544px, 670px, 0px);
                    z-index: 670;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(569px, 292px, 0px);
                    z-index: 292;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(813px, 277px, 0px);
                    z-index: 277;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(510px, 707px, 0px);
                    z-index: 707;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(518px, 421px, 0px);
                    z-index: 421;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(810px, 549px, 0px);
                    z-index: 549;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(931px, 367px, 0px);
                    z-index: 367;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(690px, 236px, 0px);
                    z-index: 236;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(749px, 416px, 0px);
                    z-index: 416;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(1041px, 481px, 0px);
                    z-index: 481;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(662px, 229px, 0px);
                    z-index: 229;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(753px, 203px, 0px);
                    z-index: 203;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(659px, 221px, 0px);
                    z-index: 221;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(885px, 405px, 0px);
                    z-index: 405;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(958px, 485px, 0px);
                    z-index: 485;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(581px, 183px, 0px);
                    z-index: 183;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(916px, 464px, 0px);
                    z-index: 464;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(587px, 193px, 0px);
                    z-index: 193;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(624px, 309px, 0px);
                    z-index: 309;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(884px, 399px, 0px);
                    z-index: 399;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(537px, 225px, 0px);
                    z-index: 225;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(663px, 52px, 0px);
                    z-index: 52;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(722px, 406px, 0px);
                    z-index: 406;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-sold.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(695px, 42px, 0px);
                    z-index: 42;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(784px, 450px, 0px);
                    z-index: 450;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(686px, 46px, 0px);
                    z-index: 46;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-soon_for_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(890px, 447px, 0px);
                    z-index: 447;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(623px, 331px, 0px);
                    z-index: 331;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-soon_for_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(626px, 330px, 0px);
                    z-index: 330;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(728px, 111px, 0px);
                    z-index: 111;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(1079px, 386px, 0px);
                    z-index: 386;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(723px, 100px, 0px);
                    z-index: 100;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(726px, 107px, 0px);
                    z-index: 107;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(661px, -7px, 0px);
                    z-index: -7;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(529px, 664px, 0px);
                    z-index: 664;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(832px, 298px, 0px);
                    z-index: 298;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-under_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
                <div
                  class="leaflet-marker-icon listeo-marker-icon leaflet-zoom-animated leaflet-interactive"
                  tabindex="0"
                  role="button"
                  style="
                    margin-left: -6px;
                    margin-top: -6px;
                    width: 12px;
                    height: 12px;
                    transform: translate3d(1105px, 767px, 0px);
                    z-index: 767;
                  "
                >
                  <img
                    style="height: 30px; width: auto; margin-top: 8px"
                    src="images/pin-soon_for_sale.png?v=0.3"
                    alt="project icon status"
                  />
                </div>
              </div>
              <div class="leaflet-pane leaflet-tooltip-pane"></div>
              <div class="leaflet-pane leaflet-popup-pane"></div>
              <div
                class="leaflet-proxy leaflet-zoom-animated"
                style="
                  transform: translate3d(660199px, 449698px, 0px) scale(2048);
                "
              ></div>
            </div>
            <div class="leaflet-control-container">
              <div class="leaflet-top leaflet-left">
                <div class="leaflet-control-zoom leaflet-bar leaflet-control">
                  <a
                    class="leaflet-control-zoom-in"
                    href="#"
                    title="Zoom in"
                    role="button"
                    aria-label="Zoom in"
                    aria-disabled="false"
                    ><span aria-hidden="true">+</span></a
                  ><a
                    class="leaflet-control-zoom-out"
                    href="#"
                    title="Zoom out"
                    role="button"
                    aria-label="Zoom out"
                    aria-disabled="false"
                    ><span aria-hidden="true">−</span></a
                  >
                </div>
              </div>
              <div class="leaflet-top leaflet-right"></div>
              <div class="leaflet-bottom leaflet-left"></div>
              <div class="leaflet-bottom leaflet-right">
                <div class="leaflet-control-attribution leaflet-control">
                  <a
                    href="https://leafletjs.com"
                    title="A JavaScript library for interactive maps"
                    ><svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      class="leaflet-attribution-flag"
                    >
                      <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                      <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                      <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                    </svg>
                    Leaflet</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute top-0 right-0 z-[1] bg-white p-2 m-2"
            dir="rtl"
          >
            <div class="py-1">
              <input
                type="radio"
                id="all"
                class="checked:bg-black"
                value="all"
              /><img
                src="https://almajdiah.com/images/pin-all.png"
                class="inline-block h-6 mx-2"
                alt="الكل"
              /><span class="inline-block px-2 cursor-pointer">الكل</span>
            </div>
            <div class="py-1">
              <input
                type="radio"
                id="under_sale"
                class="checked:bg-black"
                value="under_sale"
              /><img
                src="https://almajdiah.com/images/pin-under_sale.png"
                class="inline-block h-6 mx-2"
                alt="للبيع"
              /><span class="inline-block px-2 cursor-pointer">متاحة</span>
            </div>
            <div class="py-1">
              <input
                type="radio"
                id="soon_for_sale"
                class="checked:bg-black"
                value="soon_for_sale"
              /><img
                src="https://almajdiah.com/images/pin-soon_for_sale.png"
                class="inline-block h-6 mx-2"
                alt="قريبا للبيع"
              /><span class="inline-block px-2 cursor-pointer">قادمة</span>
            </div>
            <div class="py-1">
              <input
                type="radio"
                id="sold"
                class="checked:bg-black"
                value="sold"
              /><img
                src="https://almajdiah.com/images/pin-sold.png"
                class="inline-block h-6 mx-2"
                alt="مباع"
              /><span class="inline-block px-2 cursor-pointer">مباعة</span>
            </div>
          </div>
        </div>
        <section class="bg-black mb-8 py-8 lg:py-16">
          <div class="container m-auto">
            <div class="text-center pb-10">
              <h2
                class="text-white text-2xl md:text-3xl lg:text-4xl font-ge-dinar-medium pb-2"
              >
                إنــجـــازاتـنــــا
              </h2>
              <img
                src="https://almajdiah.com/images/divid-bg.png"
                class="h-3 w-36 lg:h-4 lg:w-44 inline-block m-auto"
                alt="divid"
              />
            </div>
            <div
              class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 text-white text-center"
            >
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4kf65Z9fTnQsijmhK7MDjYf7lj2h7apWCmNOfVCR.png"
                  class="w-16 lg:w-24 m-auto"
                  alt="متر مربع تم تطويره"
                /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl"
                  >2,000,000</span
                ><span class="block text-lg lg:text-xl"
                  >متر مربع تم تطويره</span
                >
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/4ba55kXy8YXj6TbOnGvVcr0j9tc9bTvIEvo3Wm6o.png"
                  class="w-16 lg:w-24 m-auto"
                  alt="سكان الماجدية ريزدنس"
                /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl"
                  >60,000+</span
                ><span class="block text-lg lg:text-xl"
                  >سكان الماجدية ريزدنس</span
                >
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/KLr8OMvbwCIhzQhIA0lWQYBigfjTbDlOsHIlYrD8.png"
                  class="w-16 lg:w-24 m-auto"
                  alt="مبنى تم إنشاؤه"
                /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl"
                  >1000+</span
                ><span class="block text-lg lg:text-xl">مبنى تم إنشاؤه</span>
              </div>
              <div>
                <img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/2Bgukif3susFKO2w8A6cUii0bsH76iyxaiuRYEdP.png"
                  class="w-16 lg:w-24 m-auto"
                  alt="وحدة سكنية"
                /><span
                  class="block font-acumin-pro text-lg pt-3 lg:pt-4 lg:text-2xl"
                  >15,000+</span
                ><span class="block text-lg lg:text-xl">وحدة سكنية</span>
              </div>
            </div>
          </div>
        </section>
        <div class="my-8 lg:container m-auto">
          <div class="text-center mb-3 lg:mb-5">
            <svg
              class="inline-block w-6 h-6 lg:w-10 lg:h-10"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="12"
              height="17.433"
              viewBox="0 0 12 17.433"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_14058"
                    data-name="Rectangle 14058"
                    width="12"
                    height="17.433"
                    fill="none"
                    stroke="#707070"
                    stroke-width="0.75"
                  ></rect>
                </clipPath>
              </defs>
              <g
                id="Group_11582"
                data-name="Group 11582"
                transform="translate(0 0)"
              >
                <g
                  id="Group_11581"
                  data-name="Group 11581"
                  transform="translate(0 0)"
                  clip-path="url(#clip-path)"
                >
                  <line
                    id="Line_153"
                    data-name="Line 153"
                    y1="10.531"
                    x2="7.951"
                    transform="translate(3.941 0.081)"
                    fill="none"
                    stroke="#a4874c"
                    stroke-miterlimit="10"
                    stroke-width="0.75"
                  ></line>
                  <line
                    id="Line_154"
                    data-name="Line 154"
                    y1="10.531"
                    x2="7.951"
                    transform="translate(0.107 6.821)"
                    fill="none"
                    stroke="#a4874c"
                    stroke-miterlimit="10"
                    stroke-width="0.75"
                  ></line>
                </g>
              </g>
            </svg>
            <h1
              class="inline-block text-xl font-header md:text-2xl px-1.5 lg:text-4xl font-ge-dinar-medium leading-none text-black dark:text-white"
            >
              مدونة الماجدية
            </h1>
          </div>
          <section
            class="carousel carousel--rtl mt-6"
            dir="rtl"
            aria-label="Gallery"
            tabindex="0"
            id="posts-slider"
          >
            <div class="carousel__viewport">
              <ol
                class="carousel__track"
                style="
                  transform: translateX(828.8px);
                  transition: all 0ms ease 0s;
                  margin: 0px -1243.2px;
                  width: 100%;
                "
              >
                <li
                  class="carousel__slide carousel_slide--clone"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/22" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/0JgBPvR8Y3ZdS9vjbKMZbeofGQBu1xkRHTVwuAK8.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>مايو 2</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/22" class="block"
                        >الماجدية ريزدنس تستحوذ على مجموعة أراضي بمساحة 17,840
                        متر مربع بقيمة 190 مليون ريال</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel_slide--clone"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/19" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/AqcHDim0qGtROiNdtjXyWqkDLm96qQB66xxQFJ0d.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/19" class="block"
                        >الماجدية ريزيدنس تتنازل عن أتعاب مشروع الماجدية 123
                        لصالح جمعية "تعلَّم" لتحفيظ القرآن الكريم</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel_slide--clone"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/18" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/FuKwvHD49guE7U54ORKCqXSYCBcyXbttDkoAUE1m.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/18" class="block"
                        >الماجدية ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023
                        في الرياض</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/22" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/0JgBPvR8Y3ZdS9vjbKMZbeofGQBu1xkRHTVwuAK8.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>مايو 2</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/22" class="block"
                        >الماجدية ريزدنس تستحوذ على مجموعة أراضي بمساحة 17,840
                        متر مربع بقيمة 190 مليون ريال</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel__slide--prev"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/19" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/AqcHDim0qGtROiNdtjXyWqkDLm96qQB66xxQFJ0d.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/19" class="block"
                        >الماجدية ريزيدنس تتنازل عن أتعاب مشروع الماجدية 123
                        لصالح جمعية "تعلَّم" لتحفيظ القرآن الكريم</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel__slide--visible carousel__slide--active"
                  aria-hidden="false"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/18" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/FuKwvHD49guE7U54ORKCqXSYCBcyXbttDkoAUE1m.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/18" class="block"
                        >الماجدية ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023
                        في الرياض</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel_slide--clone carousel__slide--next"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/22" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/0JgBPvR8Y3ZdS9vjbKMZbeofGQBu1xkRHTVwuAK8.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>مايو 2</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/22" class="block"
                        >الماجدية ريزدنس تستحوذ على مجموعة أراضي بمساحة 17,840
                        متر مربع بقيمة 190 مليون ريال</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel_slide--clone"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/19" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/AqcHDim0qGtROiNdtjXyWqkDLm96qQB66xxQFJ0d.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/19" class="block"
                        >الماجدية ريزيدنس تتنازل عن أتعاب مشروع الماجدية 123
                        لصالح جمعية "تعلَّم" لتحفيظ القرآن الكريم</a
                      >
                    </h2>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel_slide--clone"
                  aria-hidden="true"
                  style="width: 414.4px"
                >
                  <div
                    class="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full"
                  >
                    <a href="https://almajdiah.com/blog/18" class="block"
                      ><img
                        src="https://minio.almajdiah.sa:9000/etmaam-public/posts/images/FuKwvHD49guE7U54ORKCqXSYCBcyXbttDkoAUE1m.jpg"
                        alt="blog"
                        data-v-2d36321d=""
                        class="w-full align-middle aspect-[5/3] object-cover"
                    /></a>
                    <div
                      class="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse"
                    >
                      <svg
                        class="w-6 inline-block"
                        id="vuesax_linear_calendar"
                        data-name="vuesax/linear/calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.976 17.976"
                      >
                        <g id="calendar">
                          <path
                            id="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(6.18 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                            transform="translate(12.172 1.686)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                            transform="translate(2.81 6.997)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                            transform="translate(2.435 2.81)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M0,0H17.976V17.976H0Z"
                            fill="none"
                            opacity="0"
                          ></path>
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(11.512 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(8.741 12.259)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 10.012)"
                            fill="currentColor"
                          ></path>
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                            transform="translate(5.969 12.259)"
                            fill="currentColor"
                          ></path>
                        </g></svg
                      ><span>أبريل 17</span>
                    </div>
                    <h2
                      class="h-[64px] overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium"
                    >
                      <a href="https://almajdiah.com/blog/18" class="block"
                        >الماجدية ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023
                        في الرياض</a
                      >
                    </h2>
                  </div>
                </li>
              </ol>
            </div>
            <div
              class="carousel__liveregion carousel__sr-only"
              aria-live="polite"
              aria-atomic="true"
            >
              Item 3 of 3
            </div>
          </section>
          <div class="mt-4 lg:my-8 text-center">
            <a
              class="text-black dark:text-white text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-6 border border-black dark:border-white inline-block"
              href="https://almajdiah.com/blog"
              >عرض المدونة</a
            >
          </div>
        </div>
      </main>
      
      <footer
        class="bg-black bg-logo bg-[length:200px] bg-left-bottom bg-repeat-x font-content"
      >
        <div class="mx-auto max-w-screen-xl py-8">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-6 md:mb-0">
              <a class="flex items-center" href="https://almajdiah.com/"
                ><img
                  src="https://minio.almajdiah.sa:9000/etmaam-public/site/images/VmyJSVcSg346Kz5TFlSLDFnZtTgzbF5hdcZnS21G.png"
                  class="mr-3 h-16 invert brightness-0"
                  alt=" Logo"
              /></a>
              <p class="max-w-[440px] text-sm text-secondary-100 p-3 block">
                نهتم في الماجدية ريزيدنس بإثبات دورنا الفعّال وحِرصِنا على
                تقديم تسهيلات تُساهم في تحقيق الرؤية 2030 م. بدايةً من
                اهتمامنا باختيار مُخططات ذات بنية تحتية مُتكاملة ومُجهزة
                لمُباشرة البناء.
              </p>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4">
              <div>
                <h2
                  class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100"
                >
                  روابط هامة
                </h2>
                <ul class="text-gray-200 dark:text-gray-400">
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/projects"
                      >المشاريع</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/rentals"
                      >وحدات للإيجار</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/blog"
                      >المدونة</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/about-us"
                      >من نحن</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/privacy-policy"
                      >سياسة الخصوصية</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/intellectual-property-rights"
                      >حقوق الملكية الفكرية</a
                    >
                  </li>
                  <li class="mb-2">
                    <a
                      class="text-secondary-200"
                      aria-current="page"
                      href="https://almajdiah.com/terms"
                      >شروط الإستخدام</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100"
                >
                  تواصل معنا
                </h2>
                <ul>
                  <li class="text-secondary-200 text-sm font-acumin-pro">
                    <a href="tel:920011719">920011719</a>
                  </li>
                </ul>
              </div>
              <div class="col-span-full lg:col-span-1">
                <h2
                  class="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-secondary-100"
                >
                  تابعنا على
                </h2>
                <div
                  class="flex w-full rtl:space-x-reverse space-x-3 text-secondary-200"
                >
                  <a target="_blank" href="https://twitter.com/almajdiah"
                    ><img
                      src="https://almajdiah.com/images/twitter.png"
                      class="w-7 invert brightness-0"
                      alt="almajdiah twitter" /></a
                  ><a
                    target="_blank"
                    href="https://www.youtube.com/@almajdiahres"
                    ><img
                      src="https://almajdiah.com/images/youtube.png"
                      class="w-7 invert brightness-0"
                      alt="almajdiah youtube" /></a
                  ><a
                    target="_blank"
                    href="https://www.instagram.com/almajdiah/"
                    ><img
                      src="https://almajdiah.com/images/instagram.png"
                      class="w-7 invert brightness-0"
                      alt="almajdiah instagram" /></a
                  ><a
                    target="_blank"
                    href="https://www.linkedin.com/company/13018248/admin/"
                    ><img
                      src="https://almajdiah.com/images/linkedin.png"
                      class="w-7 invert brightness-0"
                      alt="almajdiah linkedin" /></a
                  ><a
                    target="_blank"
                    href="https://www.snapchat.com/add/almajdiah_res?share_id=2F1w_-envU0&amp;locale=en-GB"
                    ><img
                      src="https://almajdiah.com/images/snap.png"
                      class="w-7 invert brightness-0"
                      alt="almajdiah snapchat"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sm:flex sm:items-center sm:justify-between bg-black bg-waves"
        >
          <div class="container m-auto text-center py-4">
            <span class="text-sm text-secondary-200"
              >جميع الحقوق محفوظة © <span class="font-acumin-pro">2022</span>
              <a class="hover:underline" href="https://almajdiah.com/"
                >الماجدية ريزدنس</a
              >.
            </span>
          </div>
        </div>
      </footer>
      
    </div>
  </div>
    </>
  )
}

export default App
