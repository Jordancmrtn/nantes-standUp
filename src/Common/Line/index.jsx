import { useEffect, useState } from 'react';

import style from './style.module.css'

const Line = () => {

    const [strokeDashoffset, setStrokeDashoffset] = useState(0)
    const [strokeDasharray, setStrokeDasharray] = useState(0)

    useEffect(() => {
        const test = () => {
            const path = document.querySelector('path')
            const pathLenght = path?.getTotalLength()

            setStrokeDasharray(pathLenght)

                //Get the % of the scroll in the page
                const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
                const drawLenght = pathLenght * scrollPercentage
    
                const final = pathLenght - drawLenght 
                
                console.log(scrollPercentage);
                setStrokeDashoffset(final)

        }
        window.addEventListener("scroll", test);

        return () => window.removeEventListener("scroll", test);
    }, []);

    return ( 
        <div className={style.root}>
            {/* <svg viewBox="0 0 533 1164" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path  d="M257.5 1066.91C265.157 1067.56 273 1066.06 273 1065C273 1063.46 269 1063.5 260.5 1061.5C252 1059.5 249.5 1042.5 248 1040.5C246.5 1038.5 242.5 1039.5 242.5 1041C242.5 1042.5 244 1058.5 260.5 1064C281.808 1071.1 290.5 1063.5 289.5 1061C288.5 1058.5 280 1058.5 270.5 1051.5C267.597 1049.36 264.5 1038.5 263 1038C261.5 1037.5 255 1037.5 255.5 1039.5C256.5 1049.5 263 1057.5 270.5 1060.5C279.968 1064.29 324.5 1081 328 1030C328.582 1021.52 311.5 1028.5 311.5 1024C311.5 1019.5 328 1025 330 1023.5C332 1022 330.5 1017 328 1017C325.5 1017 312.5 1017.5 312.5 1013C312.5 1008.5 326.5 1012 329 1012.5C331.5 1013 331 1007 330 1006C329 1005 318.5 1006 315.5 1005C312.5 1004 311.5 1001.5 313.5 999.999C315.5 998.499 330.5 1002 330.5 997.499C330.5 992.999 325.5 994.499 321.5 994.999C317.5 995.499 311.5 993.999 312 989.499C312.5 984.999 331 991.999 331 987.999C331 983.999 324.5 983.499 318.5 982.999C312.5 982.499 311.5 980.499 312.5 976.999C313.5 973.499 326.5 979.999 329 980.499C331.5 980.999 331 974.499 330 973.499C329 972.499 318 970.999 316 970.999C314 970.999 310.5 965.999 312.5 964.499C314.5 962.999 331 971.499 331 965.499C331 960.999 318 958.999 316 958.499C314 957.999 310.387 957.224 312 953.999C314 949.999 330 961.499 330 954.999C330 948.499 315.5 945.999 314 945.999C312.5 945.999 311.5 944.999 311.5 942.499C315.5 938.999 323 943.499 329 945.999C329 939.999 329.418 918.571 311.5 915.499C294 912.499 321.5 1097 296 1103C284 1106.5 281.629 1083.72 296 1085C307.978 1086.06 309 1105 289.5 1103C280.043 1114.97 268 1135.38 268 1162.5M257.5 1066.91C254.051 1066.62 250.639 1065.9 248 1064.5C239.5 1060 232.5 1051.5 231.5 1043.5C231 1041 235 1039.5 237 1042.5C239 1045.5 241.5 1056.5 248 1060C254.5 1063.5 261 1065.83 257.5 1066.91ZM257.5 1066.91C252.333 1067.44 240.6 1067.5 235 1063.5C228 1058.5 222 1053 221 1043.5C220.5 1041 225 1040 226 1042.5C227 1045 228.5 1055.5 233.5 1058.5C238.5 1061.5 251.5 1068 244 1068C236.5 1068 222 1061.5 220 1060C218 1058.5 213 1054.5 211.5 1043C211.241 1041.02 216 1040.5 217 1043.5C217.5 1045 221.5 1057.5 225.5 1060.5C229.5 1063.5 239.5 1066.91 232.5 1066.91C225.5 1066.91 214 1064.5 211 1053C208 1041.5 208 1042.5 206.5 1042.5C206.5 1040.1 206.166 1034.83 206 1032.5C210.5 1032 245.5 1030.5 254.5 1028.5C263.5 1026.5 296.5 1028.5 298 1028.5C299.5 1028.5 302 1024.5 297 1023C292 1021.5 257 1020 240.5 1022C224 1024 208 1026.5 207 1026C206 1025.5 204.5 1021.5 206.5 1021C208.5 1020.5 249 1016 256.5 1015.5C264 1015 294.012 1015.78 296 1016C300.5 1016.5 300.5 1010.5 297 1010C286.166 1009.17 261.1 1008 247.5 1010C230.5 1012.5 210 1015.5 208 1015.5C206 1015.5 204 1010.5 206.5 1010C209 1009.5 246.5 1004 254.5 1003.5C262.5 1003 293.938 1005 296 1005C299.5 1005 303 999.999 296.5 998.499C287.5 997.333 265.8 995.499 251 997.499C232.5 999.999 209.897 1002.87 208 1003.5C205 1004.5 204.5 997.999 207 997.499C219 995.833 245.2 992.399 254 991.999C265 991.499 294 992.499 296.5 991.999C299 991.499 300 986.999 298 986.499C296 985.999 264.5 982.999 250 985.499C235.5 987.999 209 990.999 207 990.999C205 990.999 204.5 986.499 206.5 985.499C208.5 984.499 237.5 979.499 251 978.999C264.5 978.499 294.5 980.499 297 979.999C299.5 979.499 300.5 975.499 298 974.499C295.5 973.499 262 971.499 250 973.499C238 975.499 210 978.999 207.5 978.999C205 978.999 204 975.499 206.5 974.499C209 973.499 242.5 966.999 253 966.999C263.5 966.999 293 967.999 296 967.999C299 967.999 301 963.499 297.5 962.499C294 961.499 262 959.499 249 961.499C236 963.499 211 966.499 208 966.999C205 967.499 204 961.499 207 961.499C210 961.499 240 956.499 252 955.499C264 954.499 293 955.499 296.5 955.499C300 955.499 301.5 950.999 296.5 949.999C291.5 948.999 266.5 946.499 251.5 948.999C236.5 951.499 209 955.499 207 955.499C205 955.499 204 950.999 206.5 950.499C209 949.999 241.5 942.499 256 942.499C270.5 942.499 292.5 944.499 296.5 943.499C300.5 942.499 302 938.999 297 937.499C292 935.999 253.5 934.499 240.5 937.499C230.1 939.899 212.833 943.166 205.5 944.499C202.5 936.999 208 921.499 217.5 917.999C212 928.999 211.5 933.499 214 932.999C216.5 932.499 216.5 912.999 228.5 912.499C223.5 917.499 217.5 933.999 223 931.999C228.5 929.999 224.5 908.999 241 908.999C234.5 913.999 226.5 930.499 232.5 929.499C238.5 928.499 234.5 916.999 244 908.999C248 907.799 251.666 907.499 253 907.499C245.5 911.999 238.3 929.599 245.5 927.999C252.5 926.999 250.2 910.599 257 906.999C259.833 906.499 261.7 906.199 264.5 906.999C255 910.999 254 918.999 255 923.499C256 927.999 268 932.5 268 900C268 900 268 531.5 268 403C268 278.5 585 310 524 107C468.559 -77.5001 7.50001 -9.5 2.00007 237C0.490254 304.668 142 448.5 288.5 285" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
            {/* <svg viewBox="0 0 533 1582" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path style={{strokeDashoffset: strokeDashoffset, strokeDasharray: strokeDasharray}} d="M268 1C268 1 268 422 268 515C81 728 0.490163 535.668 1.99998 468C7.49992 221.5 468.559 153.5 524 338C585 541 268 509.5 268 634C268 762.5 268 1131 268 1131C268 1163.5 256 1159 255 1154.5C254 1150 255 1142 264.5 1138C261.7 1137.2 259.833 1137.5 257 1138C250.2 1141.6 252.5 1158 245.5 1159C238.3 1160.6 245.5 1143 253 1138.5C251.666 1138.5 248 1138.8 244 1140C234.5 1148 238.5 1159.5 232.5 1160.5C226.5 1161.5 234.5 1145 241 1140C224.5 1140 228.5 1161 223 1163C217.5 1165 223.5 1148.5 228.5 1143.5C216.5 1144 216.5 1163.5 214 1164C211.5 1164.5 212 1160 217.5 1149C208 1152.5 202.5 1168 205.5 1175.5C212.833 1174.17 230.1 1170.9 240.5 1168.5C253.5 1165.5 292 1167 297 1168.5C302 1170 300.5 1173.5 296.5 1174.5C292.5 1175.5 270.5 1173.5 256 1173.5C241.5 1173.5 209 1181 206.5 1181.5C204 1182 205 1186.5 207 1186.5C209 1186.5 236.5 1182.5 251.5 1180C266.5 1177.5 291.5 1180 296.5 1181C301.5 1182 300 1186.5 296.5 1186.5C293 1186.5 264 1185.5 252 1186.5C240 1187.5 210 1192.5 207 1192.5C204 1192.5 205 1198.5 208 1198C211 1197.5 236 1194.5 249 1192.5C262 1190.5 294 1192.5 297.5 1193.5C301 1194.5 299 1199 296 1199C293 1199 263.5 1198 253 1198C242.5 1198 209 1204.5 206.5 1205.5C204 1206.5 205 1210 207.5 1210C210 1210 238 1206.5 250 1204.5C262 1202.5 295.5 1204.5 298 1205.5C300.5 1206.5 299.5 1210.5 297 1211C294.5 1211.5 264.5 1209.5 251 1210C237.5 1210.5 208.5 1215.5 206.5 1216.5C204.5 1217.5 205 1222 207 1222C209 1222 235.5 1219 250 1216.5C264.5 1214 296 1217 298 1217.5C300 1218 299 1222.5 296.5 1223C294 1223.5 265 1222.5 254 1223C245.2 1223.4 219 1226.83 207 1228.5C204.5 1229 205 1235.5 208 1234.5C209.897 1233.87 232.5 1231 251 1228.5C265.8 1226.5 287.5 1228.33 296.5 1229.5C303 1231 299.5 1236 296 1236C293.938 1236 262.5 1234 254.5 1234.5C246.5 1235 209 1240.5 206.5 1241C204 1241.5 206 1246.5 208 1246.5C210 1246.5 230.5 1243.5 247.5 1241C261.1 1239 286.166 1240.17 297 1241C300.5 1241.5 300.5 1247.5 296 1247C294.012 1246.78 264 1246 256.5 1246.5C249 1247 208.5 1251.5 206.5 1252C204.5 1252.5 206 1256.5 207 1257C208 1257.5 224 1255 240.5 1253C257 1251 292 1252.5 297 1254C302 1255.5 299.5 1259.5 298 1259.5C296.5 1259.5 263.5 1257.5 254.5 1259.5C245.5 1261.5 210.5 1263 206 1263.5C206.166 1265.83 206.5 1271.1 206.5 1273.5C208 1273.5 208 1272.5 211 1284C214 1295.5 225.5 1297.91 232.5 1297.91C239.5 1297.91 229.5 1294.5 225.5 1291.5C221.5 1288.5 217.5 1276 217 1274.5C216 1271.5 211.241 1272.02 211.5 1274C213 1285.5 218 1289.5 220 1291C222 1292.5 236.5 1299 244 1299C251.5 1299 238.5 1292.5 233.5 1289.5C228.5 1286.5 227 1276 226 1273.5C225 1271 220.5 1272 221 1274.5C222 1284 227.306 1290.65 235 1294.5C245 1299.5 253.641 1298.49 254 1296C254.446 1292.9 242.5 1289.5 237 1273.5C235.827 1270.09 231 1272 231.5 1274.5C232.5 1282.5 239.5 1291 248 1295.5L258.5 1300C266.157 1300.65 273 1297.06 273 1296C273 1294.46 269 1294.5 260.5 1292.5C252 1290.5 249.5 1273.5 248 1271.5C246.5 1269.5 242.5 1270.5 242.5 1272C242.5 1273.5 244 1289.5 260.5 1295C281.808 1302.1 290.5 1294.5 289.5 1292C288.5 1289.5 280 1289.5 270.5 1282.5C267.597 1280.36 264.5 1269.5 263 1269C261.5 1268.5 255 1268.5 255.5 1270.5C256.5 1280.5 263 1288.5 270.5 1291.5C279.968 1295.29 324.5 1312 328 1261C328.582 1252.52 311.5 1259.5 311.5 1255C311.5 1250.5 328 1256 330 1254.5C332 1253 330.5 1248 328 1248C325.5 1248 312.5 1248.5 312.5 1244C312.5 1239.5 326.5 1243 329 1243.5C331.5 1244 331 1238 330 1237C329 1236 318.5 1237 315.5 1236C312.5 1235 311.5 1232.5 313.5 1231C315.5 1229.5 330.5 1233 330.5 1228.5C330.5 1224 325.5 1225.5 321.5 1226C317.5 1226.5 311.5 1225 312 1220.5C312.5 1216 331 1223 331 1219C331 1215 324.5 1214.5 318.5 1214C312.5 1213.5 311.5 1211.5 312.5 1208C313.5 1204.5 326.5 1211 329 1211.5C331.5 1212 331 1205.5 330 1204.5C329 1203.5 318 1202 316 1202C314 1202 310.5 1197 312.5 1195.5C314.5 1194 331 1202.5 331 1196.5C331 1192 318 1190 316 1189.5C314 1189 310.387 1188.22 312 1185C314 1181 330 1192.5 330 1186C330 1179.5 315.5 1177 314 1177C312.5 1177 311.5 1176 311.5 1173.5C315.5 1170 323 1174.5 329 1177C329 1171 329.418 1149.57 311.5 1146.5C294 1143.5 321.5 1328 296 1334C284 1337.5 281.629 1314.72 296 1316C307.978 1317.06 309 1336 289.5 1334C280.043 1345.97 268 1366.38 268 1393.5V1581" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
            <svg className={style.svgLine} viewBox="0 0 26 1460" fill="none" preserveAspectRatio='xMidYMax meet'>
                <g filter="url(#filter0_d_3_9)">
                    <path style={{strokeDashoffset: strokeDashoffset, strokeDasharray: strokeDasharray}} d="M13 0C13 1024.51 13 1392.21 13 1448" stroke="url(#paint0_linear_3_9)" stroke-width="2" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_d_3_9" x="0" y="-12" width="26" height="1472" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_9"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_9" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_3_9" x1="13.5" y1="0" x2="13.5" y2="1448" gradientUnits="userSpaceOnUse">
                <stop offset="0.355054" stop-color="#FBE6EE" stop-opacity="0"/>
                <stop offset="0.355054" stop-color="#FBE6EE"/>
                <stop offset="1" stop-color="#FBE6EE" stop-opacity="0.01"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Line;
