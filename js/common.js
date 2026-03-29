import { auth, db, doc, getDoc } from './firebase-config.js';

export async function updateBalanceDisplay() {
    const user = auth.currentUser;
    if(!user) return;
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    const balSpan = document.getElementById('userBalance');
    if(balSpan && snap.exists()) balSpan.innerText = snap.data().balance;
}
// Không còn hàm checkAuthAndRedirect gây lỗi