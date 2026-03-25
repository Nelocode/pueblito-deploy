"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import styles from './ZohoContactForm.module.css';

const ZohoContactForm = () => {
    return (
        <div className={styles.formContainer} id='crmWebToEntityForm'>
            <h2 className={styles.title}>Contáctanos</h2>
            <form action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads5262365000110043031' method='POST' onSubmit={(e) => {
                if (typeof window.checkMandatory5262365000110043031 === 'function') {
                    return window.checkMandatory5262365000110043031();
                }
            }} acceptCharset='UTF-8'>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='2057345337abab05548d32fd4c2a277f7e32602ed9bbaf34aee66b720dde72cb' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='76f8392fd5115ed60e5a24d82a12df1ad07dd5d9b221471f1a41477bba6b703b07850c6b4696aa0531251e9566a3806d' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https&#x3a;&#x2f;&#x2f;pueblitocaribeno.com&#x2f;gracias' />

                <div className={styles.row}>
                    <label className={styles.label} htmlFor='First_Name'>Nombre <span className={styles.required}>*</span></label>
                    <input type='text' id='First_Name' name='First Name' maxLength='40' className={styles.input} required aria-label='Nombre' />
                </div>

                <div className={styles.row}>
                    <label className={styles.label} htmlFor='Last_Name'>Apellidos <span className={styles.required}>*</span></label>
                    <input type='text' id='Last_Name' name='Last Name' maxLength='80' className={styles.input} required aria-label='Apellidos' />
                </div>

                <div className={styles.row}>
                    <label className={styles.label} htmlFor='Phone'>Teléfono <span className={styles.required}>*</span></label>
                    <input type='text' id='Phone' name='Phone' maxLength='30' className={styles.input} required aria-label='Teléfono' />
                </div>

                <div className={styles.row}>
                    <label className={styles.label} htmlFor='Email'>Correo electrónico <span className={styles.required}>*</span></label>
                    <input type='email' id='Email' name='Email' maxLength='100' className={styles.input} required aria-label='Email' />
                </div>

                {/* Hidden fields with default values as per Zoho HTML */}
                <div className={`${styles.row} ${styles.hiddenRow}`}>
                    <label className={styles.label} htmlFor='Lead_Source'>Fuente de Posible Cliente</label>
                    <select className={styles.select} id='Lead_Source' name='Lead Source'>
                        <option value='Pagina Web' selected>Pagina Web</option>
                    </select>
                </div>

                <div className={`${styles.row} ${styles.hiddenRow}`}>
                    <label className={styles.label} htmlFor='Lead_Status'>Estado de Posible Cliente</label>
                    <select className={styles.select} id='Lead_Status' name='Lead Status'>
                        <option value='Nuevo' selected>Nuevo</option>
                    </select>
                </div>

                <div className={`${styles.row} ${styles.hiddenRow}`}>
                    <label className={styles.label} htmlFor='LEADCF15'>Proyecto de interés</label>
                    <select className={styles.select} id='LEADCF15' name='LEADCF15'>
                        <option value='Pueblito Caribeño' selected>Pueblito Caribeño</option>
                    </select>
                </div>

                <input type='text' style={{ display: 'none' }} name='aG9uZXlwb3Q' value='' />

                <div className={styles.buttonContainer}>
                    <input type='submit' id='formsubmit' className={styles.submitButton} value='Enviar' />
                    <input type='reset' className={styles.resetButton} value='Restablecer' />
                </div>

                {/* Zoho Helper Functions */}
                <Script id="zoho-form-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                        function addAriaSelected5262365000110043031(){
                            var optionElem = event.target;
                            var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
                            if (previousSelectedOption) {
                                previousSelectedOption.removeAttribute('aria-selected');
                            }
                            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
                        }
                        function validateEmail5262365000110043031(){
                            var form = document.forms['WebToLeads5262365000110043031'];
                            var emailFld = form.querySelectorAll('[type=email]');
                            var i;
                            for(i = 0; i < emailFld.length; i++ ) {
                                var emailVal = emailFld[i].value;
                                if ((emailVal.replace (/^\\s+|\\s+$/g,'') ) .length != 0) {
                                    var atpos = emailVal.indexOf('@');
                                    var dotpos = emailVal.lastIndexOf('.');
                                    if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                                        alert('Introduzca una dirección de correo electrónico válida. ');
                                        emailFld[i].focus();
                                        return false;
                                    }
                                }
                            }
                            return true;
                        }
                        function checkMandatory5262365000110043031(){
                            var mndFileds = new Array('First Name', 'Last Name', 'Email', 'Phone');
                            var fldLangVal = new Array('Nombre', 'Apellidos', 'Correo electrónico', 'Teléfono');
                            for (var i = 0; i < mndFileds.length; i++ ) {
                                var fieldObj = document.forms['WebToLeads5262365000110043031'][mndFileds[i]];
                                if (fieldObj) {
                                    if(((fieldObj.value).replace (/^\\s+|\\s+$/g,'')).length == 0) {
                                        alert(fldLangVal[i] + ' no puede estar vacío.');
                                        fieldObj.focus();
                                        return false;
                                    }
                                }
                            }
                            if ( !validateEmail5262365000110043031() ) { return false; }
                            document.querySelector('#formsubmit').setAttribute('disabled', true);
                        }
                    `
                }} />
                
                <Script id="zoho-analytics" src="https://crm.zoho.com/crm/WebFormAnalyticsServeServlet?rid=2057345337abab05548d32fd4c2a277f7e32602ed9bbaf34aee66b720dde72cb&tw=2057345337abab05548d32fd4c2a277f7e32602ed9bbaf34aee66b720dde72cb" strategy="lazyOnload" />
            </form>
        </div>
    );
};

export default ZohoContactForm;
