import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Careers = () => {



  const {t, i18n}=useTranslation()



  return (
  
<Box sx={{marginTop:'70px'}}>

{/* top side title  */}
<Box sx={{alignItems:'center', display:'flex', justifyContent:'center', overflow:'hidden'}}>
<Typography component='h1' sx={{color:'#7FC5D6', fontWeight:'bold', fontSize:'40px'}}> {t('careers-text-1')} </Typography>
</Box>

<Box>
  {/* <Box component='img' src='i18n.dir()==='ltr'?    https://www.barns.com.sa/public/assets/manage_store/images/page/banner/1920x1080/1618745073.png :'https://www.barns.com.sa/public/assets/manage_store/images/page/banner/1920x1080/1618744793.png' '   sx={{width:'100%', marginTop:'50px'}}/> */}
  <Box component='img' src='https://www.barns.com.sa/public/assets/manage_store/images/page/banner/1920x1080/1618745073.png' sx={{width:'100%', marginTop:'50px'}}/>
</Box>

{/* Contact us  */}
<Box sx={{marginLeft:i18n.dir()==='ltr'? {xl:'140px' , lg:'140px', md:'140px', xs:'20px'}:'', marginTop:'0px', marginRight: i18n.dir()==='ltr'?'' :{xl:'140px' , lg:'140px', md:'140px', xs:'20px'}}}>
<Typography component='h6' sx={{color:'#7FC5D6', fontWeight:'bold', fontSize:'22px'}}>  {t('careers-text-2')} </Typography>
<Typography component='h6' sx={{color:'#7C7C7C', fontSize:'16px', marginTop:'5px'}}> {t('careers-text-3')} </Typography>
<Typography component='h6' sx={{color:'#7C7C7C', fontSize:'16px', marginY:'15px'}}>{t('careers-text-4')} </Typography>
<Typography component='h6' sx={{color:'#7C7C7C', fontSize:'16px'}}>{t('careers-text-5')} </Typography>


{/* Inputs Required  */}
<Box sx={{marginTop:'50px'}}>
<Typography component='h6' sx={{color:'#7FC5D6', fontSize:'18px'}}>{t('careers-text-6')} </Typography>

<Grid container spacing={2}>

<Grid item xs={12} md={12} lg={12} xl={12}>
<input type="text" name="full_name" class="form-control" placeholder={t('careers-text-7')}  style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'20px', width:'60%'}}/>
</Grid>


<Grid item xs={12} md={12} lg={12} xl={12}>
<input type="text" name="full_name" class="form-control" placeholder={t('careers-text-8')}  style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'10px', width:'60%'}}/>
</Grid>


<Grid container >
<Grid item xs={12} md={12} lg={4} xl={4}>
<input type="text" name="full_name" class="form-control" placeholder={t('careers-text-9')}  style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'15px', width:'85%', marginLeft:'17px'}}/>
  </Grid>


  <Grid item xs={12} md={12} lg={4} xl={4}>
  <select name="gender" id="" class="form-control gender" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'78%', marginLeft:'16px', marginRight: i18n.dir()==='ltr'?'30px':'', color:'#7C7C7C'}}>
                             <option value="" class="plchr"> {t('careers-text-10')} </option>
                             <option value="1" class="plchr"> Male</option>
                             <option value="0" class="plchr"> Female</option>
                          </select>
</Grid>
</Grid>

<Grid container>
<Grid item xs={12} md={12} lg={4} xl={4}>
<select name="martial_status" id="" class="form-control gender" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'85%', marginLeft:'16px', marginRight: i18n.dir()==='ltr'?'50px':'', color:'#7C7C7C'}}>
                             <option value="" class="plchr"> {t('careers-text-11')} </option>
                             <option value="Unmarried" class="plchr"> Unmarried</option>
                             
                             <option value="Married" class="plchr"> Married</option>
                             
                          </select>  </Grid>


  <Grid item xs={12} md={12} lg={4} xl={4}>
  <select name="nationality" id="" class="form-control gender" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'78%', marginLeft:'16px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}>
                             <option value="" class="plchr">
                             {t('careers-text-12')}                        
                             </option>
                                                          <option value="1">Afghanistan</option>
                                                          <option value="2">Albania</option>
                                                          <option value="3">Algeria</option>
                                                          <option value="4">American Samoa</option>
                                                          <option value="5">Andorra</option>
                                                          <option value="6">Angola</option>
                                                          <option value="7">Anguilla</option>
                                                          <option value="8">Antarctica</option>
                                                          <option value="9">Antigua And Barbuda</option>
                                                          <option value="10">Argentina</option>
                                                          <option value="11">Armenia</option>
                                                          <option value="12">Aruba</option>
                                                          <option value="13">Australia</option>
                                                          <option value="14">Austria</option>
                                                          <option value="15">Azerbaijan</option>
                                                          <option value="16">Bahamas The</option>
                                                          <option value="17">Bahrain</option>
                                                          <option value="18">Bangladesh</option>
                                                          <option value="19">Barbados</option>
                                                          <option value="20">Belarus</option>
                                                          <option value="21">Belgium</option>
                                                          <option value="22">Belize</option>
                                                          <option value="23">Benin</option>
                                                          <option value="24">Bermuda</option>
                                                          <option value="25">Bhutan</option>
                                                          <option value="26">Bolivia</option>
                                                          <option value="27">Bosnia and Herzegovina</option>
                                                          <option value="28">Botswana</option>
                                                          <option value="29">Bouvet Island</option>
                                                          <option value="30">Brazil</option>
                                                          <option value="31">British Indian Ocean Territory</option>
                                                          <option value="32">Brunei</option>
                                                          <option value="33">Bulgaria</option>
                                                          <option value="34">Burkina Faso</option>
                                                          <option value="35">Burundi</option>
                                                          <option value="36">Cambodia</option>
                                                          <option value="37">Cameroon</option>
                                                          <option value="38">Canada</option>
                                                          <option value="39">Cape Verde</option>
                                                          <option value="40">Cayman Islands</option>
                                                          <option value="41">Central African Republic</option>
                                                          <option value="42">Chad</option>
                                                          <option value="43">Chile</option>
                                                          <option value="44">China</option>
                                                          <option value="45">Christmas Island</option>
                                                          <option value="46">Cocos (Keeling) Islands</option>
                                                          <option value="47">Colombia</option>
                                                          <option value="48">Comoros</option>
                                                          <option value="49">Congo</option>
                                                          <option value="50">Congo The Democratic Republic Of The</option>
                                                          <option value="51">Cook Islands</option>
                                                          <option value="52">Costa Rica</option>
                                                          <option value="53">Cote D'Ivoire (Ivory Coast)</option>
                                                          <option value="54">Croatia (Hrvatska)</option>
                                                          <option value="55">Cuba</option>
                                                          <option value="56">Cyprus</option>
                                                          <option value="57">Czech Republic</option>
                                                          <option value="58">Denmark</option>
                                                          <option value="59">Djibouti</option>
                                                          <option value="60">Dominica</option>
                                                          <option value="61">Dominican Republic</option>
                                                          <option value="62">East Timor</option>
                                                          <option value="63">Ecuador</option>
                                                          <option value="64">Egypt</option>
                                                          <option value="65">El Salvador</option>
                                                          <option value="66">Equatorial Guinea</option>
                                                          <option value="67">Eritrea</option>
                                                          <option value="68">Estonia</option>
                                                          <option value="69">Ethiopia</option>
                                                          <option value="70">External Territories of Australia</option>
                                                          <option value="71">Falkland Islands</option>
                                                          <option value="72">Faroe Islands</option>
                                                          <option value="73">Fiji Islands</option>
                                                          <option value="74">Finland</option>
                                                          <option value="75">France</option>
                                                          <option value="76">French Guiana</option>
                                                          <option value="77">French Polynesia</option>
                                                          <option value="78">French Southern Territories</option>
                                                          <option value="79">Gabon</option>
                                                          <option value="80">Gambia The</option>
                                                          <option value="81">Georgia</option>
                                                          <option value="82">Germany</option>
                                                          <option value="83">Ghana</option>
                                                          <option value="84">Gibraltar</option>
                                                          <option value="85">Greece</option>
                                                          <option value="86">Greenland</option>
                                                          <option value="87">Grenada</option>
                                                          <option value="88">Guadeloupe</option>
                                                          <option value="89">Guam</option>
                                                          <option value="90">Guatemala</option>
                                                          <option value="91">Guernsey and Alderney</option>
                                                          <option value="92">Guinea</option>
                                                          <option value="93">Guinea-Bissau</option>
                                                          <option value="94">Guyana</option>
                                                          <option value="95">Haiti</option>
                                                          <option value="96">Heard and McDonald Islands</option>
                                                          <option value="97">Honduras</option>
                                                          <option value="98">Hong Kong S.A.R.</option>
                                                          <option value="99">Hungary</option>
                                                          <option value="100">Iceland</option>
                                                          <option value="101">India</option>
                                                          <option value="102">Indonesia</option>
                                                          <option value="103">Iran</option>
                                                          <option value="104">Iraq</option>
                                                          <option value="105">Ireland</option>
                                                          <option value="106">Israel</option>
                                                          <option value="107">Italy</option>
                                                          <option value="108">Jamaica</option>
                                                          <option value="109">Japan</option>
                                                          <option value="110">Jersey</option>
                                                          <option value="111">Jordan</option>
                                                          <option value="112">Kazakhstan</option>
                                                          <option value="113">Kenya</option>
                                                          <option value="114">Kiribati</option>
                                                          <option value="115">Korea North</option>
                                                          <option value="116">Korea South</option>
                                                          <option value="117">Kuwait</option>
                                                          <option value="118">Kyrgyzstan</option>
                                                          <option value="119">Laos</option>
                                                          <option value="120">Latvia</option>
                                                          <option value="121">Lebanon</option>
                                                          <option value="122">Lesotho</option>
                                                          <option value="123">Liberia</option>
                                                          <option value="124">Libya</option>
                                                          <option value="125">Liechtenstein</option>
                                                          <option value="126">Lithuania</option>
                                                          <option value="127">Luxembourg</option>
                                                          <option value="128">Macau S.A.R.</option>
                                                          <option value="129">Macedonia</option>
                                                          <option value="130">Madagascar</option>
                                                          <option value="131">Malawi</option>
                                                          <option value="132">Malaysia</option>
                                                          <option value="133">Maldives</option>
                                                          <option value="134">Mali</option>
                                                          <option value="135">Malta</option>
                                                          <option value="136">Man (Isle of)</option>
                                                          <option value="137">Marshall Islands</option>
                                                          <option value="138">Martinique</option>
                                                          <option value="139">Mauritania</option>
                                                          <option value="140">Mauritius</option>
                                                          <option value="141">Mayotte</option>
                                                          <option value="142">Mexico</option>
                                                          <option value="143">Micronesia</option>
                                                          <option value="144">Moldova</option>
                                                          <option value="145">Monaco</option>
                                                          <option value="146">Mongolia</option>
                                                          <option value="147">Montserrat</option>
                                                          <option value="148">Morocco</option>
                                                          <option value="149">Mozambique</option>
                                                          <option value="150">Myanmar</option>
                                                          <option value="151">Namibia</option>
                                                          <option value="152">Nauru</option>
                                                          <option value="153">Nepal</option>
                                                          <option value="154">Netherlands Antilles</option>
                                                          <option value="155">Netherlands The</option>
                                                          <option value="156">New Caledonia</option>
                                                          <option value="157">New Zealand</option>
                                                          <option value="158">Nicaragua</option>
                                                          <option value="159">Niger</option>
                                                          <option value="160">Nigeria</option>
                                                          <option value="161">Niue</option>
                                                          <option value="162">Norfolk Island</option>
                                                          <option value="163">Northern Mariana Islands</option>
                                                          <option value="164">Norway</option>
                                                          <option value="165">Oman</option>
                                                          <option value="166">Pakistan</option>
                                                          <option value="167">Palau</option>
                                                          <option value="168">Palestinian Territory Occupied</option>
                                                          <option value="169">Panama</option>
                                                          <option value="170">Papua new Guinea</option>
                                                          <option value="171">Paraguay</option>
                                                          <option value="172">Peru</option>
                                                          <option value="173">Philippines</option>
                                                          <option value="174">Pitcairn Island</option>
                                                          <option value="175">Poland</option>
                                                          <option value="176">Portugal</option>
                                                          <option value="177">Puerto Rico</option>
                                                          <option value="249">Qatar</option>
                                                          <option value="179">Reunion</option>
                                                          <option value="180">Romania</option>
                                                          <option value="181">Russia</option>
                                                          <option value="182">Rwanda</option>
                                                          <option value="183">Saint Helena</option>
                                                          <option value="184">Saint Kitts And Nevis</option>
                                                          <option value="185">Saint Lucia</option>
                                                          <option value="186">Saint Pierre and Miquelon</option>
                                                          <option value="187">Saint Vincent And The Grenadines</option>
                                                          <option value="188">Samoa</option>
                                                          <option value="189">San Marino</option>
                                                          <option value="190">Sao Tome and Principe</option>
                                                          <option value="191">Saudi Arabia</option>
                                                          <option value="192">Senegal</option>
                                                          <option value="193">Serbia</option>
                                                          <option value="194">Seychelles</option>
                                                          <option value="195">Sierra Leone</option>
                                                          <option value="196">Singapore</option>
                                                          <option value="247">Sint Maarten</option>
                                                          <option value="197">Slovakia</option>
                                                          <option value="198">Slovenia</option>
                                                          <option value="199">Smaller Territories of the UK</option>
                                                          <option value="200">Solomon Islands</option>
                                                          <option value="201">Somalia</option>
                                                          <option value="202">South Africa</option>
                                                          <option value="203">South Georgia</option>
                                                          <option value="204">South Sudan</option>
                                                          <option value="205">Spain</option>
                                                          <option value="206">Sri Lanka</option>
                                                          <option value="207">Sudan</option>
                                                          <option value="208">Suriname</option>
                                                          <option value="209">Svalbard And Jan Mayen Islands</option>
                                                          <option value="210">Swaziland</option>
                                                          <option value="211">Sweden</option>
                                                          <option value="212">Switzerland</option>
                                                          <option value="213">Syria</option>
                                                          <option value="214">Taiwan</option>
                                                          <option value="215">Tajikistan</option>
                                                          <option value="216">Tanzania</option>
                                                          <option value="217">Thailand</option>
                                                          <option value="218">Togo</option>
                                                          <option value="219">Tokelau</option>
                                                          <option value="220">Tonga</option>
                                                          <option value="221">Trinidad And Tobago</option>
                                                          <option value="222">Tunisia</option>
                                                          <option value="223">Turkey</option>
                                                          <option value="224">Turkmenistan</option>
                                                          <option value="225">Turks And Caicos Islands</option>
                                                          <option value="226">Tuvalu</option>
                                                          <option value="227">Uganda</option>
                                                          <option value="228">Ukraine</option>
                                                          <option value="229">United Arab Emirates</option>
                                                          <option value="230">United Kingdom</option>
                                                          <option value="231">United States</option>
                                                          <option value="232">United States Minor Outlying Islands</option>
                                                          <option value="233">Uruguay</option>
                                                          <option value="234">Uzbekistan</option>
                                                          <option value="235">Vanuatu</option>
                                                          <option value="236">Vatican City State (Holy See)</option>
                                                          <option value="237">Venezuela</option>
                                                          <option value="238">Vietnam</option>
                                                          <option value="239">Virgin Islands (British)</option>
                                                          <option value="240">Virgin Islands (US)</option>
                                                          <option value="241">Wallis And Futuna Islands</option>
                                                          <option value="242">Western Sahara</option>
                                                          <option value="243">Yemen</option>
                                                          <option value="244">Yugoslavia</option>
                                                          <option value="245">Zambia</option>
                                                          <option value="246">Zimbabwe</option>
                                                       </select>
</Grid>
</Grid>

{/* checkbox  */}

<Grid container spacing={2}>
<Grid item xs={12} md={12} lg={6} xl={4}>
<Typography component='h1' sx={{color:'#7FC5D6', fontSize:'20px', marginLeft:'17px', marginTop:'20px'}}>{t('careers-text-13')} </Typography>
</Grid>


<Grid item xs={12} md={12} lg={6} xl={4}>

<Box sx={{display:'flex'}}>


<Box sx={{marginTop:'10px', display:'flex'}}>
  <input type="radio" class="check_box" id="myradiobutton1" name="live_saudi" value="no" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', marginLeft:'16px', marginRight:'50px',  width:'30px', height:'30px', cursor:'pointer' }}/>
  <label style={{marginTop:'20px', marginLeft:'-30px'}}>{t('careers-text-14')} </label>
  </Box>

<Box sx={{marginTop:'10px', display:'flex', marginLeft:'50px'}}>
  <input type="radio" class="check_box" id="myradiobutton1" name="live_saudi" value="no" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', marginLeft:'16px', marginRight:'50px',  width:'30px', height:'30px', cursor:'pointer' }}/>
  <label style={{marginTop:'20px', marginLeft:'-30px'}}>{t('careers-text-15')} </label>
  </Box>




</Box>

  
</Grid>


{/* Cointry  */}
<Grid container>
<Grid item xs={12} md={12} lg={4} xl={4}>
<select name="country_id" id="country_id" class="form-control gender"   style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'85%', marginLeft:'30px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}
>
                             <option value="" class="plchr">
                             {t('careers-text-16')}                              </option>
                                                          <option value="1">Afghanistan</option>
                                                          <option value="2">Albania</option>
                                                          <option value="3">Algeria</option>
                                                          <option value="4">American Samoa</option>
                                                          <option value="5">Andorra</option>
                                                          <option value="6">Angola</option>
                                                          <option value="7">Anguilla</option>
                                                          <option value="8">Antarctica</option>
                                                          <option value="9">Antigua And Barbuda</option>
                                                          <option value="10">Argentina</option>
                                                          <option value="11">Armenia</option>
                                                          <option value="12">Aruba</option>
                                                          <option value="13">Australia</option>
                                                          <option value="14">Austria</option>
                                                          <option value="15">Azerbaijan</option>
                                                          <option value="16">Bahamas The</option>
                                                          <option value="17">Bahrain</option>
                                                          <option value="18">Bangladesh</option>
                                                          <option value="19">Barbados</option>
                                                          <option value="20">Belarus</option>
                                                          <option value="21">Belgium</option>
                                                          <option value="22">Belize</option>
                                                          <option value="23">Benin</option>
                                                          <option value="24">Bermuda</option>
                                                          <option value="25">Bhutan</option>
                                                          <option value="26">Bolivia</option>
                                                          <option value="27">Bosnia and Herzegovina</option>
                                                          <option value="28">Botswana</option>
                                                          <option value="29">Bouvet Island</option>
                                                          <option value="30">Brazil</option>
                                                          <option value="31">British Indian Ocean Territory</option>
                                                          <option value="32">Brunei</option>
                                                          <option value="33">Bulgaria</option>
                                                          <option value="34">Burkina Faso</option>
                                                          <option value="35">Burundi</option>
                                                          <option value="36">Cambodia</option>
                                                          <option value="37">Cameroon</option>
                                                          <option value="38">Canada</option>
                                                          <option value="39">Cape Verde</option>
                                                          <option value="40">Cayman Islands</option>
                                                          <option value="41">Central African Republic</option>
                                                          <option value="42">Chad</option>
                                                          <option value="43">Chile</option>
                                                          <option value="44">China</option>
                                                          <option value="45">Christmas Island</option>
                                                          <option value="46">Cocos (Keeling) Islands</option>
                                                          <option value="47">Colombia</option>
                                                          <option value="48">Comoros</option>
                                                          <option value="49">Congo</option>
                                                          <option value="50">Congo The Democratic Republic Of The</option>
                                                          <option value="51">Cook Islands</option>
                                                          <option value="52">Costa Rica</option>
                                                          <option value="53">Cote D'Ivoire (Ivory Coast)</option>
                                                          <option value="54">Croatia (Hrvatska)</option>
                                                          <option value="55">Cuba</option>
                                                          <option value="56">Cyprus</option>
                                                          <option value="57">Czech Republic</option>
                                                          <option value="58">Denmark</option>
                                                          <option value="59">Djibouti</option>
                                                          <option value="60">Dominica</option>
                                                          <option value="61">Dominican Republic</option>
                                                          <option value="62">East Timor</option>
                                                          <option value="63">Ecuador</option>
                                                          <option value="64">Egypt</option>
                                                          <option value="65">El Salvador</option>
                                                          <option value="66">Equatorial Guinea</option>
                                                          <option value="67">Eritrea</option>
                                                          <option value="68">Estonia</option>
                                                          <option value="69">Ethiopia</option>
                                                          <option value="70">External Territories of Australia</option>
                                                          <option value="71">Falkland Islands</option>
                                                          <option value="72">Faroe Islands</option>
                                                          <option value="73">Fiji Islands</option>
                                                          <option value="74">Finland</option>
                                                          <option value="75">France</option>
                                                          <option value="76">French Guiana</option>
                                                          <option value="77">French Polynesia</option>
                                                          <option value="78">French Southern Territories</option>
                                                          <option value="79">Gabon</option>
                                                          <option value="80">Gambia The</option>
                                                          <option value="81">Georgia</option>
                                                          <option value="82">Germany</option>
                                                          <option value="83">Ghana</option>
                                                          <option value="84">Gibraltar</option>
                                                          <option value="85">Greece</option>
                                                          <option value="86">Greenland</option>
                                                          <option value="87">Grenada</option>
                                                          <option value="88">Guadeloupe</option>
                                                          <option value="89">Guam</option>
                                                          <option value="90">Guatemala</option>
                                                          <option value="91">Guernsey and Alderney</option>
                                                          <option value="92">Guinea</option>
                                                          <option value="93">Guinea-Bissau</option>
                                                          <option value="94">Guyana</option>
                                                          <option value="95">Haiti</option>
                                                          <option value="96">Heard and McDonald Islands</option>
                                                          <option value="97">Honduras</option>
                                                          <option value="98">Hong Kong S.A.R.</option>
                                                          <option value="99">Hungary</option>
                                                          <option value="100">Iceland</option>
                                                          <option value="101">India</option>
                                                          <option value="102">Indonesia</option>
                                                          <option value="103">Iran</option>
                                                          <option value="104">Iraq</option>
                                                          <option value="105">Ireland</option>
                                                          <option value="106">Israel</option>
                                                          <option value="107">Italy</option>
                                                          <option value="108">Jamaica</option>
                                                          <option value="109">Japan</option>
                                                          <option value="110">Jersey</option>
                                                          <option value="111">Jordan</option>
                                                          <option value="112">Kazakhstan</option>
                                                          <option value="113">Kenya</option>
                                                          <option value="114">Kiribati</option>
                                                          <option value="115">Korea North</option>
                                                          <option value="116">Korea South</option>
                                                          <option value="117">Kuwait</option>
                                                          <option value="118">Kyrgyzstan</option>
                                                          <option value="119">Laos</option>
                                                          <option value="120">Latvia</option>
                                                          <option value="121">Lebanon</option>
                                                          <option value="122">Lesotho</option>
                                                          <option value="123">Liberia</option>
                                                          <option value="124">Libya</option>
                                                          <option value="125">Liechtenstein</option>
                                                          <option value="126">Lithuania</option>
                                                          <option value="127">Luxembourg</option>
                                                          <option value="128">Macau S.A.R.</option>
                                                          <option value="129">Macedonia</option>
                                                          <option value="130">Madagascar</option>
                                                          <option value="131">Malawi</option>
                                                          <option value="132">Malaysia</option>
                                                          <option value="133">Maldives</option>
                                                          <option value="134">Mali</option>
                                                          <option value="135">Malta</option>
                                                          <option value="136">Man (Isle of)</option>
                                                          <option value="137">Marshall Islands</option>
                                                          <option value="138">Martinique</option>
                                                          <option value="139">Mauritania</option>
                                                          <option value="140">Mauritius</option>
                                                          <option value="141">Mayotte</option>
                                                          <option value="142">Mexico</option>
                                                          <option value="143">Micronesia</option>
                                                          <option value="144">Moldova</option>
                                                          <option value="145">Monaco</option>
                                                          <option value="146">Mongolia</option>
                                                          <option value="147">Montserrat</option>
                                                          <option value="148">Morocco</option>
                                                          <option value="149">Mozambique</option>
                                                          <option value="150">Myanmar</option>
                                                          <option value="151">Namibia</option>
                                                          <option value="152">Nauru</option>
                                                          <option value="153">Nepal</option>
                                                          <option value="154">Netherlands Antilles</option>
                                                          <option value="155">Netherlands The</option>
                                                          <option value="156">New Caledonia</option>
                                                          <option value="157">New Zealand</option>
                                                          <option value="158">Nicaragua</option>
                                                          <option value="159">Niger</option>
                                                          <option value="160">Nigeria</option>
                                                          <option value="161">Niue</option>
                                                          <option value="162">Norfolk Island</option>
                                                          <option value="163">Northern Mariana Islands</option>
                                                          <option value="164">Norway</option>
                                                          <option value="165">Oman</option>
                                                          <option value="166">Pakistan</option>
                                                          <option value="167">Palau</option>
                                                          <option value="168">Palestinian Territory Occupied</option>
                                                          <option value="169">Panama</option>
                                                          <option value="170">Papua new Guinea</option>
                                                          <option value="171">Paraguay</option>
                                                          <option value="172">Peru</option>
                                                          <option value="173">Philippines</option>
                                                          <option value="174">Pitcairn Island</option>
                                                          <option value="175">Poland</option>
                                                          <option value="176">Portugal</option>
                                                          <option value="177">Puerto Rico</option>
                                                          <option value="249">Qatar</option>
                                                          <option value="179">Reunion</option>
                                                          <option value="180">Romania</option>
                                                          <option value="181">Russia</option>
                                                          <option value="182">Rwanda</option>
                                                          <option value="183">Saint Helena</option>
                                                          <option value="184">Saint Kitts And Nevis</option>
                                                          <option value="185">Saint Lucia</option>
                                                          <option value="186">Saint Pierre and Miquelon</option>
                                                          <option value="187">Saint Vincent And The Grenadines</option>
                                                          <option value="188">Samoa</option>
                                                          <option value="189">San Marino</option>
                                                          <option value="190">Sao Tome and Principe</option>
                                                          <option value="191">Saudi Arabia</option>
                                                          <option value="192">Senegal</option>
                                                          <option value="193">Serbia</option>
                                                          <option value="194">Seychelles</option>
                                                          <option value="195">Sierra Leone</option>
                                                          <option value="196">Singapore</option>
                                                          <option value="247">Sint Maarten</option>
                                                          <option value="197">Slovakia</option>
                                                          <option value="198">Slovenia</option>
                                                          <option value="199">Smaller Territories of the UK</option>
                                                          <option value="200">Solomon Islands</option>
                                                          <option value="201">Somalia</option>
                                                          <option value="202">South Africa</option>
                                                          <option value="203">South Georgia</option>
                                                          <option value="204">South Sudan</option>
                                                          <option value="205">Spain</option>
                                                          <option value="206">Sri Lanka</option>
                                                          <option value="207">Sudan</option>
                                                          <option value="208">Suriname</option>
                                                          <option value="209">Svalbard And Jan Mayen Islands</option>
                                                          <option value="210">Swaziland</option>
                                                          <option value="211">Sweden</option>
                                                          <option value="212">Switzerland</option>
                                                          <option value="213">Syria</option>
                                                          <option value="214">Taiwan</option>
                                                          <option value="215">Tajikistan</option>
                                                          <option value="216">Tanzania</option>
                                                          <option value="217">Thailand</option>
                                                          <option value="218">Togo</option>
                                                          <option value="219">Tokelau</option>
                                                          <option value="220">Tonga</option>
                                                          <option value="221">Trinidad And Tobago</option>
                                                          <option value="222">Tunisia</option>
                                                          <option value="223">Turkey</option>
                                                          <option value="224">Turkmenistan</option>
                                                          <option value="225">Turks And Caicos Islands</option>
                                                          <option value="226">Tuvalu</option>
                                                          <option value="227">Uganda</option>
                                                          <option value="228">Ukraine</option>
                                                          <option value="229">United Arab Emirates</option>
                                                          <option value="230">United Kingdom</option>
                                                          <option value="231">United States</option>
                                                          <option value="232">United States Minor Outlying Islands</option>
                                                          <option value="233">Uruguay</option>
                                                          <option value="234">Uzbekistan</option>
                                                          <option value="235">Vanuatu</option>
                                                          <option value="236">Vatican City State (Holy See)</option>
                                                          <option value="237">Venezuela</option>
                                                          <option value="238">Vietnam</option>
                                                          <option value="239">Virgin Islands (British)</option>
                                                          <option value="240">Virgin Islands (US)</option>
                                                          <option value="241">Wallis And Futuna Islands</option>
                                                          <option value="242">Western Sahara</option>
                                                          <option value="243">Yemen</option>
                                                          <option value="244">Yugoslavia</option>
                                                          <option value="245">Zambia</option>
                                                          <option value="246">Zimbabwe</option>
                                                       </select>

  </Grid>


  <Grid item xs={12} md={12} lg={4} xl={4}>
  <select name="city_id" id="city_id" class="form-control gender"   style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'78%', marginLeft:'30px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}>
                             <option value="" class="plchr">
                             {t('careers-text-17')}                              </option>
                             
                          </select>

</Grid>
</Grid>

{/* end country  */}


{/* start mobile  */}
<Grid container >
<Grid item xs={12} md={12} lg={4} xl={4}>
<input type="text" name="full_name" class="form-control" placeholder={t('careers-text-18')} style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'15px', width:'85%', marginLeft:'30px'}}/>
  </Grid>


  <Grid item xs={12} md={12} lg={4} xl={4}>
  <input type="text" name="full_name" class="form-control" placeholder={t('careers-text-19')} style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'15px', width:'78%', marginLeft:'30px'}}/>
</Grid>
</Grid>

{/* end mobile  */}



{/* Start school  */}

<Grid item xs={12} md={12} lg={12} xl={12}>
<select name="qualification_stage" id="" class="form-control"   style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'60%', marginLeft:'16px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}
>
                          <option value="" class="plchr">
                          {t('careers-text-20')}                           </option>
                          <option value="Primary School">Primary School</option>
                          <option value="Middle School">Middle School</option>
                          <option value="High School">High School</option>
                          <option value="Diploma">Diploma</option>
                          <option value="University">University</option>
                          <option value="Master Degree">Master Degree</option>
                          <option value="Doctorate">Doctorate</option>
                       </select>
</Grid>


{/* end school  */}


{/* start qual  */}
<Grid item xs={12} md={12} lg={12} xl={12}>
<Box>
<Typography component='h6' sx={{color:'#7FC5D6', fontSize:'18px', marginLeft:'15px'}}>{t('careers-text-21')} </Typography>
<textarea name="qualifications" id="" class="form-control" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"10px 18px", marginTop:'15px', width:'59.5%', marginLeft:'20px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}></textarea>

</Box>
</Grid>
{/* end qual  */}






{/* start Job  */}
<Grid item xs={12} md={12} lg={12} xl={12}>

<select name="job_apply_for" id="" class="form-control" style={{border:'1px solid #7FC5D6' , borderRadius:'5px', backgroundColor:'#EAE6E1', padding:"8px 18px", marginTop:'15px', width:'59.5%', marginLeft:'20px', marginRight: i18n.dir()==='ltr'?'50px':'',  color:'#7C7C7C'}}>
                          <option value="" class="plchr">
                          {t('careers-text-22')}                           </option>
                                                    <option value="110">Architect Engineer</option>
                                                    <option value="143">Barista</option>
                                                    <option value="124">Production Engineer</option>
                                                    <option value="107">Store Keeper</option>
                                                 </select></Grid>
{/* endjob  */}



{/* start cv  */}
<Grid item xs={12} md={12} lg={12} xl={12}>
<Box sx={{marginLeft:'18px', marginTop:'15px'}}>
<label style={{height:'45px', color:'#FFFFFF', backgroundColor:'#7FC5D6', fontSize:'18px', fontWeight:'300', border:'none', marginTop:'16px', borderRadius:'5px', lineHeight:'45px', display: 'inline-block', paddingRight:'15px', paddingLeft:'15px', margin:'0', minWidth:'272px', width:'auto', whiteSpace:'nowrap', textOverflow:'ellipsis',maxWidth:'95%' }}>
                        <input type="file" style={{display:"none" }}name="cv" accept=".doc,.docx,.docs,.pdf"/>
                        <span>{t('careers-text-23')}  (.doc,.docx,.docs,.pdf)</span>
                      </label>
</Box>
</Grid>
 {/* end cv  */}


{/* start send button  */}
<button type="submit" class="form_button" style={{    height: "45px",
    width: "272px",
    borderRadius: "5px",
    backgroundColor: "#7FC5D6",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "300",
    cursor: "pointer",
    border: "none",
    marginTop: "25px",marginLeft:'30px',}}>{t('careers-text-24')} </button>

{/* End Send Button  */}

</Grid>



</Grid>




</Box>



{/* end Inputs  */}






</Box>


</Box>

  )
}

export default Careers
