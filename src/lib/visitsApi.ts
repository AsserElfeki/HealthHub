import { Status } from "@prisma/client";

const visitsPath: string = "/api/visits"


export async function getVisits() {
  const result = await fetch(`${visitsPath}`, {
    method: "GET",
  });
  return result;
}

//get a specific visit
export async function getVisit(visit_id: String) {
  const result = await fetch(`${visitsPath}?visit_id=${visit_id}`, {
    method: "GET",
  });
  return result;
}

export async function addVisit(patient_id: any, doctor_id: any) {
  const result = await fetch(`${visitsPath}`, {
    method: "POST",
    body: JSON.stringify({
      description: "",
      date: new Date(), //ToDo : date picker in page
      doctor_id: doctor_id,
      patient_id: patient_id,
      receptionist_id: "",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
}

//cancel visit
export async function cancelVisit(visit_id: String) {
  const result = await fetch(`${visitsPath}?visit_id=${visit_id}`, {
    method: "PUT",
     body: JSON.stringify({
      newStatus : Status.CANCELLED
    })
  });
  return result;
}

//change visit date
export async function updateVisit(doctor_id, date = undefined) {
  const path = "/api/visits";
  const result = await fetch(`${path}`, {
    method: "PUT",
    body: JSON.stringify({
      newDoctor_id: doctor_id,
      newDate: date,
    })
  });
  return result;
}

//================================================

export async function addTests(params: type) {}

export async function getTests(params: type) {}

export async function getPatients(params: type) {}

export async function getDoctors(params: type) {}

export async function getReceptionists(params: type) {}

export async function getDiagnosis(params: type) {}

export async function getDescription(params: type) {}

export async function getDate(params: type) {}