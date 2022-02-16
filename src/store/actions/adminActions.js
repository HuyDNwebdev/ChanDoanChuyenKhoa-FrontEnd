import actionTypes from "./actionTypes"
import { getAllCodeService } from "../../services"

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START })

      let res = await getAllCodeService("GENDER")
      if (res && res.errCode === 0) {
        // console.log("check get state: ", getState)
        dispatch(fetchGenderSuccess(res.data))
      } else {
        dispatch(fetchGenderFailed())
      }
    } catch (error) {
      dispatch(fetchGenderFailed(error))
      console.log("fetchGenderStart error", error)
    }
  }
}

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
})

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
})

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_POSITION_START })

      let res = await getAllCodeService("Position")
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data))
      } else {
        dispatch(fetchPositionFailed())
      }
    } catch (error) {
      dispatch(fetchPositionFailed())
      console.log("fetchPositionStart error", error)
    }
  }
}

export const fetchPositionSuccess = (PositionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: PositionData,
})

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_ROLE_START })

      let res = await getAllCodeService("ROLE")
      // console.log(res.data)
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data))
      } else {
        dispatch(fetchRoleFailed())
      }
    } catch (error) {
      dispatch(fetchRoleFailed())
      console.log("fetchRoleStart error", error)
    }
  }
}

export const fetchRoleSuccess = (RoleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: RoleData,
})

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
})
