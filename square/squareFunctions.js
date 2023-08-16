import axios from 'axios'

export async function initializeCard(payments) {

    const card = await payments.card();
    await card.attach('#card-container');

    return card;
  }


export async function createPayment(locationId, token, verificationToken,) {
    const body = JSON.stringify({
      locationId,
      sourceId: token,
      verificationToken,
      idempotencyKey: window.crypto.randomUUID(),
    });

    const headers = {
        'Content-Type': 'application/json',
      Authorization: 'Bearer your_token_here',
    }

    const paymentResponse = await axios.post('api/payment', body, { headers });

    if (paymentResponse.data.ok) {
      return paymentResponse.data.json();
    }

    const errorBody = await paymentResponse.data.text();
    console.error(errorBody);
  }

export async function tokenize(paymentMethod) {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(
          tokenResult.errors
        )}`;
      }

      throw new Error(errorMessage);
    }
  }

  