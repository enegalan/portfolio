import { light } from '@mui/material/styles/createPalette';
import React, { useEffect, useState } from 'react';

export default function DeveloperSVG() {
    const [lightOn, setLightOn] = useState(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const lightElement = document.getElementById("lightElement");
            if (lightElement) {
                lightElement.classList.toggle("light");
                setLightOn(prevLightOn => !prevLightOn);
            }
        }, 5000); // Cambia 5000 a la frecuencia que desees en milisegundos

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);
    return (
        <div className="main-container">
            <div className="container">
                <div>
                    <svg x="0px" y="0px" width="1280px"
                        height="1024px">
                        <defs>
                            <filter filter="url(#allmulti)" id="allmulti">
                                <feBlend mode="multiply" />
                            </filter>
                        </defs>
                        <g id="Layer_3">
                            <rect display="none" fill="#252B49" width="1280" height="1024" />
                            <g>
                                <rect x="570.511" y="537" fill="#1E1E1E" width="137" height="4" />
                                <g>
                                    <rect x="551.625" y="388.5" fill="#1E1E1E" width="172" height="100" />
                                    <rect x="555.125" y="392.5" fill="#252B49" width="165" height="92" />
                                </g>
                                <g>
                                    <path fill="#1E1E1E" d="M810.167,507h-69.334c-2.945,0-5.333-2.388-5.333-5.334v-87.332c0-2.946,2.388-5.334,5.333-5.334h69.334
            c2.945,0,5.333,2.388,5.333,5.334v87.332C815.5,504.612,813.112,507,810.167,507z"/>
                                    <rect x="735.5" y="458" fill="#E5E5E5" width="80" height="49" />
                                    <rect x="740.5" y="463" fill="#1E1E1E" width="70" height="25" />
                                    <rect x="735.5" y="507" fill="#777777" width="80" height="5" />
                                    <rect x="735.5" y="507" fill="#7C7C7C" width="80" height="2.064" />
                                    <rect x="804.5" y="512" fill="#4C4C4C" width="6" height="29" />
                                    <rect x="804.5" y="512" fill="#444444" width="6" height="9" />
                                    <rect x="740.5" y="512" fill="#4C4C4C" width="6" height="29" />
                                    <rect x="740.5" y="512" fill="#444444" width="6" height="9" />
                                </g>
                                <path fill="#7C7C7C" d="M903.864,555H374c-2.485,0-4.5-2.015-4.5-4.5v-5c0-2.485,2.015-4.5,4.5-4.5h529.864
          c2.485,0,4.5,2.015,4.5,4.5v5C908.364,552.985,906.35,555,903.864,555z"/>
                                <path fill="#757575" d="M903.864,555H374c-2.485,0-4.5-1.008-4.5-2.25v-2.5c0-1.242,2.015-2.25,4.5-2.25h529.864
          c2.485,0,4.5,1.008,4.5,2.25v2.5C908.364,553.992,906.35,555,903.864,555z"/>
                                <rect x="399.5" y="555" fill="#4C4C4C" width="14" height="151" />
                                <rect x="864.5" y="555" fill="#4C4C4C" width="14" height="151" />
                                <rect x="399.5" y="555" fill="#444444" width="14" height="47.75" />
                                <rect x="864.5" y="555" fill="#444444" width="14" height="47.459" />
                                <g>
                                    <rect x="474.5" y="485.995" fill="#E5E5E5" width="18" height="55" />
                                    <rect x="463.5" y="535.995" fill="#1E1E1E" width="40" height="5" />
                                    <rect x="438.625" y="317.495" fill="#1E1E1E" width="100" height="172" />
                                    <rect x="442.625" y="320.995" fill="#252B49" width="92" height="165" />
                                    <rect x="475" y="489.995" fill="#DDDDDD" width="17" height="13" />
                                </g>
                                <rect x="561.5" y="412" opacity="0.5" fill="#4D4A5C" width="105" height="34" />
                                <rect x="561.5" y="400" opacity="0.5" fill="#4D4A5C" width="152" height="7" />
                                <rect x="561.5" y="451" opacity="0.5" fill="#4D4A5C" width="31.08" height="25.2" />
                                <rect x="598.46" y="451" opacity="0.5" fill="#4D4A5C" width="31.08" height="25.2" />
                                <rect x="635.42" y="451" fill="#4D4A5C" width="31.08" height="25.2" />
                                <rect x="672.5" y="412" opacity="0.5" fill="#4D4A5C" width="41" height="64" />
                                <rect x="446.5" y="325" fill="#4D4A5C" width="11" height="4" />
                                <rect x="515.5" y="325" fill="#4D4A5C" width="11" height="4" />
                                <rect x="460.5" y="325" fill="#4D4A5C" width="52" height="4" />
                                <rect x="446.5" y="333" fill="#4D4A5C" width="24" height="4" />
                                <rect x="474.5" y="333" opacity="0.5" fill="#4D4A5C" width="38" height="4" />
                                <rect x="446.5" y="341" fill="#4D4A5C" width="80" height="4" />
                                <rect x="446.5" y="349" opacity="0.5" fill="#4D4A5C" width="56" height="4" />
                                <rect x="506.5" y="349" fill="#4D4A5C" width="20" height="4" />
                                <rect x="446.5" y="357" fill="#4D4A5C" width="76" height="4" />
                                <rect x="446.5" y="365" fill="#4D4A5C" width="38" height="4" />
                                <rect x="488.5" y="365" opacity="0.5" fill="#4D4A5C" width="34" height="4" />
                                <rect x="446.5" y="373" opacity="0.5" fill="#4D4A5C" width="76" height="4" />
                                <rect x="446.5" y="381" opacity="0.5" fill="#4D4A5C" width="66" height="4" />
                                <rect x="446.5" y="389" opacity="0.5" fill="#4D4A5C" width="59" height="4" />
                                <rect x="446.5" y="397" fill="#4D4A5C" width="48" height="4" />
                                <rect x="446.5" y="461" fill="#4D4A5C" width="76" height="4" />
                                <rect x="446.5" y="453" opacity="0.5" fill="#4D4A5C" width="56.288" height="4" />
                                <rect x="446.5" y="413" fill="#4D4A5C" width="63" height="4" />
                                <rect x="446.5" y="421" fill="#4D4A5C" width="56" height="4" />
                                <rect x="446.5" y="429" opacity="0.5" fill="#4D4A5C" width="49" height="4" />
                                <rect x="446.5" y="437" opacity="0.5" fill="#4D4A5C" width="34" height="4" />
                                <rect x="446.5" y="445" fill="#4D4A5C" width="43" height="4" />
                                <g filter="url(#allmulti)" id="allmulti">
                                    <polygon fill="#FFE497" points="830,357 416.666,541 843.276,540.995 844.5,386" className={`${lightOn ? 'light' : ''}`} id="lightElement" />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path fill="#D3BCA7" d="M554.283,705.248h-20.424c-4.103,0-7.43-3.773-7.43-8.43v-1.727c0-4.655,3.327-8.43,7.43-8.43
                l27.854,10.156C561.713,701.475,558.386,705.248,554.283,705.248z"/>
                                            <path fill="#C6B2A3" d="M549.172,697.908h-10.2c-2.05,0-3.71-1.885-3.71-4.211v-0.861c0-2.326,1.66-4.209,3.71-4.209
                l13.911,5.07C552.883,696.023,551.221,697.908,549.172,697.908z"/>
                                        </g>
                                        <path fill="#EAD6C1" d="M528.926,704.655l-2.639-1.335c-2.711-1.37-3.798-4.679-2.428-7.39l20.711-40.966
              c1.371-2.711,4.68-3.797,7.391-2.427l2.639,1.335c2.711,1.37,3.798,4.679,2.428,7.39l-20.711,40.966
              C534.945,704.939,531.637,706.025,528.926,704.655z"/>
                                        <g>
                                            <path fill="#D3BCA7" d="M721.859,705.248h20.424c4.103,0,7.43-3.773,7.43-8.43v-1.727c0-4.655-3.327-8.43-7.43-8.43
                l-27.854,10.156C714.43,701.475,717.757,705.248,721.859,705.248z"/>
                                            <path fill="#C6B2A3" d="M726.971,697.908h10.2c2.05,0,3.71-1.885,3.71-4.211v-0.861c0-2.326-1.66-4.209-3.71-4.209
                l-13.911,5.07C723.26,696.023,724.922,697.908,726.971,697.908z"/>
                                        </g>
                                        <path fill="#EAD6C1" d="M746.961,704.655l2.639-1.335c2.711-1.37,3.798-4.679,2.427-7.39l-20.71-40.966
              c-1.371-2.711-4.68-3.797-7.391-2.427l-2.639,1.335c-2.711,1.37-3.798,4.679-2.427,7.39l20.71,40.966
              C740.941,704.939,744.25,706.025,746.961,704.655z"/>
                                        <path fill="#E5D2C1" d="M734.95,680.824l2.639-1.334c2.711-1.371,4.319-3.648,3.591-5.088l-10.997-21.754
              c-0.729-1.439-3.516-1.496-6.228-0.125l-2.638,1.334c-2.711,1.371-4.319,3.648-3.591,5.088l10.997,21.754
              C729.452,682.139,732.239,682.195,734.95,680.824z"/>
                                        <path fill="#E5D2C1" d="M540.346,681.992l-2.639-1.335c-2.711-1.37-4.319-3.649-3.591-5.089l10.997-21.754
              c0.729-1.439,3.516-1.494,6.228-0.124l2.638,1.334c2.711,1.37,4.319,3.648,3.591,5.088l-10.997,21.754
              C545.844,683.306,543.057,683.361,540.346,681.992z"/>
                                    </g>
                                    <path fill="var(--primary)" d="M680.019,486.419v89.153c0,1.453-0.2,2.867-0.569,4.199c-1.801,6.479-7.65,11.229-14.601,11.229h-53.67
            c-7.28,0-13.36-5.217-14.82-12.184c-0.22-1.048-0.34-2.137-0.34-3.244v-89.153c0-6.56,4.021-12.153,9.69-14.392
            c1.699-0.67,3.539-1.037,5.47-1.037h53.67c1.931,0,3.78,0.367,5.479,1.037h0.011
            C675.998,474.275,680.019,479.859,680.019,486.419z"/>
                                    <path fill="var(--primary-light)" d="M679.655,507.457v43.086c0,0.703-0.198,1.387-0.563,2.031c-1.778,3.131-7.559,5.426-14.426,5.426h-53.031
            c-7.193,0-13.201-2.521-14.644-5.889c-0.218-0.506-0.336-1.032-0.336-1.568v-43.086c0-3.171,3.972-5.875,9.575-6.955
            c1.68-0.325,3.497-0.502,5.404-0.502h53.031c1.906,0,3.734,0.177,5.414,0.502h0.01
            C675.684,501.588,679.655,504.286,679.655,507.457z"/>
                                    <path fill="#1E1E1E" d="M731.037,667.113c-0.408,0.296-0.836,0.562-1.284,0.807l-2.181,1.214
            c-2.918,1.612-6.125,2.122-9.172,1.663c-4.541-0.663-8.714-3.51-11.044-8.029l-30.701-59.566l3.685,1
            c7.449,2.021,15.066-2.602,17.009-10.325l1.056-4.214c1.155-4.582,0.05-9.224-2.6-12.662c3.177,1.285,5.945,3.714,7.678,7.092
            l32.404,62.881C739.542,654.054,737.341,662.757,731.037,667.113z"/>
                                    <path fill="#1C1C1C" d="M715,607c-0.219,14.166-11.787,21.722-25,21l-0.646-0.161l-12.698-24.638L695.805,577l3.794,2.254
            l2.002,1.988l1.488,2.129L715,606.441V607z"/>
                                    <path fill="#1E1E1E" d="M599.655,603.212l-32.254,59.556c-2.449,4.52-6.834,7.366-11.606,8.029
            c-3.202,0.459-6.572-0.051-9.639-1.663l-2.291-1.214c-0.472-0.245-0.922-0.511-1.351-0.807
            c-6.624-4.367-8.938-13.06-5.106-20.141l34.064-62.881c1.82-3.367,4.719-5.807,8.058-7.092c-2.784,3.438-3.945,8.08-2.731,12.662
            l1.12,4.214c2.04,7.724,10.046,12.346,17.874,10.325L599.655,603.212z"/>
                                    <g>
                                        <path fill="#EAD6C1" d="M617.908,440.633c-0.069,0.01-0.14,0.01-0.209,0.01c-3.871,0-7-3.622-7-8.094
              c0-4.471,3.129-8.092,7-8.092v13.15C617.699,438.629,617.769,439.641,617.908,440.633z"/>
                                        <path fill="#EAD6C1" d="M668.699,432.549c0,4.472-3.141,8.094-7,8.094c-0.07,0-0.141,0-0.211-0.01
              c0.141-0.992,0.211-2.004,0.211-3.025v-13.15C665.559,424.457,668.699,428.078,668.699,432.549z"/>
                                    </g>
                                    <g>
                                        <path fill="#CEB7A5" d="M632.025,462.82v-4.818c-0.002,0-0.005-0.001-0.007-0.002v12.99h15v-7.756
              C642.248,465.242,637.038,465.073,632.025,462.82z"/>
                                        <path fill="#D3BCA7" d="M647.019,463.705V458c-2.34,0.978-4.86,1.506-7.489,1.506c-2.639,0-5.166-0.527-7.504-1.504v5.252
              C637.038,465.708,642.248,465.893,647.019,463.705z"/>
                                    </g>
                                    <path fill="#EAD6C1" d="M661.699,421.422v16.186c0,1.021-0.07,2.033-0.211,3.025c-1.109,8.295-6.74,15.133-14.3,17.904
            c-2.34,0.86-4.86,1.326-7.489,1.326c-2.641,0-5.17-0.466-7.511-1.326c-7.55-2.781-13.18-9.619-14.28-17.904
            c-0.14-0.992-0.209-2.004-0.209-3.025v-16.186c0-12.291,9.85-22.256,22-22.256c6.069,0,11.569,2.488,15.56,6.516
            C659.238,409.707,661.699,415.271,661.699,421.422z"/>
                                    <path d="M663.695,418.825v14.298c0,8.507-6.6,15.744-15.829,18.488c-2.553,0.76-5.302,1.17-8.171,1.17
            c-2.88,0-5.641-0.41-8.193-1.17c-9.218-2.752-15.807-9.99-15.807-18.488v-14.298c0-10.856,10.746-19.659,24-19.659
            c6.622,0,12.622,2.198,16.975,5.755C661.012,408.478,663.695,413.393,663.695,418.825z"/>
                                    <path fill="#1C1C1C" d="M559.806,606.483c-0.636,14.308,11.058,22.474,24.775,22.353l0.587-0.138l14.213-24.303l-18.684-27.347
            l-4.041,2.103l-2.168,1.916l-1.461,2.089l-13.196,22.762L559.806,606.483z"/>
                                    <path fill="#1E1E1E" d="M700.929,591.861l-1.06,4.246c-1.951,7.785-9.601,12.447-17.08,10.418l-3.7-1.01h-0.011l-30.779-8.357
            h-20.69l-30.8,8.368l-3.689,0.999c-7.48,2.029-15.131-2.633-17.08-10.418l-1.07-4.246c-1.16-4.62-0.051-9.303,2.609-12.77
            c1.82-2.372,4.371-4.184,7.41-5.005l11.03-2.997v4.037c0,1.135,0.12,2.248,0.34,3.32c1.46,7.129,7.54,12.467,14.82,12.467h53.67
            c6.95,0,12.8-4.859,14.601-11.488c0.369-1.363,0.569-2.811,0.569-4.299v-3.996l10.899,2.956c3.041,0.821,5.58,2.633,7.4,5.005
            C700.979,582.559,702.089,587.241,700.929,591.861z"/>
                                    <path fill="#D3BCA7" d="M648.809,537.965L648.809,537.965c-1.242-4.76,1.609-9.626,6.369-10.868l20.743-5.413l30.719-8.017
            c4.759-1.242,9.626,1.609,10.868,6.368v0.001c1.242,4.76-1.609,9.625-6.369,10.867l-51.463,13.43
            C654.916,545.575,650.051,542.725,648.809,537.965z"/>
                                    <path opacity="0.02" d="M678.129,521.107c9.695,6.252,23.727,14.395,35.024,8.799L707,522.334l-13.696-5.187L678.129,521.107z" />
                                    <g>
                                        <path fill="#E5D2C1" d="M716.056,528.424c-3.995,3.779-10.356,3.604-14.137-0.392l-5.017-5.302
              c-3.78-3.995-9.966-10.532-13.746-14.527l-15.603-16.489c-3.78-3.995-3.604-10.356,0.391-14.137h0.001
              c3.995-3.78,10.356-3.604,14.137,0.391l8.781,9.28c3.78,3.995,8.413,8.892,10.295,10.881s6.515,6.886,10.295,10.881l4.993,5.277
              C720.227,518.282,720.051,524.644,716.056,528.424z"/>
                                    </g>
                                    <g>
                                        <line fill="var(--primary)" x1="700.829" y1="497.988" x2="685.328" y2="512.446" />
                                    </g>
                                    <path fill="#D3BCA7" d="M632.027,537.965L632.027,537.965c1.242-4.76-1.609-9.626-6.369-10.868l-51.462-13.43
            c-4.759-1.242-9.626,1.609-10.868,6.368v0.001c-1.242,4.76,1.609,9.625,6.369,10.867l51.463,13.43
            C625.92,545.575,630.785,542.725,632.027,537.965z"/>
                                    <path opacity="0.02" d="M603.153,521.107c-9.694,6.252-23.726,14.395-35.023,8.799l6.153-7.572l13.696-5.187L603.153,521.107z" />
                                    <g>
                                        <path fill="#E5D2C1" d="M564.78,528.424c3.995,3.779,10.356,3.604,14.137-0.392l34.365-36.318
              c3.78-3.995,3.604-10.356-0.391-14.137h-0.001c-3.995-3.78-10.356-3.604-14.137,0.391l-34.364,36.319
              C560.609,518.282,560.785,524.644,564.78,528.424z"/>
                                    </g>
                                    <g>
                                        <line fill="var(--primary)" x1="580.007" y1="497.988" x2="595.508" y2="512.446" />
                                    </g>
                                    <path fill="var(--primary)" d="M675.658,471.75c-24.21-3.867-45.879-4.763-69.949,0.277" />
                                    <polygon fill="#DDCDBF" points="689.098,514.482 703.612,500.723 695.518,492.168 682.994,508.032 			" />
                                    <g>
                                        <path fill="var(--primary)" d="M685.508,512.531l-21.76-23.161c-3.767-4.008-3.568-10.369,0.44-14.135l1.234-1.159
              c4.009-3.766,10.369-3.567,14.136,0.441l21.76,23.161"/>
                                    </g>
                                    <polygon fill="#DDCDBF" points="576.174,501.832 591.127,515.129 600.505,505.218 580.007,497.781 			" />
                                    <g>
                                        <path fill="var(--primary)" d="M595.328,512.531l21.76-23.161c3.767-4.008,3.568-10.369-0.44-14.135l-1.234-1.159
              c-4.009-3.766-10.369-3.567-14.136,0.441l-21.76,23.161"/>
                                    </g>
                                </g>
                                <g>
                                    <path fill="#757575" d="M667.658,545h-57.295c-9.113,0-16.5-7.387-16.5-16.5v-23.832c0-9.113,7.387-16.5,16.5-16.5h57.295
            c9.112,0,16.5,7.387,16.5,16.5V528.5C684.158,537.613,676.771,545,667.658,545z"/>
                                    <path fill="#7C7C7C" d="M667.658,549h-57.295c-9.113,0-16.5-7.387-16.5-16.5v-23.832c0-9.113,7.387-16.5,16.5-16.5h57.295
            c9.112,0,16.5,7.387,16.5,16.5V532.5C684.158,541.613,676.771,549,667.658,549z"/>
                                    <path fill="#7C7C7C" d="M676.51,624.834h-75c-7.731,0-14-6.268-14-14l0,0c0-7.732,6.269-14,14-14h75c7.732,0,14,6.268,14,14l0,0
            C690.51,618.566,684.242,624.834,676.51,624.834z"/>
                                    <path fill="#777777" d="M674.649,611h-70.631c-7.282,0-13.185-3.134-13.185-7l0,0c0-3.866,5.902-7,13.185-7h70.631
            c7.282,0,13.185,3.134,13.185,7l0,0C687.834,607.866,681.932,611,674.649,611z"/>
                                    <rect x="632.51" y="523" fill="#4C4C4C" width="13" height="83.834" />
                                    <rect x="632.51" y="523" fill="#444444" width="13" height="43.375" />
                                    <rect x="632.51" y="624" fill="#4C4C4C" width="13" height="47.834" />
                                    <rect x="632.51" y="624" fill="#444444" width="13" height="23.375" />
                                    <g>
                                        <circle fill="#4C4C4C" cx="567.01" cy="694.834" r="9" />
                                        <circle fill="#444444" cx="568.785" cy="690.834" r="5" />
                                        <circle fill="#4C4C4C" cx="640.01" cy="694.834" r="9" />
                                        <circle fill="#4C4C4C" cx="711.01" cy="694.834" r="9" />
                                        <path fill="#7C7C7C" d="M565.628,684.386L565.628,684.386c0.743,3.513,4.192,5.757,7.704,5.013l67.395-14.26
              c3.512-0.744,5.757-4.193,5.014-7.705l0,0c-0.744-3.512-4.193-5.758-7.705-5.014l-67.394,14.262
              C567.129,677.424,564.885,680.873,565.628,684.386z"/>
                                        <path fill="#757575" d="M571.885,680.066L571.885,680.066c0.42,1.983,3.259,3.063,6.34,2.41l59.141-12.515
              c3.081-0.651,5.239-2.788,4.82-4.772l0,0c-0.422-1.983-3.26-3.063-6.342-2.41l-59.139,12.515
              C573.623,675.945,571.465,678.082,571.885,680.066z"/>
                                        <circle fill="#444444" cx="709.785" cy="690.834" r="5" />
                                        <ellipse fill="#444444" cx="639.859" cy="689.834" rx="5.65" ry="5" />
                                        <path fill="#7C7C7C" d="M713.74,684.386L713.74,684.386c-0.743,3.513-4.192,5.757-7.705,5.013l-67.394-14.26
              c-3.513-0.744-5.757-4.193-5.014-7.705l0,0c0.743-3.512,4.192-5.758,7.704-5.014l67.395,14.262
              C712.239,677.424,714.483,680.873,713.74,684.386z"/>
                                        <path fill="#7C7C7C" d="M639.51,689.834L639.51,689.834c-3.59,0-6.5-2.91-6.5-6.5v-14c0-3.59,2.91-6.5,6.5-6.5l0,0
              c3.59,0,6.5,2.91,6.5,6.5v14C646.01,686.924,643.1,689.834,639.51,689.834z"/>
                                        <path fill="#757575" d="M639.446,681.844L639.446,681.844c-3.555,0-6.437-2.109-6.437-4.711v-10.145
              c0-2.602,2.882-4.711,6.437-4.711l0,0c3.554,0,6.437,2.109,6.437,4.711v10.145C645.883,679.734,643,681.844,639.446,681.844z"/>
                                        <path fill="#757575" d="M707.186,680.066L707.186,680.066c-0.42,1.983-3.259,3.063-6.34,2.41l-59.141-12.515
              c-3.081-0.651-5.239-2.788-4.82-4.772l0,0c0.422-1.983,3.26-3.063,6.342-2.41l59.139,12.515
              C705.447,675.945,707.605,678.082,707.186,680.066z"/>
                                    </g>
                                </g>
                                <g opacity="0.5">
                                    <polygon fill="#E5E5E5" points="882.5,541 904,447 911,447 889.5,541 			" />
                                    <polygon fill="#E5E5E5" points="911.02,444.697 869.308,357.758 862.48,359.303 904.192,446.242 			" />
                                    <polygon opacity="0.1" points="874.43,384.207 880.531,381.152 873.243,365.961 868.35,371.536 			" />
                                    <g>
                                        <path fill="#E5E5E5" d="M827.19,352.015c9.955-5.051,22.12-1.075,27.171,8.88s1.076,22.121-8.88,27.172" />

                                        <rect x="848.224" y="340.519" transform="matrix(0.8918 -0.4525 0.4525 0.8918 -67.2277 429.9479)" fill="#E5E5E5" width="34.001" height="30" />

                                        <rect x="847.118" y="346.436" transform="matrix(0.8917 -0.4526 0.4526 0.8917 -72.4893 423.889)" fill="#D6D6D6" width="4.999" height="34" />
                                    </g>
                                    <g>
                                        <circle fill="#CCCCCC" cx="907.625" cy="447.125" r="6.375" />
                                        <circle fill="#E5E5E5" cx="907.625" cy="447.125" r="5.125" />
                                    </g>
                                    <rect x="862" y="537" fill="#DDDDDD" width="40" height="4" />
                                </g>
                                <g opacity="0.2">
                                    <path fill="#C6C6C6" d="M538.62,512.531c-6.021,0-10.89,4.88-10.89,10.891c0,6.02,4.869,10.899,10.89,10.899
            s10.899-4.88,10.899-10.899C549.52,517.411,544.641,512.531,538.62,512.531z M538.62,531.901c-4.681,0-8.479-3.79-8.479-8.479
            c0-4.681,3.799-8.471,8.479-8.471c4.69,0,8.479,3.79,8.479,8.471C547.1,528.111,543.311,531.901,538.62,531.901z"/>
                                    <rect x="514" y="510" fill="#B2B2B2" width="26" height="31" />
                                    <rect x="514" y="510" opacity="0.1" width="8" height="31" />
                                </g>
                            </g>
                            <g opacity="0.1">
                                <line fill="#E5D2C1" x1="369" y1="706" x2="908" y2="706" />
                                <g>
                                    <path d="M369,707.5c27.513,0,55.025,0,82.539,0c60.821,0,121.643,0,182.464,0c61.555,0,123.108,0,184.663,0
            c29.712,0,59.424,0,89.135,0c0.066,0,0.133,0,0.199,0c1.935,0,1.935-3,0-3c-27.513,0-55.025,0-82.539,0
            c-60.821,0-121.643,0-182.464,0c-61.555,0-123.108,0-184.663,0c-29.712,0-59.424,0-89.136,0c-0.065,0-0.132,0-0.198,0
            C367.065,704.5,367.065,707.5,369,707.5L369,707.5z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}