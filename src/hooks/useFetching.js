function useFetching(callback){

    const fetching = async (...args) => {
        try{
            await callback(...args)
        }catch (e){
            throw e
        }
    }

    return [fetching]
}

export default useFetching