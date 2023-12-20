
const SectionTitle = ({one, two}) => {
    return (
        <>
          <h1 className='text-2xl md:text-3xl font-medium text-center text-primary mb-14'>{one} <span className='text-neutral'>{two}</span></h1>  
        </>
    );
};

export default SectionTitle;