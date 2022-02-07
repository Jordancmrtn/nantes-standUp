import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import style from './style.module.css'

const Line = (props) => {

    const [strokeDashoffset, setStrokeDashoffset] = useState(0)
    const [scrollTop, setScrollTop] = useState(0);



    // useEffect(() => {
    //     const path = document.querySelector('path')
    //     const pathLenght = path?.getTotalLength()

    //     path.style.strokeDasharray = pathLenght + '' + pathLenght;
    //     path.style.strokeDashoffset = pathLenght;

    //     function watchScroll() {
    //         window.addEventListener('scroll', test(pathLenght, path))
    //     }
    //     watchScroll();
    //     return () => {
    //         window.removeEventListener("scroll", test);
    //     };
    // });

    useEffect(() => {
        const test = () => {
            const path = document.querySelector('path')
            const pathLenght = path?.getTotalLength()
    
            path.style.strokeDasharray = pathLenght + '' + pathLenght;
            path.style.strokeDashoffset = pathLenght;

            //Get the % of the scroll in the page
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

            const drawLenght = pathLenght * scrollPercentage

            const final = pathLenght - drawLenght
            console.log(scrollPercentage);
            
            setStrokeDashoffset(final)

            // path.style.strokeDashoffset = pathLenght - drawLenght
        }
        window.addEventListener("scroll", test);

        return () => window.removeEventListener("scroll", test);
    }, [scrollTop]);

    return ( 
        <div className={style.root}>
            <svg viewBox="0 0 533 1164" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path strokeDashoffset={strokeDashoffset} d="M257.5 1066.91C265.157 1067.56 273 1066.06 273 1065C273 1063.46 269 1063.5 260.5 1061.5C252 1059.5 249.5 1042.5 248 1040.5C246.5 1038.5 242.5 1039.5 242.5 1041C242.5 1042.5 244 1058.5 260.5 1064C281.808 1071.1 290.5 1063.5 289.5 1061C288.5 1058.5 280 1058.5 270.5 1051.5C267.597 1049.36 264.5 1038.5 263 1038C261.5 1037.5 255 1037.5 255.5 1039.5C256.5 1049.5 263 1057.5 270.5 1060.5C279.968 1064.29 324.5 1081 328 1030C328.582 1021.52 311.5 1028.5 311.5 1024C311.5 1019.5 328 1025 330 1023.5C332 1022 330.5 1017 328 1017C325.5 1017 312.5 1017.5 312.5 1013C312.5 1008.5 326.5 1012 329 1012.5C331.5 1013 331 1007 330 1006C329 1005 318.5 1006 315.5 1005C312.5 1004 311.5 1001.5 313.5 999.999C315.5 998.499 330.5 1002 330.5 997.499C330.5 992.999 325.5 994.499 321.5 994.999C317.5 995.499 311.5 993.999 312 989.499C312.5 984.999 331 991.999 331 987.999C331 983.999 324.5 983.499 318.5 982.999C312.5 982.499 311.5 980.499 312.5 976.999C313.5 973.499 326.5 979.999 329 980.499C331.5 980.999 331 974.499 330 973.499C329 972.499 318 970.999 316 970.999C314 970.999 310.5 965.999 312.5 964.499C314.5 962.999 331 971.499 331 965.499C331 960.999 318 958.999 316 958.499C314 957.999 310.387 957.224 312 953.999C314 949.999 330 961.499 330 954.999C330 948.499 315.5 945.999 314 945.999C312.5 945.999 311.5 944.999 311.5 942.499C315.5 938.999 323 943.499 329 945.999C329 939.999 329.418 918.571 311.5 915.499C294 912.499 321.5 1097 296 1103C284 1106.5 281.629 1083.72 296 1085C307.978 1086.06 309 1105 289.5 1103C280.043 1114.97 268 1135.38 268 1162.5M257.5 1066.91C254.051 1066.62 250.639 1065.9 248 1064.5C239.5 1060 232.5 1051.5 231.5 1043.5C231 1041 235 1039.5 237 1042.5C239 1045.5 241.5 1056.5 248 1060C254.5 1063.5 261 1065.83 257.5 1066.91ZM257.5 1066.91C252.333 1067.44 240.6 1067.5 235 1063.5C228 1058.5 222 1053 221 1043.5C220.5 1041 225 1040 226 1042.5C227 1045 228.5 1055.5 233.5 1058.5C238.5 1061.5 251.5 1068 244 1068C236.5 1068 222 1061.5 220 1060C218 1058.5 213 1054.5 211.5 1043C211.241 1041.02 216 1040.5 217 1043.5C217.5 1045 221.5 1057.5 225.5 1060.5C229.5 1063.5 239.5 1066.91 232.5 1066.91C225.5 1066.91 214 1064.5 211 1053C208 1041.5 208 1042.5 206.5 1042.5C206.5 1040.1 206.166 1034.83 206 1032.5C210.5 1032 245.5 1030.5 254.5 1028.5C263.5 1026.5 296.5 1028.5 298 1028.5C299.5 1028.5 302 1024.5 297 1023C292 1021.5 257 1020 240.5 1022C224 1024 208 1026.5 207 1026C206 1025.5 204.5 1021.5 206.5 1021C208.5 1020.5 249 1016 256.5 1015.5C264 1015 294.012 1015.78 296 1016C300.5 1016.5 300.5 1010.5 297 1010C286.166 1009.17 261.1 1008 247.5 1010C230.5 1012.5 210 1015.5 208 1015.5C206 1015.5 204 1010.5 206.5 1010C209 1009.5 246.5 1004 254.5 1003.5C262.5 1003 293.938 1005 296 1005C299.5 1005 303 999.999 296.5 998.499C287.5 997.333 265.8 995.499 251 997.499C232.5 999.999 209.897 1002.87 208 1003.5C205 1004.5 204.5 997.999 207 997.499C219 995.833 245.2 992.399 254 991.999C265 991.499 294 992.499 296.5 991.999C299 991.499 300 986.999 298 986.499C296 985.999 264.5 982.999 250 985.499C235.5 987.999 209 990.999 207 990.999C205 990.999 204.5 986.499 206.5 985.499C208.5 984.499 237.5 979.499 251 978.999C264.5 978.499 294.5 980.499 297 979.999C299.5 979.499 300.5 975.499 298 974.499C295.5 973.499 262 971.499 250 973.499C238 975.499 210 978.999 207.5 978.999C205 978.999 204 975.499 206.5 974.499C209 973.499 242.5 966.999 253 966.999C263.5 966.999 293 967.999 296 967.999C299 967.999 301 963.499 297.5 962.499C294 961.499 262 959.499 249 961.499C236 963.499 211 966.499 208 966.999C205 967.499 204 961.499 207 961.499C210 961.499 240 956.499 252 955.499C264 954.499 293 955.499 296.5 955.499C300 955.499 301.5 950.999 296.5 949.999C291.5 948.999 266.5 946.499 251.5 948.999C236.5 951.499 209 955.499 207 955.499C205 955.499 204 950.999 206.5 950.499C209 949.999 241.5 942.499 256 942.499C270.5 942.499 292.5 944.499 296.5 943.499C300.5 942.499 302 938.999 297 937.499C292 935.999 253.5 934.499 240.5 937.499C230.1 939.899 212.833 943.166 205.5 944.499C202.5 936.999 208 921.499 217.5 917.999C212 928.999 211.5 933.499 214 932.999C216.5 932.499 216.5 912.999 228.5 912.499C223.5 917.499 217.5 933.999 223 931.999C228.5 929.999 224.5 908.999 241 908.999C234.5 913.999 226.5 930.499 232.5 929.499C238.5 928.499 234.5 916.999 244 908.999C248 907.799 251.666 907.499 253 907.499C245.5 911.999 238.3 929.599 245.5 927.999C252.5 926.999 250.2 910.599 257 906.999C259.833 906.499 261.7 906.199 264.5 906.999C255 910.999 254 918.999 255 923.499C256 927.999 268 932.5 268 900C268 900 268 531.5 268 403C268 278.5 585 310 524 107C468.559 -77.5001 7.50001 -9.5 2.00007 237C0.490254 304.668 142 448.5 288.5 285" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

Line.propTypes = {};

export default Line;
