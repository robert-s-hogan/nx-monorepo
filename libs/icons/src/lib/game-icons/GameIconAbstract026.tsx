
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract026Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-026'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className: propClassName, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`game-icon ${combinedClassNames}`}
        {...otherProps}
      >
        <path fill="currentColor" d="m256,21-22.4716,22.4718c-52.115,1.159-98.8523,6.1706-133.6563,13.9531h119.7029l-162.15,162.15v-119.7031c-7.7818,34.804-12.7939,81.5412-13.9529,133.6562l-22.4721,22.4719 22.4721,22.4719c1.159,52.1141 6.1711,98.8513 13.9529,133.6562v-119.7031l162.15,162.15h-119.7029c34.804,7.7825 81.5413,12.7941 133.6563,13.9531l22.4716,22.4719 22.4721-22.4719c52.1141-1.159 98.8513-6.1706 133.6562-13.9531h-119.7033l162.15-162.15v119.7031c7.7827-34.8049 12.7939-81.5421 13.9533-133.6562l22.4716-22.4719-22.4716-22.4719c-1.1595-52.115-6.1701-98.8523-13.9533-133.6562v119.7031l-162.15-162.15h119.7033c-34.8049-7.7825-81.5421-12.7941-133.6562-13.9531l-22.4721-22.4718zm0,24.3812 210.6192,210.6187-210.6192,210.7656-210.6183-210.7656 210.6183-210.6187zm0,8.0781-3.8183,3.8187-20.5625,20.5625-143.7909,143.7907-9.9875,9.9875-24.3812,24.3812 3.6722,3.8187h.1456l194.9034,195.05 3.8183,3.8187 3.8192-3.8187 20.5625-20.5625 9.9875-9.9875 133.6558-133.8032 10.1346-9.9875 20.5625-20.7094 3.8188-3.8187-3.6717-3.6719-.1456-.147-20.4153-20.5625h-.1456l-9.8404-9.9875-133.8034-133.6562-.1456-.1463-9.8408-9.9875h-.1456l-20.5626-20.5625-3.8192-3.8187zm0,7.6375 20.5625,20.5625-5.5808,5.4344c-.7063-.4238-1.472-.6695-2.2034-1.0281-.0649-.0288-.0894-.1189-.1456-.147-.0505-.0216-.1081.0216-.1456,0-.24-.1131-.4965-.1787-.7346-.294-.3481-.1261-.6753-.3012-1.0279-.4403-.0649-.0216-.0843-.1232-.1456-.147-.08-.0504-.2119-.1189-.2911-.147-.4829-.1816-.9748-.3128-1.4692-.4403-.1506-.036-.2912-.1045-.4418-.1463-.0894-.0288-.2018.0288-.2912,0-.4468-.1283-.8765-.3128-1.3216-.4403-.2868-.0649-.5895-.0894-.8817-.147-.7281-.1521-1.4707-.3474-2.2029-.4403-.183-.0216-.3899.0216-.5874,0-.3992-.036-.7999-.1247-1.175-.147-.2443-.0505-.4893.007-.7347,0h-.2912c-.7142-.0505-1.3418-.0505-2.0567,0-.3243,0-.7034-.0144-1.0279,0l-1.3221.147h-.2912c-.7525.0944-1.4593.2897-2.2034.4403-.0987.0505-.1975.1341-.2911.147-.2018.0432-.3856.1009-.5874.147-.4418.0504-.8963.0216-1.3221.1463-.08.0505-.2112.124-.2912.147-.3524.1023-.6789.3063-1.0284.4403-.4375.1679-.8921.2724-1.3216.4403-.5045.1931-.9748.3639-1.4692.5874-.1412.0576-.2962.0793-.4418.147l-.2912.147c-.6897.3358-1.3917.7754-2.0562,1.175l-5.4345-5.5813 20.5625-20.5625zm-188.5875,6.4625v126.3126l.1456-.147 126.1654-126.1657h-126.1654-.1456zm250.8625,0 126.1659,126.1657 .1456.147v-126.3126h-.1456-126.1659zm-31.725,24.0875 .1456.1463 133.6563,133.6563-5.5813,5.4343c-.8033-.4792-1.6619-.7788-2.4971-1.175-.5953-.2825-1.2864-.6349-1.9091-.8812-.1031-.036-.1924-.1088-.2912-.1463-.6731-.2551-1.3715-.3834-2.0563-.5873-.08-.0432-.0649-.1232-.1456-.147-.3711-.1059-.7684-.222-1.175-.294-.3856-.0944-.7882-.2176-1.175-.294-.6659-.1355-1.3841-.2039-2.0567-.294-.3099-.036-.5924-.0144-.8808,0-.1456-.0144-.2962.0144-.4418,0-.1975-.0216-.3899-.134-.5874-.147-.2443-.0432-.343-.1376-.5873-.147h-.2912c-.7142-.0432-1.3414-.0432-2.0562,0-.3243,0-.7034.1276-1.0284.147-.4656.0504-1.0058.0908-1.4683.147-.0937,0-.0504-.0144-.1456,0-.6558.0814-1.2676.2991-1.9096.4403-.0937.0216-.1975-.0216-.2912,0-.0987.0505-.343-.0144-.4418,0-.6263.1355-1.2906.2616-1.9091.4403-.08.0432-.0649-.0216-.1456,0-1.4528.4274-2.8741.9567-4.2596,1.6156l-.2912.147c-.7318.3574-1.4974.7516-2.2033,1.175l-7.4909-7.6376c5.0878-8.4447 5.5168-18.8475 1.3221-27.6125-.0504-.0576-.1175-.0872-.1456-.1463-.6637-1.4079-1.4462-2.8048-2.35-4.1125-.0504-.0576-.1081-.0915-.1456-.147-.9132-1.3019-1.9307-2.5016-3.0842-3.6719l-.1456-.147c-1.1642-1.164-2.3749-2.157-3.6721-3.0844-1.4109-.994-2.8773-1.9278-4.4058-2.6438-1.4109-.6717-2.9258-1.1817-4.4067-1.6156-7.7639-2.2752-16.2605-1.3346-23.3528,2.9375l-7.6376-7.6376c4.2723-7.0922 5.1696-15.4853 2.9375-23.2062-.418-1.475-.8131-2.9988-1.4687-4.4063-.0504-.0577-.1175-.0872-.1456-.147-.6644-1.4013-1.4467-2.8088-2.35-4.1125-.0505-.0577-.1081-.0915-.1456-.147-.9132-1.298-1.9307-2.5017-3.0846-3.6719-.0504-.0505-.0937-.0973-.1456-.1463-1.1642-1.164-2.3749-2.157-3.6717-3.0844-1.4109-.9939-2.8778-1.9278-4.4067-2.6438-1.4104-.6717-2.9253-1.1817-4.4058-1.6156-7.7644-2.2752-16.2611-1.3346-23.3533,2.9375l-7.6373-7.6375c.4713-.7811.7666-1.6639 1.175-2.4969 .32-.6544.7698-1.2548 1.0283-1.9093 .0505-.1333.0987-.3048.1456-.4403 .24-.6349.3949-1.2615.5873-1.9094 .0505-.116.1319-.1758.1456-.294 .1881-.65.3005-1.3968.4418-2.0562 .0504-.1182.1319-.1766.1456-.294 .1319-.6817.2068-1.3682.2962-2.0563 .0649-.472 0-.8476 0-1.3218 .0504-.4259.1319-.8955.1456-1.3219 .0504-.7953.0504-1.7013 0-2.4968-.0432-.6666-.2205-1.2806-.2912-1.9094v-.294c-.0987-.7693-.1225-1.546-.2912-2.35-.4605-2.2233-1.2145-4.523-2.2034-6.6094l-.1456-.294c-.3668-.7485-.7407-1.4809-1.175-2.2031l5.5813-5.4344-.1456-.147zm-61.2467.147 5.4341,5.4344c-.4324.7209-.8088,1.4549-1.175,2.2031-.0504.098-.0987.191-.1456.294-.3337.7034-.4793,1.4607-.7341,2.2031s-.5398,1.4496-.7346,2.2031c-.1881.7326-.4375,1.4786-.5873,2.2031-.0432.1175-.2681.1766-.2912.294-.2868,1.4467-.2306,2.9379-.2912,4.4062-.005.0987-.1412.1953-.1456.294-.0432.7192.0894,1.3786.1456,2.0563 .0504.2897 0,.5751 0,.8812 .0937,1.2413.1924,2.5944.4418,3.8187 .1549.7816.3668,1.5801.5873,2.35 .0504.0987-.0432.1996 0,.294 .2018.6731.4857,1.2495.7346,1.9093 .0432.0944.1124.1989.1456.294 .1031.2674.183.6205.2912.8813 .1268.3048.2912.5909.4418.8812 .0432.0995.0987.1946.1456.294l.1456.294c.3286.5902.6774,1.1632 1.0279,1.7625v.147c0,.0504-.0504.098 0,.1463l-7.7841,7.7844c-1.3132-.7882-2.718-1.4918-4.1125-2.0563-.1038-.0432-.1924-.1074-.2912-.147-1.3969-.5477-2.8106-.8504-4.2596-1.175-1.1759-.2638-2.3302-.4713-3.525-.5873-2.0708-.2018-4.1017-.2407-6.1683,0-3.1077.3618-6.2209,1.2818-9.1067,2.6437-2.9347,1.3852-5.6381,3.3071-8.0779,5.7282-.0505.0288-.1175-.0288-.1456,0-8.5371,8.5376-10.6718,20.8992-6.4625,31.4312 .5744,1.4362 1.246,2.9086 2.0567,4.2594l-7.7846,7.7843c-1.3507-.8107-2.8233-1.4859-4.2596-2.0563-2.8153-1.1183-5.6884-1.7099-8.6654-1.9093-.2493-.0216-.4843-.1369-.7347-.147-1.5336-.0721-3.0268-.0216-4.5529.147-2.1808.2551-4.37.8697-6.4625,1.6156-.9297.3279-1.8913.6018-2.7904,1.0282-.0576.0288-.0894.1196-.1456.1463-1.3978.6745-2.8135,1.436-4.1125,2.35-.0577.036-.0937.1074-.1456.147-1.293.9237-2.5074,1.9204-3.6716,3.0844-1.2145,1.2143-2.2744,2.4607-3.2313,3.8188-.0432.0576-.1081.0915-.1456.147-.9076,1.3077-1.6789,2.7045-2.35,4.1126-.0504.0576-.1175.0879-.1456.1463-3.517,7.3273-3.7483,15.6864-.7341,23.2062 .5737,1.4323 1.2455,2.9088 2.0558,4.2594l-7.7841,7.7843c-.7063-.423-1.3235-.8173-2.0563-1.175-.0504-.0216-.1038.0216-.1456,0-.6284-.302-1.2638-.4793-1.9091-.7344-1.3569-.5001-2.7091-1.0107-4.1125-1.3218-.1975-.0432-.3899-.1059-.5874-.147-.1175-.0216-.1737.0216-.2912,0-.6644-.1348-1.3856-.3517-2.0563-.4403-.2537-.0288-.4814.0216-.7341,0-.6385-.0721-1.4156-.1211-2.0567-.1463-1.5289-.0822-3.0315-.0216-4.5529.1463-.7802.085-1.5773.1362-2.35.294-.0649,0-.0894.1369-.1456.147-.0987.0432-.1924-.0216-.2912,0-.627.1355-1.2906.2616-1.9096.4403-.08.0505-.2119.1225-.2912.147-.7929.2342-1.4288.4302-2.2033.7344s-1.6018.658-2.35,1.0282c-.6695.3286-1.2643.7859-1.9091,1.175l-5.5813-5.5813 133.6356-133.6548zm15.5688,45.6782c.0721.0764.2068.0937.2912.1463 .6291.3639 1.261.7099 1.9091,1.0281l.2962.147c.6176.294 1.2676.4929 1.9091.7344 .0505.0144.1031-.0144.1456,0 .0504.0288.0649.1168.1456.1463 .3949.1434.7741.3149 1.175.4403 .24.0649.4929.0749.7346.147 .0504.0144.0987-.0144.1456,0 .0504.036.08.1276.1456.1463 .6508.1881 1.3969.3048 2.0567.4403 .0505.007.0987-.007.1456,0 .0504.036.08.1326.1456.147 .0432.007.1031-.007.1456,0 .6349.1189 1.2694.2155 1.9096.294 .472.0649.9945.1045 1.4683.147 .343.036.6854.1304 1.0284.147h.1456 .1456c.7599.036 1.6013.0432 2.35,0 .2443-.005.49.0144.7346,0 .5268-.036 1.0659-.2104 1.6154-.294 .7435-.1124 1.4998-.1499 2.2029-.294 .7835-.1557 1.434-.3675 2.2034-.5873 .0937-.0288.3481.0288.4418,0 .6724-.2004 1.2488-.4857 1.9092-.7344 .0937-.036.2018-.111.2911-.147 .5888-.2205 1.1839-.4605 1.7625-.7344 .1038-.0432.1975-.0951.2912-.147 .7483-.3668 1.4815-.7402 2.2034-1.175 .0505-.0216.1081.0216.1456,0l7.6375,7.6375c-6.7567,11.256-5.2969,26.1348 4.4063,35.8375 .0504.0288.1175-.0288.1456,0 2.4049,2.3868 5.0422,4.3616 7.9308,5.7281 .0504.0216.1081-.0216.1456,0 1.4212.6637 2.9154,1.1961 4.4062,1.6157 1.2596.3704 2.5286.6846 3.8187.8812 .2912.0432.5888.1146.8812.147 .0504.005.0987-.005.1456,0 6.3032.7333 12.7319-.5873 18.3596-3.9656l7.6375,7.6375c-4.2558,7.0898-5.208,15.5876-2.9375,23.3531 .4324,1.4812.9447,2.9958 1.6155,4.4063 .0504.0577.1225.0901.1456.147 .6796,1.4042 1.4335,2.8103 2.35,4.1125 .0504.0576.1081.0915.1456.147 .9259,1.2961 1.9214,2.5092 3.0842,3.6719l.1456.1463c1.1688,1.1524 2.3749,2.1686 3.6721,3.0844 .0576.036.0894.1074.1456.1463 1.3028.9063 2.711,1.6805 4.1125,2.35 .956.4605 1.9463.8263 2.9375,1.175 .5319.1874 1.075.4324 1.6155.5873 .3293.0937.6976.0649 1.0279.147 2.7551.6846 5.5478,1.0139 8.3721.8812h.1456c4.7001-.2421 9.3347-1.6049 13.5125-4.1125l7.7841,7.6375c-.4324.7207-.8089,1.4567-1.175,2.2031-.0505.0994-.0987.1939-.1456.294-1.042,2.1911-1.7413,4.5625-2.2034,6.9031-.2494,1.25-.343,2.5447-.4418,3.8187 0,.1989-.1362.3884-.1456.5873-.005.0987.004.1996 0,.294-.0504,1.0264-.0649,2.0593 0,3.0844 .0505.4807.2205.9683.2912,1.4687 .1175.7917.1412,1.6007.2912,2.35 .1362.6854.3949,1.2582.5873,1.9093 .0432.0922-.0504.1982 0,.294v.1463c0,.1095-.0504.2306 0,.294 .2018.6724.4857,1.2491.7341,1.9094 .0504.0937.1124.1996.1456.294 .08.209.2119.3805.2912.5873 .1031.2457.183.4908.2912.7344 .4324,1.0347.877,2.0976 1.4687,3.0844l-7.6375,7.7844c-1.4495-.873-3.0075-1.6037-4.5533-2.2031-1.4542-.57-2.8957-.9935-4.4058-1.3219-.0432-.007-.0987.007-.1456,0-9.3117-1.9774-19.3137.7156-26.5846,7.9313-.0505.0288-.1175-.0288-.1456,0-9.7023,9.7012-11.1626,24.4351-4.4063,35.6906l-7.6375,7.7844c-1.4495-.873-3.0071-1.6037-4.5529-2.2031-1.4584-.57-2.8896-.9934-4.4067-1.3219-.0504-.007-.0987.007-.1456,0-4.5994-.9725-9.4056-.8087-13.9533.4403-4.7338,1.3007-9.2129,3.7791-12.925,7.4907-8.538,8.5388-10.5524,20.8998-6.3154,31.4312 .5664,1.4428 1.2526,2.9039 2.0563,4.2594l-7.6375,7.7844c-.6839-.4101-1.3466-.6789-2.0563-1.0282-.7736-.3784-1.5529-.7277-2.35-1.0281-1.4965-.5823-2.9981-.996-4.5529-1.3218-.1031-.0216-.1924-.1225-.2962-.147-.3387-.0721-.6861-.0843-1.0279-.1463-.4418-.1095-.8766-.2393-1.3221-.294-.183-.0216-.3856-.007-.5874,0-.1924-.0216-.3949.0216-.5873,0-.1506-.0144-.2912-.1369-.4418-.147-.2443-.0432-.4893,0-.7346,0h-.2912c-.7156-.0432-1.3419-.0144-2.0567,0-.0577,0-.0894.1045-.1456.147-.0504.0288-.1081,0-.1456,0-.3005.0216-.5895.0144-.8817,0-.3899-.0144-.7788-.036-1.175,0-.0987,0-.1975.1319-.2912.147-.753.098-1.4599.1398-2.2034.294-.0987.0505-.343.1326-.4418.147-.6263.1362-1.1435.1153-1.7625.294-.08.0432-.2119.1232-.2912.147-.3618.1074-.6731.3193-1.0283.4403-1.9214.6565-3.7831,1.4183-5.5813,2.4968l-7.7846-7.6375v-.1463c.8253-1.3698 1.6224-2.8024 2.2034-4.2594v-.1463c.5722-1.4543.9927-2.8964 1.3216-4.4062v-.147c.9832-4.6493.845-9.5177-.4418-14.1001-1.2986-4.6294-3.7013-8.9886-7.3437-12.6312-.0504-.0288-.1175.0288-.1456,0-1.1872-1.187-2.351-2.2904-3.6722-3.2313-.0504-.0216-.1124.0216-.1456,0-1.3193-.9322-2.6912-1.8093-4.1125-2.4969-.0504-.0216-.1038.0216-.1456,0-.5138-.2465-1.0909-.3733-1.6159-.5874-.9235-.3647-1.8405-.7617-2.7904-1.0281-1.5919-.4692-3.0635-.8373-4.7-1.0282-1.5844-.1744-3.2552-.2292-4.8471-.147-4.7485.222-9.4371,1.5691-13.6592,4.1125l-7.7841-7.6376v-.147c.8248-1.3698 1.6219-2.8023 2.2029-4.2594v-.1463c.5722-1.4544.9926-2.8964 1.3221-4.4062v-.147c.9823-4.6494.8446-9.5176-.4418-14.1-1.2986-4.6295-3.7013-8.9887-7.3437-12.6313-.0504-.0288-.1175.0288-.1456,0-1.1868-1.1871-2.3468-2.2903-3.6717-3.2313-.0432-.0216-.1124.0216-.1456,0-1.3235-.9323-2.6851-1.8092-4.1125-2.4969-.0432-.0216-.1081.0216-.1456,0-1.4265-.6796-2.9079-1.3264-4.4063-1.7625-.0432-.0144-.0987.0144-.1456,0-1.4969-.4281-3.0174-.6954-4.5533-.8813-.0432-.005-.0987.005-.1456,0-6.2957-.7301-12.7558.6248-18.3596,3.9657l-7.7846-7.7844c.0721-.1168.2213-.178.2962-.294 .3149-.5412.4605-1.1795.7341-1.7625 .3762-.8026.8648-1.5597 1.175-2.35 .0504-.1333.0987-.16.1456-.294 .24-.6349.3949-1.261.5874-1.9094 .0504-.1167.1124-.178.1456-.294 .1881-.65.3056-1.3967.4418-2.0562 .0504-.1182.1225-.1766.1456-.294 .1362-.6817.2068-1.3682.2912-2.0563v-.294c.0432-.3913.1124-.7946.1456-1.175 .0432-.4259.1319-.7486.1456-1.175 .0505-.7954.0505-1.7013 0-2.4969-.08-1.5844-.4043-3.1415-.7347-4.7-.2306-1.1116-.5477-2.1543-.8808-3.2313-.0505-.1023-.1132-.1917-.1456-.294-.3149-.9718-.5816-1.9933-1.0279-2.9374-.0432-.1023-.0937-.1924-.1456-.294-.3668-.7485-.7402-1.481-1.175-2.2031l7.6375-7.7843c1.3555.8042 2.8163,1.4861 4.2596,2.0562 3.0592,1.22 6.1523,1.9057 9.4,2.0563 1.5434.0721 3.1621.0216 4.7-.1463 .0432-.005.0987.005.1456,0 3.1255-.3618 6.2073-1.2818 9.1063-2.6438 2.9351-1.3845 5.6499-3.2996 8.0779-5.7282 .0504-.0288.1225.0288.1456,0 6.0644-6.0642 8.7838-14.1144 8.3721-22.0312-.003-.0505.002-.098 0-.147 0-.2018-.1319-.3856-.1456-.5874-.2306-2.9769-.7764-5.8498-1.9096-8.6656-.5693-1.4428-1.2516-2.9039-2.0558-4.2594l7.7841-7.7845c1.3555.8041 2.8163,1.4862 4.2591,2.0562 3.0597,1.22 6.1528,1.9057 9.4,2.0563 1.544.0721 3.1627.0216 4.7-.1463 .0505-.005.0987.005.1456,0 3.1255-.3618 6.2072-1.2818 9.1062-2.6438 1.4679-.6926 2.9013-1.5442 4.2591-2.4968 .0504-.0216.1124.0216.1456,0 1.325-.9371 2.4849-2.0443 3.6722-3.2313 .0504-.0288.1175.0288.1456,0 8.5385-8.5385 10.6723-20.8996 6.4625-31.4313-.5664-1.4428-1.2521-2.9039-2.0563-4.2594l7.6374-7.7843zm14.9812,50.2313c-2.1399.004-4.332.0915-6.4625.294-2.1822.209-4.4518.4641-6.6091.8812-2.1075.4101-4.2483,1.0063-6.3159,1.6157-10.5515,3.1198-20.4581,8.8812-28.7875,17.1844-.0432.0288-.1225-.0288-.1456,0-26.7059,26.7058-26.7059,70.0848 0,96.7906 .0504.0288.1225-.0288.1456,0 1.645,1.6399 3.2303,3.2623 4.9937,4.7001 .0432.0216.1175-.0216.1456,0 1.7625,1.432 3.5697,2.882 5.4342,4.1125 .0504.0216.1131-.0216.1456,0 1.8635,1.2244 3.7793,2.3546 5.7284,3.3781 .0432.0216.1081-.0216.1456,0 1.9486,1.0181 3.8568,1.9729 5.875,2.7906 .0504.0216.1081-.0216.1456,0 2.0187.813 4.0956,1.5901 6.1688,2.2031 .0504.0144.1038-.0144.1456,0 2.0718.6075 4.0584,1.2075 6.1693,1.6157 .0432.007.0987-.007.1456,0 2.1112.4036 4.3282.6774 6.4625.8812 2.2292.2176 4.5181.294 6.7562.294 17.4239-.0735 34.8961-6.6966 48.1751-19.975 .0432-.0288.1225.0288.1456,0 18.4061-18.4066 24.0038-44.6733 17.0375-68.0031-3.141-10.5184-8.7392-20.4886-17.0375-28.7875-.0504-.0288-.1225.0288-.1456,0-1.6431-1.6431-3.2322-3.2591-4.9938-4.7-.0505-.0216-.1175.0216-.1456,0-1.7611-1.4356-3.5715-2.8785-5.4346-4.1125-.0432-.0216-.1124.0216-.1456,0-1.8612-1.2283-3.7802-2.3507-5.7279-3.3781-.0432-.0216-.1081.0216-.1456,0-1.9467-1.0223-3.8573-1.9687-5.875-2.7906-.0432-.0216-.1031.0216-.1456,0-8.2395-3.3381-17.0892-4.9938-25.8499-4.9937zm0,10.2812c3.7149-7e-05 7.5031.3193 11.1625,1.0281 .0505.007.0987-.007.1456,0 3.6125.7084 7.1248,1.8324 10.5751,3.2313 .0504.0216.1031-.0216.1456,0 3.4507,1.4083 6.8065,3.1874 9.9874,5.2875 .0504.0216.1132-.0216.1456,0 1.5755,1.0448 3.0635,2.3101 4.553,3.525 .0504.0216.1175-.0216.1456,0 1.4898,1.2201 2.8684,2.5749 4.2591,3.9656 7.0838,7.0841 12.0202,15.5722 14.6875,24.5281 1.6003,5.3736 2.35,10.8835 2.35,16.45s-.7497,11.1974-2.35,16.5969c-2.6673,8.9992-7.6041,17.4447-14.6875,24.5281-11.2603,11.2606-26.0705,16.9637-40.8313,17.0375-1.9054,0-3.83-.1074-5.7279-.294-1.8029-.1722-3.6514-.3942-5.4346-.7344-.0504-.007-.0987.007-.1456,0-1.7836-.3452-3.5362-.9551-5.2875-1.4687-.0432-.0144-.1031.0144-.1456,0-1.7503-.5182-3.4357-1.0761-5.1409-1.7625-.0504-.0216-.1031.0216-.1456,0-1.7061-.6918-3.3469-1.4895-4.9938-2.35-.0432-.0216-.1081.0216-.1456,0-1.6482-.8661-3.2707-1.9018-4.8466-2.9374-.0504-.0216-.1124.0216-.1456,0-1.5778-1.0414-3.062-2.3136-4.5533-3.525-.0504-.0216-.1175.0216-.1456,0-1.4923-1.217-2.867-2.5781-4.2596-3.9657-22.6676-22.6679-22.6686-59.4346 0-82.1031 6.1574-6.1343 13.3386-10.5667 21.0029-13.3656 1.12-.4151 2.2395-.8319 3.3783-1.175 1.3639-.4036 2.7279-.8736 4.1125-1.175 2.2607-.4922 4.6079-.8084 6.9033-1.0281 1.7987-.1737 3.6275-.289 5.4341-.294zm0,5.5813c-3.3548,0-6.6825.3877-9.9875,1.0281-4.1699.8273-8.2851,2.1121-12.1909,3.9656-5.3547,2.5029-10.2563,6.0153-14.6875,10.4281-.0504.0216-.1225-.0216-.1456,0-20.4958,20.4958-20.4948,53.6771 0,74.1719 .0504.0216.1225-.0216.1456,0 1.2577,1.2522 2.4727,2.5734 3.8192,3.6719 .0504.0216.1175-.0216.1456,0 1.3446,1.0919 2.6912,2.1454 4.1125,3.0844 .0504.0216.1124-.0216.1456,0 1.4208.9333 2.7744,1.8628 4.2596,2.6438 .0504.0216.1081-.0216.1456,0 1.4838.7755 3.016,1.4325 4.5529,2.0562 .0504.0216.1038-.0216.1456,0 1.537.619 3.1218,1.295 4.7,1.7625 .0432.0144.1031-.0144.1456,0 1.5764.462 3.0945.8639 4.7,1.175 .0432.007.0987-.007.1456,0 1.606.3063 3.2242.5787 4.8471.7344 1.7188.1694 3.5617.294 5.2875.294 13.3236-.0721 26.6909-5.247 36.8654-15.4219 .0505-.0216.1225.0216.1456,0 5.1235-5.1237 8.8943-11.0181 11.4563-17.3312 4.5068-11.1055 5.0365-23.4082 1.6158-34.8094-.4836-1.6173-.9724-3.1265-1.6158-4.7001-2.562-6.3132-6.3324-12.2074-11.4563-17.3312-.0432-.0216-.1225.0216-.1456,0-1.2553-1.2554-2.4736-2.5703-3.8182-3.6719-.0504-.0216-.1175.0216-.1456,0-1.3428-1.0954-2.6927-2.1419-4.1126-3.0844-.0432-.0216-.1124.0216-.1456,0-1.4542-.9607-2.8835-1.8432-4.4058-2.6438-3.0531-1.6071-6.1485-2.8521-9.3999-3.8187-4.9054-1.4668-10.0514-2.2031-15.1284-2.2031zm-174.3409,31.8718h.1456l5.4346,5.5813c-.4324.7192-.8094,1.3094-1.175,2.0562-.0504.0995-.0987.3423-.1456.4403-.3005.6306-.6291,1.2631-.8812,1.9094-.0504.0886.0505.2047 0,.294-.2537.6731-.3805,1.3711-.5873,2.0563-.2112.7434-.5751,1.4462-.7341,2.2031 0,.1175-.1225.1766-.1456.294-.5088,2.5526-.6147,5.1951-.4418,7.7843 .0505.5455.075,1.2168.1456,1.7625 .0894.6918.16,1.371.2912,2.0563 0,.0577.1362.0858.1456.147v.294c.1506.6709.3899,1.2569.5873,1.9093v.147c.2025.6846.3337,1.3842.5873,2.0563 .0505.08.1175.214.1456.294 .2775.7113.6868,1.371 1.0284,2.0562 .0505.1016.0987.1939.1456.294 .3481.6825.6291,1.39 1.0283,2.0563l-5.5817,5.4343-20.4154-20.5625 20.4154-20.5625zm348.8284,0 20.5625,20.5625-20.5625,20.7094-5.4342-5.5812c.48-.7971.7863-1.6761 1.175-2.4969 .6558-1.3863 1.1966-2.8031 1.6154-4.2594 .2443-.8424.5636-1.6304.7346-2.4969 .1362-.6637.3524-1.3865.4418-2.0563v-.294c.0504-.374 0-.6529 0-1.0281 .0504-.4259.1319-.8962.1456-1.3218 .0505-.6803.0505-1.3768 0-2.0563v-.4403c0-.3113-.1225-.5708-.1456-.8812-.1031-1.2648-.1737-2.5728-.4418-3.8187-.3243-1.5492-.745-3.0631-1.3221-4.5532-.24-.6068-.596-1.1706-.8812-1.7625v-.147c-.4043-.854-.8305-1.6773-1.3217-2.4969l5.4342-5.5812zm-333.1125,45.825c.721.4346 1.4547.8087 2.2034,1.175l.2912.147c.3387.1607.6796.2991 1.0284.4403 .7178.3041 1.4678.4915 2.2034.7344 .1456.0432.2912.1045.4418.147 .884.276 1.739.5441 2.6437.7344 .1175.0432.1881.1196.2912.1463 .0504.0288.1268-.036.1456,0 .0505.0649.0894.1348.1456.147 1.0608.2112 2.1489.2695 3.2313.294 .3949.007.7835-.0216 1.175,0 .0987.005.1975.142.2912.147 .6681.0216 1.2831-.0966 1.9091-.147h.2962 .7341c.3337-.0216.6817-.1182 1.0284-.147 .9372-.0778 1.8969-.1117 2.7904-.294 .7816-.1557 1.5801-.3675 2.35-.5873 .0987-.0288.2018.0288.2912,0 .6731-.2003 1.2497-.4857 1.9091-.7344 .0577-.0216.0894-.1146.1456-.147 .0504-.0216.1081.0144.1456,0 .4987-.1903.98-.3805 1.4683-.5874l.2962-.147c.1031-.0505.3387-.2465.4418-.294 .6854-.3358 1.2681-.64 1.9096-1.0281 .0987-.0505.1975.0577.2912,0l7.6375,7.6375c-6.7557,11.2565-5.296,26.1353 4.4067,35.8375 .0504.0288.1175-.0288.1456,0 1.1891,1.18 2.3486,2.3012 3.6717,3.2313 .0432.0216.1175-.0216.1456,0 1.3216.9204 2.6893,1.8236 4.1125,2.4968 .0432.0216.1081-.0216.1456,0 1.4213.6637 2.915,1.1961 4.4058,1.6157 1.0199.2998 2.044.5484 3.0846.7344 .5023.0822.9635.2378 1.4687.294 .0937.0144.1975-.007.2912,0 6.3027.7333 12.7309-.5873 18.3596-3.9656l7.6375,7.6375c-6.7567,11.256-5.2964,25.988 4.4058,35.6907 .08.0778.2162.0721.2962.147 1.1445,1.1203 2.2579,2.1862 3.525,3.0844 .0843.0649.2068.0858.2912.147 1.2713.8799 2.602,1.692 3.9659,2.35l.2912.147c1.3686.6414 2.8275,1.1965 4.2596,1.6157 1.0157.3005 2.0473.5484 3.0842.7344 .5023.0886.9635.2321 1.4687.294 1.6596.2112 3.3239.2248 4.9938.147 4.7005-.2169 9.3347-1.6045 13.5125-4.1125l7.7841,7.6375c-.4324.721-.8089,1.4563-1.175,2.2031-.0432.0987-.0987.1953-.1456.294-1.0425,2.1921-1.7408,4.5635-2.2034,6.9031-.5081,2.5535-.7618,5.1965-.5873,7.7843 .0504.547.2306,1.0709.2962,1.6157 .0894.6926.16,1.37.2912,2.0562 0,.0577.1362.0858.1456.1463v.294c.1506.6738.3899,1.3853.5873,2.0563v.1463c.2018.6861.3337,1.3832.5873,2.0562 .0504.0793.1175.214.1456.294 .5909,1.5242 1.2004,2.9779 2.0558,4.4063l-5.4342,5.4343-133.6562-133.6563 5.5812-5.4344zm287.4342,0c.7215.4346 1.4565.8087 2.2034,1.175l.2912.147c.4374.2076.8728.4064 1.3221.5873 .1412.0577.3005.0923.4418.147 .1319.0504.3056.1002.4418.147 .3949.1434.7741.3149 1.175.4403 .24.0649.4929.0757.7346.147 .1038.0288.1924.1182.2912.147 .65.1888 1.3964.3005 2.0563.4403 .1506.036.2912.1175.4418.147 .6342.116 1.2694.214 1.9096.294 1.9421.2774 3.9343.4252 5.875.294 .547-.0432 1.0706-.2234 1.6154-.294 .6933-.0879 1.3701-.1564 2.0567-.294 .0577-.007.0843-.1362.1456-.147 1.1116-.2306 2.2645-.5117 3.3783-.8812 .3899-.1009.7939-.1506 1.175-.294 .08-.036.2162-.1168.2912-.147 1.5242-.5909 2.9779-1.2006 4.4067-2.0563l5.4341,5.4344-133.6563,133.8031-5.5812-5.5812c1.6981-2.8172 2.8679-5.8322 3.525-8.9594 .0505-.1175.1175-.1838.1456-.294 .1362-.6637.2018-1.3865.2962-2.0563v-.294c.0432-.374.1319-.7997.1456-1.175 .0432-.4259 0-.7492 0-1.175 .0432-.6803 0-1.5236 0-2.2031v-.294-1.0281c-.1038-1.2648-.32-2.4259-.5874-3.6719-.2119-1.0021-.5751-1.9619-.8813-2.9375-.1694-.5326-.2349-1.0894-.4418-1.6157-.2537-.6479-.4324-1.2772-.7346-1.9093-.0504-.1023-.2493-.3409-.2912-.4403-.3668-.7488-.7412-1.3348-1.175-2.0563l7.6375-7.7844c1.4072.8479 2.9074,1.6133 4.4062,2.2031 .0504.0144.1081-.0144.1456,0 1.4561.565 2.8948.9999 4.4058,1.3219 1.6103.3488 3.2078.5117 4.8471.5873 3.117.1297 6.2317-.1585 9.2529-1.0282 4.7344-1.3007 9.2139-3.7789 12.925-7.4906 8.539-8.5384 10.5529-20.8998 6.3159-31.4312-.5664-1.4428-1.2521-2.9039-2.0562-4.2594l7.7883-7.7832c1.3551.8042 2.82,1.4861 4.2591,2.0562 2.8158,1.1256 5.6889,1.6942 8.6659,1.9094 .2493.0216.4843.1355.7341.1463 1.5811.075 3.1278.036 4.7-.1463 3.1072-.3618 6.2209-1.2818 9.1062-2.6438 2.9215-1.3847 5.6499-3.2994 8.0779-5.7282 .0505-.0288.1225.0288.1456,0 9.7027-9.7027 11.3106-24.4349 4.5529-35.6906l7.6376-7.7844zm-317.25,36.8656v126.4594h.1456 126.3125l-126.3125-126.3125-.1456-.147zm377.175,0-.1456.147-126.3126,126.3126h126.3126 .1456v-126.4594zm-203.7154,106.7781c.3243.1946.7019.2616 1.0279.4403 .3856.2299.7388.5203 1.175.7344 .0987.0504.343.098.4418.147 .6306.3005 1.2633.6291 1.9091.8813 1.488.5794 3.0071.9972 4.5534,1.3218 .0504.007.0987-.007.1456,0 .0505.036.075.1333.1456.147 .3949.0785.7783.0872 1.175.147 .2493.0576.4958.1153.7347.147 .6443.0786 1.2601.1124 1.9091.1463 .2443.036.5009-.007.7341,0 .8216.0216 1.6793.036 2.4971,0 .24-.007.4944.0144.7346,0 .5448-.0432 1.2164-.0764 1.7625-.1463 .6911-.0879 1.3705-.1564 2.0558-.294 .0576-.007.0843-.1348.1456-.147 .791-.1658 1.5759-.3639 2.35-.5873 .6846-.2025 1.3841-.3337 2.0562-.5873 .0504-.0216.0843-.1124.1456-.147 .6479-.2537 1.2775-.5794 1.9096-.8812 .846-.4086 1.6774-.8344 2.4971-1.3219l5.5808,5.5813-20.5625,20.5625-20.5625-20.5625 5.4346-5.5813z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract026Icon);
    