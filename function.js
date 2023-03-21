export function handle(state, action) {

  const unique_ID = action.input.unique_ID;
  const wallet_contract = action.input.wallet_contract

  if (state.user_ids.includes(unique_ID)) {
    return { state };
  } else {
    state.wallet_contracts[unique_ID] = wallet_contract
    state.user_ids.push(unique_ID);
    return { state }
  }

}

