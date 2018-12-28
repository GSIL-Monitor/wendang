var aa={
    clone(state){
        return state.state.count-1
    },
    clone1(state,getters){
      return getters.clone
    }
}
    export default aa;