import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1179 1310" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M579.842 0.365974C566.644 1.43297 554.192 5.01597 541.589 11.372C521.549 21.478 50.2274 279.271 44.9724 282.999C31.0524 292.876 16.8904 310.043 9.84838 325.574C5.19838 335.829 1.96739 348.333 0.806387 360.566C0.0763874 368.253 -0.146624 462.688 0.0913758 662.747C0.410376 931.181 0.567385 954.268 2.11638 960.46C5.84939 975.382 11.0014 987.491 18.5784 999.157C23.9904 1007.49 41.1344 1024.1 49.8424 1029.45C65.2494 1038.91 542.669 1298.7 550.468 1301.86C564.245 1307.45 576.947 1309.54 593.342 1308.91C608.425 1308.33 615.428 1306.97 627.712 1302.24C636.519 1298.84 1121.38 1034.82 1132.34 1027.45C1155.71 1011.74 1172.38 985.581 1177.32 956.866C1178.66 949.042 1178.84 913.129 1178.84 655.188C1178.84 453.433 1178.51 359.959 1177.78 354.569C1173.87 325.899 1155.65 297.112 1131.25 281.067C1120.2 273.8 636.888 10.605 628.218 7.13397C614.028 1.45197 596.584 -0.989026 579.842 0.365974ZM601.006 53.694C604.671 54.471 609.171 55.849 611.006 56.756C612.841 57.664 724.302 118.333 858.697 191.577C1125.35 336.898 1110.42 328.266 1118.38 341.747C1120.32 345.047 1122.8 350.607 1123.88 354.102C1125.81 360.357 1125.84 365.093 1125.84 654.142C1125.84 978.25 1126.35 952.881 1119.58 965.595C1117.81 968.901 1113.64 974.343 1110.29 977.688C1104.52 983.459 1091.61 990.645 858.274 1117.92C723.012 1191.7 609.417 1253.06 605.842 1254.28C596.537 1257.45 582.936 1257.39 573.294 1254.12C569.014 1252.67 470.043 1199.31 321.294 1118.24C78.2854 985.806 76.2864 984.691 69.2424 977.747C61.4794 970.094 55.9724 960.27 53.9394 950.448C53.1574 946.673 52.8464 861.547 52.8574 654.448C52.8734 335.847 52.4524 357.905 58.7484 345.432C62.3214 338.355 67.3484 332.216 73.6154 327.276C76.2154 325.228 188.634 263.405 323.435 189.894C584.642 47.449 575.064 52.414 588.842 52.319C591.867 52.299 597.341 52.917 601.006 53.694ZM576.342 128.731C568.478 130.195 561.277 132.511 555.342 135.484C553.142 136.586 531.359 149.471 506.935 164.117C470.749 185.817 461.154 192.029 455.104 197.672C443.403 208.585 435.335 222.128 431.23 237.747C429.46 244.48 429.379 260.231 429.106 650.497L428.823 1056.25H455.332H481.842V855.247V654.247H615.842H749.842V627.747V601.247H615.842H481.842V426.425C481.842 230.701 481.236 246.251 489.19 237.827C492.123 234.72 505.821 225.963 535.842 208C559.217 194.015 579.872 182.049 581.741 181.41C587.381 179.481 595.749 179.99 601.342 182.602C604.092 183.886 641.217 204.876 683.842 229.246C726.467 253.616 762.017 273.717 762.842 273.915C763.885 274.166 767.311 269.015 774.086 257.011C779.445 247.516 785.176 237.413 786.82 234.56L789.81 229.373L707.467 182.318C662.178 156.438 622.023 134.086 618.233 132.648C604.743 127.528 590.138 126.162 576.342 128.731ZM831.024 279.873C823.149 291.737 816.849 301.522 817.024 301.617C817.199 301.711 838.605 315.922 864.592 333.196L911.842 364.603V656.925V949.247H938.34H964.838L965.09 674.761L965.342 400.275L1011.08 430.761C1036.23 447.528 1056.98 461.247 1057.18 461.247C1057.38 461.247 1063.99 451.559 1071.86 439.718C1080.29 427.054 1085.8 417.837 1085.26 417.337C1083.33 415.551 846.811 258.248 846.095 258.274C845.681 258.289 838.899 268.008 831.024 279.873ZM294.842 464.797C294.842 628.694 294.665 650.689 293.325 653.28C289.487 660.701 275.094 662.197 269.988 655.705C268.909 654.333 267.043 649.957 265.841 645.979C257.469 618.268 237.141 600.799 209.106 597.223C189.188 594.682 163.996 603.924 151.567 618.331C141.625 629.857 136.45 641.862 134.793 657.247C134.289 661.922 133.87 717.385 133.86 780.497L133.842 895.247H160.342H186.842V777.648C186.842 645.334 186.288 654.765 194.266 651.142C199.329 648.842 204.007 648.757 208.485 650.882C212.378 652.729 213.848 655.147 216.308 663.747C221.129 680.603 234.083 696.999 248.542 704.545C278.847 720.363 318.203 710.891 336.117 683.469C338.532 679.772 341.512 674.346 342.74 671.412C348.004 658.824 347.842 665.383 347.842 465.159V279.247H321.342H294.842V464.797Z"/>
    </Svg>
  );
};

export default Icon;
