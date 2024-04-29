import MachineLearning from '../../../libs/images/jhogancom/jhogan_maching_learning_project.jpg';
import PythonForMarketing from '../../../libs/images/jhogancom/jhogan_python_for_marketing.jpg';
import MastersThesis from '../../../libs/images/jhogancom/jhogan_masters_thesis.jpg';
import PythonProject from '../../../libs/images/jhogancom/jhogan_python_project.jpg';
import SQLProject from '../../../libs/images/jhogancom/jhogan_sql_project.jpg';

export const projectStaticData = [
  {
    name: 'Machine Learning Project',
    slug: 'machine-learning-project',
    tags: 'machine-learning',
    description:
      'For this project, I used Udemy class data from Kaggle.com to try and predict which classes are successful using Pandas, matplotlib and scikit-learn.',
    link: 'https://github.com/jessicahoganma/machine_learning_udemy_class_data',
    image: MachineLearning,
    featured: true,
    order: 1,
  },
  {
    name: 'Python for Marketing',
    slug: 'python-for-marketing',
    tags: 'python',
    description:
      'In this project I used various resources to clean and merge datasets from Google Analytics as well as create visualizations, analyze timeseries and build alerts for for marketing activities. ',
    link: 'https://github.com/jessicahoganma/Python-For-Marketing',
    image: PythonForMarketing,
    featured: true,
    order: 2,
  },
  {
    name: "Master's Thesis",
    slug: 'masters-thesis',
    tags: 'thesis',
    description:
      'My master’s thesis is a quantitative research project that measured California residents’ attitudes towards parenthood using SPSS. ',
    link: 'https://csu-csus.esploro.exlibrisgroup.com/esploro/outputs/graduate/Parental-status-and-life-satisfaction-a/99257831096601671',
    image: MastersThesis,
  },

  {
    name: 'Python Project',
    slug: 'python-project',
    tags: 'python',
    description:
      'For this project I used the MySQL Connector, Python and pandas to implement a database on MySQL Server to create, read, update and delete data. ',
    link: 'https://github.com/jessicahoganma/Python_SQL/blob/main/README.md',
    image: PythonProject,
    featured: true,
    order: 3,
  },
  {
    name: 'SQL Project',
    slug: 'sql-project',
    tags: 'sql',
    description:
      'I developed a relational database from scratch through MYSQL Community Server. I used Lucidchart (for my ERD), GitHub and PopSQL. ',
    link: 'https://github.com/jessicahoganma/SQL_hospital_Project',
    image: SQLProject,
  },
];
