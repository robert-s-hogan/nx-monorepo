import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract052Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-052'];
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
        d="m491,21.0004c-34.677,26.7899-79.6063,47.6307-130.7189,59.7781v82.8375c66.0304-27.286 115.2549-79.6133 130.7189-142.6157zm-470,.1467c15.5112,63.0009 64.7254,115.369 130.7187,142.6157v-82.9844c-51.0862-12.1177-96.0126-32.8572-130.7187-59.6313zm221.6344,7.6375c-65.5691,1.2074-116.6187,11.2925-116.6187,23.5 0,13.0214 58.1698,23.6469 129.9842,23.6469 71.8152,0 129.9845-10.6255 129.9845-23.6469s-58.1693-23.5-129.9845-23.5c-4.4883,0-8.9939-.0804-13.3655,0zm-74.7591,55.5188v85.4813c27.2513,9.1956 56.8938,14.2469 87.9776,14.2469 31.1343,0 60.9569-5.169 88.2723-14.3938v-85.3344c-27.9899,5.5161-57.5863,8.5188-88.2723,8.5188-30.6082,0-60.0719-3.0323-87.9776-8.5188zm88.1246,30.2563c11.8377,0 21.4442,9.6062 21.4442,21.4438s-9.6065,21.2969-21.4442,21.2969-21.4434-9.4593-21.4434-21.2969 9.6057-21.4438 21.4434-21.4438zm235.0001,8.8125c-34.677,26.7899-79.6063,47.6307-130.7189,59.7781v82.8375c66.0304-27.286 115.2549-79.6133 130.7189-142.6157zm-470,.1466c15.5112,63.0009 64.7254,115.369 130.7187,142.6157v-82.9844c-51.0862-12.1178-96.0126-32.8572-130.7187-59.6313zm146.8753,63.1563v85.4813c27.2513,9.1956 56.8938,14.2469 87.9776,14.2469 31.1343,0 60.9569-5.169 88.2723-14.3938v-85.3344c-27.9899,5.5161-57.5863,8.5188-88.2723,8.5188-30.6082,0-60.0719-3.0324-87.9776-8.5188zm88.1246,28.7875c11.8377,0 21.4442,9.6062 21.4442,21.4438s-9.6065,21.4438-21.4442,21.4438-21.4434-9.6062-21.4434-21.4438 9.6057-21.4438 21.4434-21.4438zm235.0001,10.1344c-34.6756,26.7884-79.6099,47.6304-130.7189,59.7781v82.8375c66.0131-27.29 115.257-79.6243 130.7189-142.6157zm-470,.1467c15.5112,63.0009 64.7254,115.369 130.7187,142.6157v-82.9844c-51.0862-12.1177-96.0126-32.8572-130.7187-59.6313zm146.8753,63.1563v85.4813c27.2585,9.2015 56.8837,14.2469 87.9776,14.2469 31.1343,0 60.9569-5.169 88.2723-14.3938v-85.3344c-27.9899,5.5161-57.5863,8.5188-88.2723,8.5188-30.6082,0-60.0719-3.0323-87.9776-8.5188zm88.1246,27.6125c11.8377,0 21.4442,9.6062 21.4442,21.4438s-9.6065,21.2969-21.4442,21.2969-21.4434-9.4593-21.4434-21.2969 9.6057-21.4438 21.4434-21.4438zm235.0001,11.4563c-34.6756,26.7884-79.6099,47.6304-130.7189,59.7781v82.8375c66.0131-27.29 115.257-79.6243 130.7189-142.6157zm-470,.1467c15.5112,63.0009 64.7254,115.369 130.7187,142.6157v-82.9844c-51.0862-12.1177-96.0126-32.8572-130.7187-59.6313zm146.8753,63.1563v85.4813c27.2585,9.2015 56.8837,14.2469 87.9776,14.2469 31.1343,0 60.9569-5.169 88.2723-14.3938v-85.3344c-27.9899,5.5161-57.5863,8.5188-88.2723,8.5188-30.6082,0-60.0719-3.0324-87.9776-8.5188zm88.1246,26.1438c11.8377,0 21.4442,9.6062 21.4442,21.4438s-9.6065,21.4438-21.4442,21.4438-21.4434-9.6062-21.4434-21.4438 9.6057-21.4438 21.4434-21.4438z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract052Icon })
);
