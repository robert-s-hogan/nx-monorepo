import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract074Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-074'];
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
      <path
        fill="currentColor"
        d="m454.5115,44.3754c-31.2711-31.2753-81.5262-31.2753-112.7972,0l-52.2439,52.2439c-8.9591-7.8224-20.6162-12.6715-33.4445-12.6715-12.8664,0-24.683,4.8075-33.6521,12.6715l-52.1401-52.1401c-31.271-31.2753-81.5261-31.2753-112.7971,0l-12.8792,12.8792c-31.271,31.2753-31.271,81.5219 0,112.7971l52.1401,52.3478c-7.8762,8.9721-12.6714,20.5669-12.6714,33.4444s4.7952,24.6801 12.6714,33.6522l-52.1401,52.1401c-31.271,31.2753-31.4786,81.5218-.2076,112.7971l12.9832,13.1908c31.271,31.2753 81.7338,31.0677 113.0048-.2078l52.1401-52.1401c8.9722,7.8763 20.6706,12.5677 33.5483,12.5677s24.5762-4.6914 33.5483-12.5677l52.1401,52.1401c31.271,31.2753 81.6299,31.3789 112.901.1039l12.9831-12.9831c31.2709-31.2753 31.1672-81.6257-.1038-112.901l-52.1401-52.1401c7.8762-8.9721 12.6716-20.7745 12.6715-33.6522s-4.7953-24.4722-12.6715-33.4444l52.1401-52.3478c15.6355-15.6376 23.4734-35.9094 23.4734-56.2947s-7.8379-40.8648-23.4734-56.5024l-12.9831-12.983zm-18.488,18.6956 12.9831,12.9831c10.6345,10.6359 15.7875,24.2586 15.7875,37.8068s-5.2569,27.067-15.8914,37.7029l-56.0869,56.087c-4.9682-1.6158-10.1763-2.5966-15.6836-2.5966-14.6833-5e-05-27.8969,6.2661-37.1836,16.2029-3.2976-7.9426-7.6142-15.3938-12.8792-22.0194l53.1788-53.1787c5.2851,2.7617 11.3773,4.2584 17.7608,4.2584 21.1132,0 38.1184-17.0052 38.1184-38.1184s-17.1091-38.2222-38.2223-38.2222-38.1183,17.0052-38.1183,38.1184c0,7.4443 2.142,14.4883 5.8164,20.3575l-52.6594,52.6594c-6.6099-5.3513-13.9338-9.8628-21.9155-13.1908 9.8302-9.2818 15.9952-22.415 15.9952-36.9758 0-5.5555-.9536-10.8856-2.5966-15.8913l56.087-55.8792c21.2657-21.2688 54.2438-21.3726 75.5096-.1039zm-133.6739,146.5532c11.8536,11.8537 19.215,28.3305 19.215,46.4275 0,36.1941-29.2407,65.4348-65.4348,65.4348s-65.7464-29.3446-65.7464-65.5387 29.4484-65.4348 65.6425-65.4348c18.097,0 34.4701,7.2575 46.3237,19.1111zm-150.7078-146.5532 55.8792,55.8793c-1.6704,5.0432-2.4927,10.3915-2.4928,15.9952 0,14.5609 6.103,27.798 15.8913,37.0797-7.9417,3.3114-15.2271,7.7716-21.8116,13.0869l-52.6594-52.6594c3.6745-5.8692 5.7126-12.8093 5.7126-20.2536 0-21.1132-17.0052-38.1183-38.1184-38.1183s-38.1184,17.0052-38.1184,38.1183 17.0052,38.1184 38.1184,38.1184c6.3869,0 12.4735-1.4939 17.7608-4.2584l53.1788,53.1787c-5.2704,6.6295-9.683,13.9669-12.9832,21.9155-9.2445-9.9368-22.2925-16.2029-36.9758-16.2029-5.4892,0-10.9373.9911-15.8913,2.5966l-55.9831-55.9831c-21.2688-21.2718-21.165-54.2378.1038-75.5097l12.8792-12.8792c21.2658-21.2688 54.2439-21.3726 75.5097-.1039zm241.3817,241.3817 55.9831,55.9831c10.6545,10.6559 15.6621,24.0135 15.6836,37.7029 .022,13.7057-4.9581,27.1837-15.5797,37.8068l-13.087,13.0869c-21.2366,21.2394-54.2147,21.1941-75.5096-.1039l-56.1909-56.1908c1.6157-4.9682 2.7005-10.2802 2.7005-15.7875 0-14.5609-6.1649-27.6942-15.9952-36.9758 7.8984-3.2933 15.2552-7.604 21.8116-12.8792l52.6594,52.6594c-3.599,5.8273-5.7125,12.6848-5.7125,20.0459 0,21.1132 17.0052,38.3261 38.1183,38.3261s38.3261-17.2129 38.3261-38.3261-17.109-38.2223-38.2222-38.2222c-6.4833,0-12.6239,1.6231-17.9685,4.4662l-53.1788-53.1788c5.3103-6.6582 9.7684-14.0241 13.0869-22.0193 9.2865,9.9365 22.3949,16.099 37.0797,16.099 5.5555,0 10.9894-.8498 15.9952-2.4928zm-104.7995-80.7029c-8.2051-8.2419-19.6307-13.2947-32.1981-13.2947-25.1348-4e-05-45.4928,20.358-45.4927,45.4927s20.4618,45.5967 45.5966,45.5967 45.3889-20.4619 45.3889-45.5967c0-12.5674-5.0896-23.9562-13.2947-32.198zm-116.1208,67.0966c3.3185,7.9952 7.7766,15.3611 13.0869,22.0193l-53.2826,53.2826c-5.344-2.8422-11.3823-4.57-17.8647-4.57-21.1132,5e-05-38.2222,17.1091-38.2222,38.2222s17.0052,38.3261 38.1184,38.3261 38.326-17.2128 38.326-38.3261c0-7.3611-2.2173-14.1148-5.8164-19.942l52.7634-52.7633c6.5564,5.2752 13.9131,9.5859 21.8116,12.8792-9.7883,9.2818-15.8914,22.5188-15.8913,37.0797-8e-05,5.5555.8497,10.7817 2.4928,15.7874l-55.9831,55.9831c-21.2152,21.2182-54.2963,21.3702-75.5097.3116l-.1038-.1038-12.7754-12.9832a26.4113,26.4113 0 0,0 -.2076-.2078c-21.2397-21.2426-21.0904-54.1048.2076-75.4058l55.983-55.9831c4.9683,1.6158 10.2802,2.4928 15.7875,2.4928 14.6849,0 27.8353-6.1624 37.0797-16.099z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract074Icon })
);
