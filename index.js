// {
//   "id": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
//   "object": "subscription",
//   "application": null,
//   "application_fee_percent": null,
//   "automatic_tax": {
//     "enabled": false,
//     "liability": null
//   },
//   "billing_cycle_anchor": 1679609767,
//   "cancel_at": null,
//   "cancel_at_period_end": false,
//   "canceled_at": null,
//   "cancellation_details": {
//     "comment": null,
//     "feedback": null,
//     "reason": null
//   },
//   "collection_method": "charge_automatically",
//   "created": 1679609767,
//   "currency": "usd",
//   "customer": "cus_Na6dX7aXxi11N4",
//   "days_until_due": null,
//   "default_payment_method": null,
//   "default_source": null,
//   "default_tax_rates": [],
//   "description": null,
//   "discounts": null,
//   "ended_at": null,
//   "invoice_settings": {
//     "issuer": {
//       "type": "self"
//     }
//   },
//   "items": {
//     "object": "list",
//     "data": [
//       {
//         "id": "si_Na6dzxczY5fwHx",
//         "object": "subscription_item",
//         "created": 1679609768,
//         "current_period_end": 1682288167,
//         "current_period_start": 1679609767,
//         "metadata": {},
//         "plan": {
//           "id": "price_1MowQULkdIwHu7ixraBm864M",
//           "object": "plan",
//           "active": true,
//           "amount": 1000,
//           "amount_decimal": "1000",
//           "billing_scheme": "per_unit",
//           "created": 1679609766,
//           "currency": "usd",
//           "discounts": null,
//           "interval": "month",
//           "interval_count": 1,
//           "livemode": false,
//           "metadata": {},
//           "nickname": null,
//           "product": "prod_Na6dGcTsmU0I4R",
//           "tiers_mode": null,
//           "transform_usage": null,
//           "trial_period_days": null,
//           "usage_type": "licensed"
//         },
//         "price": {
//           "id": "price_1MowQULkdIwHu7ixraBm864M",
//           "object": "price",
//           "active": true,
//           "billing_scheme": "per_unit",
//           "created": 1679609766,
//           "currency": "usd",
//           "custom_unit_amount": null,
//           "livemode": false,
//           "lookup_key": null,
//           "metadata": {},
//           "nickname": null,
//           "product": "prod_Na6dGcTsmU0I4R",
//           "recurring": {
//             "interval": "month",
//             "interval_count": 1,
//             "trial_period_days": null,
//             "usage_type": "licensed"
//           },
//           "tax_behavior": "unspecified",
//           "tiers_mode": null,
//           "transform_quantity": null,
//           "type": "recurring",
//           "unit_amount": 1000,
//           "unit_amount_decimal": "1000"
//         },
//         "quantity": 1,
//         "subscription": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
//         "tax_rates": []
//       }
//     ],
//     "has_more": false,
//     "total_count": 1,
//     "url": "/v1/subscription_items?subscription=sub_1MowQVLkdIwHu7ixeRlqHVzs"
//   },
//   "latest_invoice": "in_1MowQWLkdIwHu7ixuzkSPfKd",
//   "livemode": false,
//   "metadata": {},
//   "next_pending_invoice_item_invoice": null,
//   "on_behalf_of": null,
//   "pause_collection": null,
//   "payment_settings": {
//     "payment_method_options": null,
//     "payment_method_types": null,
//     "save_default_payment_method": "off"
//   },
//   "pending_invoice_item_interval": null,
//   "pending_setup_intent": null,
//   "pending_update": null,
//   "schedule": null,
//   "start_date": 1679609767,
//   "status": "active",
//   "test_clock": null,
//   "transfer_data": null,
//   "trial_end": null,
//   "trial_settings": {
//     "end_behavior": {
//       "missing_payment_method": "create_invoice"
//     }
//   },
//   "trial_start": null
// }

//  parent: {
//     quote_details: null,
//     subscription_details: {
//       metadata: [Object],
//       subscription: 'sub_1RmjFrGf2Ac6ZswajblLD7gl'
//     },
//     type: 'subscription_details'
//   },


// Application is running on: http://[::1]:6565
// {
//   id: 'ddc535f5-5cab-45d3-9259-997a6bab72a4',
//   userId: 'a082d8b8-17fb-4d44-bb9a-5fbfeaa2a40f',
//   name: 'Elite Realty Group',
//   registrationId: 'REG-BD-998877',
//   location: 'Banani, Dhaka',
//   website: null,
//   address: null,
//   createdAt: 2025-07-14T18:56:18.783Z,
//   updatedAt: 2025-07-14T18:56:18.783Z,
//   user: {
//     id: 'a082d8b8-17fb-4d44-bb9a-5fbfeaa2a40f',
//     email: 'firm2@gmail.com',
//     role: 'BROKER_FIRM'
//   }
// } checking subscription=============>
// {
//   userId: 'a082d8b8-17fb-4d44-bb9a-5fbfeaa2a40f',
//   userType: 'BROKER_FIRM',
//   subscriptionPlanId: '417388b6-08be-44ed-ad1c-93c71add2aa1',
//   ownerId: 'ddc535f5-5cab-45d3-9259-997a6bab72a4'
// } metadata from createSubscription
// customer.created checking event type
// ℹ️ Unhandled event type: customer.created
// charge.succeeded checking event type
// ℹ️ Unhandled event type: charge.succeeded
// payment_method.attached checking event type
// ℹ️ Unhandled event type: payment_method.attached
// customer.updated checking event type
// ℹ️ Unhandled event type: customer.updated
// checkout.session.completed checking event type
// {
//   ownerId: 'ddc535f5-5cab-45d3-9259-997a6bab72a4',
//   userType: 'BROKER_FIRM',
//   subscriptionPlanId: '417388b6-08be-44ed-ad1c-93c71add2aa1',
//   userId: 'a082d8b8-17fb-4d44-bb9a-5fbfeaa2a40f'
// } checking metadata
// Checkout session completed: {
//   id: 'cs_test_b1o66VHyJHQWKyvNxdn8wqGfL9wOb98zYuL21vigD7IoaMhFeK1XLKOIwF',
//   object: 'checkout.session',
//   // adaptive_pricing: null,
//   after_expiration: null,
//   allow_promotion_codes: true,
//   amount_subtotal: 999,
//   amount_total: 999,
//   automatic_tax: { enabled: false, liability: null, provider: null, status: null },
//   billing_address_collection: null,
//   cancel_url: 'http://localhost:3000/cancel',
//   client_reference_id: 'price_1RmcNMGf2Ac6ZswaFiaSZC8u',
//   client_secret: null,
//   collected_information: { shipping_details: null },
//   consent: null,
//   consent_collection: null,
//   created: 1752960502,
//   currency: 'usd',
//   currency_conversion: null,
//   custom_fields: [],
//   custom_text: {
//     after_submit: null,
//     shipping_address: null,
//     submit: null,
//     terms_of_service_acceptance: null
//   },
//   customer: 'cus_Si8aq83Je2vfhO',
//   customer_creation: null,
//   customer_details: {
//     address: {
//       city: null,
//       country: 'BD',
//       line1: null,
//       line2: null,
//       postal_code: null,
//       state: null
//     },
//     email: 'firm2@gmail.com',
//     name: 'asfasdfase',
//     phone: null,
//     tax_exempt: 'none',
//     tax_ids: []
//   },
//   customer_email: null,
//   discounts: [],
//   expires_at: 1753046902,
//   invoice: 'in_1RmiIzGf2Ac6ZswahesmSJlD',
//   invoice_creation: null,
//   livemode: false,
//   locale: null,
//   metadata: {
//     ownerId: 'ddc535f5-5cab-45d3-9259-997a6bab72a4',
//     userType: 'BROKER_FIRM',
//     subscriptionPlanId: '417388b6-08be-44ed-ad1c-93c71add2aa1',
//     userId: 'a082d8b8-17fb-4d44-bb9a-5fbfeaa2a40f'
//   },
//   mode: 'subscription',
//   origin_context: null,
//   payment_intent: null,
//   payment_link: null,
//   payment_method_collection: 'always',
//   payment_method_configuration_details: null,
//   payment_method_options: { card: { request_three_d_secure: 'automatic' } },
//   payment_method_types: [ 'card' ],
//   payment_status: 'paid',
//   permissions: null,
//   phone_number_collection: { enabled: false },
//   recovered_from: null,
//   saved_payment_method_options: {
//     allow_redisplay_filters: [ 'always' ],
//     payment_method_remove: 'disabled',
//     payment_method_save: null
//   },
//   setup_intent: null,
//   shipping_address_collection: null,
//   shipping_cost: null,
//   shipping_options: [],
//   status: 'complete',
//   submit_type: null,
//   subscription: 'sub_1RmiJ0Gf2Ac6ZswaggpLPvo4',
//   success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
//   total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
//   ui_mode: 'hosted',
//   url: null,
//   wallet_options: null
// }
// customer.subscription.created checking event type
// ℹ️ Unhandled event type: customer.subscription.created
// payment_intent.succeeded checking event type
// ℹ️ Unhandled event type: payment_intent.succeeded
// invoice.finalized checking event type
// ℹ️ Unhandled event type: invoice.finalized
// invoice.paid checking event type
// ℹ️ Unhandled event type: invoice.paid
// invoice.payment_succeeded checking event type
// Payment succeeded for invoice: in_1RmiIzGf2Ac6ZswahesmSJlD
// cus_Si8aq83Je2vfhO checking stripe customer id
// Subscription found: {
//   id: 'fddd0f52-8bee-4f91-bae2-8e6c40fda1ce',
//   subscriptionPlanId: '417388b6-08be-44ed-ad1c-93c71add2aa1',
//   ownerId: null,
//   subscriptionStatus: 'ACTIVE',
//   stripeSubscriptionId: 'sub_1RmiJ0Gf2Ac6ZswaggpLPvo4',
//   stripeCustomerId: 'cus_Si8aq83Je2vfhO',
//   expiresAt: 2025-07-20T21:28:22.000Z,
//   createdAt: 2025-07-19T21:28:29.983Z,
//   cancelRequest: false
// }
// {
//   id: 'in_1RmiIzGf2Ac6ZswahesmSJlD',
//   object: 'invoice',
//   account_country: 'US',
//   account_name: 'New business sandbox',
//   account_tax_ids: null,
//   amount_due: 999,
//   amount_overpaid: 0,
//   amount_paid: 999,
//   amount_remaining: 0,
//   amount_shipping: 0,
//   application: null,
//   attempt_count: 0,
//   attempted: true,
//   auto_advance: false,
//   automatic_tax: {
//     disabled_reason: null,
//     enabled: false,
//     liability: null,
//     provider: null,
//     status: null
//   },
//   automatically_finalizes_at: null,
//   billing_reason: 'subscription_create',
//   collection_method: 'charge_automatically',
//   created: 1752960508,
//   currency: 'usd',
//   custom_fields: null,
//   customer: 'cus_Si8aq83Je2vfhO',
//   customer_address: null,
//   customer_email: 'firm2@gmail.com',
//   customer_name: null,
//   customer_phone: null,
//   customer_shipping: null,
//   customer_tax_exempt: 'none',
//   customer_tax_ids: [],
//   default_payment_method: null,
//   default_source: null,
//   default_tax_rates: [],
//   description: null,
//   discounts: [],
//   due_date: null,
//   effective_at: 1752960508,
//   ending_balance: 0,
//   footer: null,
//   from_invoice: null,
//   hosted_invoice_url: 'https://invoice.stripe.com/i/acct_1RaKc8Gf2Ac6Zswa/test_YWNjdF8xUmFLYzhHZjJBYzZac3dhLF9TaThhcXlpSkFTeEk3bUJNZE1QNXB4UjBoRVVTN3VuLDE0MzUwMTMxMg0200rO6CnvpV?s=ap',
//   invoice_pdf: 'https://pay.stripe.com/invoice/acct_1RaKc8Gf2Ac6Zswa/test_YWNjdF8xUmFLYzhHZjJBYzZac3dhLF9TaThhcXlpSkFTeEk3bUJNZE1QNXB4UjBoRVVTN3VuLDE0MzUwMTMxMg0200rO6CnvpV/pdf?s=ap',
//   issuer: { type: 'self' },
//   last_finalization_error: null,
//   latest_revision: null,
//   lines: {
//     object: 'list',
//     data: [ [Object] ],
//     has_more: false,
//     total_count: 1,
//     url: '/v1/invoices/in_1RmiIzGf2Ac6ZswahesmSJlD/lines'
//   },
//   livemode: false,
//   metadata: {},
//   next_payment_attempt: null,
//   number: '8IL2VS5M-0001',
//   on_behalf_of: null,
//   parent: {
//     quote_details: null,
//     subscription_details: {
//       metadata: [Object],
//       subscription: 'sub_1RmiJ0Gf2Ac6ZswaggpLPvo4'
//     },
//     type: 'subscription_details'
//   },
//   payment_settings: {
//     default_mandate: null,
//     payment_method_options: {
//       acss_debit: null,
//       bancontact: null,
//       card: [Object],
//       customer_balance: null,
//       konbini: null,
//       sepa_debit: null,
//       us_bank_account: null
//     },
//     payment_method_types: [ 'card' ]
//   },
//   period_end: 1752960508,
//   period_start: 1752960508,
//   post_payment_credit_notes_amount: 0,
//   pre_payment_credit_notes_amount: 0,
//   receipt_number: null,
//   rendering: null,
//   shipping_cost: null,
//   shipping_details: null,
//   starting_balance: 0,
//   statement_descriptor: null,
//   status: 'paid',
//   status_transitions: {
//     finalized_at: 1752960508,
//     marked_uncollectible_at: null,
//     paid_at: 1752960509,
//     voided_at: null
//   },
//   subtotal: 999,
//   subtotal_excluding_tax: 999,
//   test_clock: null,
//   total: 999,
//   total_discount_amounts: [],
//   total_excluding_tax: 999,
//   total_pretax_credit_amounts: [],
//   total_taxes: [],
//   webhooks_delivered_at: null
// } checking invoice data
// Subscription found: {
//   id: 'fddd0f52-8bee-4f91-bae2-8e6c40fda1ce',
//   subscriptionPlanId: '417388b6-08be-44ed-ad1c-93c71add2aa1',
//   ownerId: null,
//   subscriptionStatus: 'ACTIVE',
//   stripeSubscriptionId: 'sub_1RmiJ0Gf2Ac6ZswaggpLPvo4',
//   stripeCustomerId: 'cus_Si8aq83Je2vfhO',
//   expiresAt: 2025-07-20T21:28:22.000Z,
//   createdAt: 2025-07-19T21:28:29.983Z,
//   cancelRequest: false
// }
// invoice.created checking event type
// ℹ️ Unhandled event type: invoice.created
// payment_intent.created checking event type
// ℹ️ Unhandled event type: payment_intent.created



// // [
// //   {
// //     customerId: "29b22e8a-ff76-4cc1-8c26-3bd333cc5edb",
// //     brokerFirmId: "f05349ea-bd13-4e4f-9db6-7da048bf2df8",
// //     amount: 120.5,
// //     currency: "USD",
// //     paymentDate: new Date("2025-07-01T10:00:00Z"),
// //     paymentStatus: "COMPLETED",
// //     subscriptionId: "f1deaa45-44d8-406f-81bf-00cd969ce9b7",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: "ef6ae977-ef0d-43a7-9b11-dda5c9920cc8",
// //     brokerFirmId: "5e08145c-c19e-4366-8fc8-d1eb81fa44a2",
// //     amount: 210,
// //     currency: "EUR",
// //     paymentDate: new Date("2025-07-03T12:30:00Z"),
// //     paymentStatus: "PENDING",
// //     subscriptionId: "f99d561e-2254-40e7-bb5e-bacfdf248801",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: "29b22e8a-ff76-4cc1-8c26-3bd333cc5edb",
// //     brokerFirmId: "5e08145c-c19e-4366-8fc8-d1eb81fa44a2",
// //     amount: 320.75,
// //     currency: "USD",
// //     paymentDate: new Date("2025-07-04T14:00:00Z"),
// //     paymentStatus: "COMPLETED",
// //     subscriptionId: "f1deaa45-44d8-406f-81bf-00cd969ce9b7",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: "ef6ae977-ef0d-43a7-9b11-dda5c9920cc8",
// //     brokerFirmId: "f05349ea-bd13-4e4f-9db6-7da048bf2df8",
// //     amount: 145.99,
// //     currency: "GBP",
// //     paymentDate: new Date("2025-07-05T09:45:00Z"),
// //     paymentStatus: "FAILED",
// //     subscriptionId: "f99d561e-2254-40e7-bb5e-bacfdf248801",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {

// //     customerId: "29b22e8a-ff76-4cc1-8c26-3bd333cc5edb",
// //     brokerFirmId: null,
// //     amount: 500,
// //     currency: "USD",
// //     paymentDate: new Date("2025-07-06T16:30:00Z"),
// //     paymentStatus: "COMPLETED",
// //     subscriptionId: null,
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: null,
// //     brokerFirmId: "5e08145c-c19e-4366-8fc8-d1eb81fa44a2",
// //     amount: 275.25,
// //     currency: "EUR",
// //     paymentDate: new Date("2025-07-07T11:00:00Z"),
// //     paymentStatus: "PENDING",
// //     subscriptionId: "f1deaa45-44d8-406f-81bf-00cd969ce9b7",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {

// //     customerId: "ef6ae977-ef0d-43a7-9b11-dda5c9920cc8",
// //     brokerFirmId: null,
// //     amount: 400,
// //     currency: "USD",
// //     paymentDate: new Date("2025-07-08T13:30:00Z"),
// //     paymentStatus: "COMPLETED",
// //     subscriptionId: "f99d561e-2254-40e7-bb5e-bacfdf248801",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: null,
// //     brokerFirmId: "f05349ea-bd13-4e4f-9db6-7da048bf2df8",
// //     amount: 180,
// //     currency: "GBP",
// //     paymentDate: new Date("2025-07-09T15:45:00Z"),
// //     paymentStatus: "FAILED",
// //     subscriptionId: null,
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   },
// //   {
// //     customerId: "29b22e8a-ff76-4cc1-8c26-3bd333cc5edb",
// //     brokerFirmId: "5e08145c-c19e-4366-8fc8-d1eb81fa44a2",
// //     amount: 220,
// //     currency: "USD",
// //     paymentDate: new Date("2025-07-10T18:00:00Z"),
// //     paymentStatus: "COMPLETED",
// //     subscriptionId: "f1deaa45-44d8-406f-81bf-00cd969ce9b7",
// //     subscriptionPlanId: "a6077633-9a46-41cc-8a2d-fc240d8bb463"
// //   }
// // ]



// old data collection here 

{
  "info": {
    "_postman_id": "6719e389-7182-4e5a-97d8-5321d81ae65f",
    "name": "Bajram",
    "description": "The Bajram API description",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "updatedAt": "2025-07-20T00:12:02.000Z",
    "createdAt": "2025-07-13T22:54:47.000Z",
    "lastUpdatedBy": "45851737",
    "uid": "45851737-6719e389-7182-4e5a-97d8-5321d81ae65f"
  },
  "item": [
    {
      "name": "api",
      "item": [
        {
          "name": "v1",
          "item": [
            {
              "name": "auth",
              "item": [
                {
                  "name": "login",
                  "item": [
                    {
                      "name": "User Registration",
                      "id": "bbc9edae-790d-4c1f-b155-c23690d7a416",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n    \"email\": \"safa@gmail.com\",\r\n    \"password\" :\"123456\"\r\n}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/auth/login",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "auth",
                            "login"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "86003d63-4914-422e-86df-fcd31a7aa468",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/auth/login",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "auth",
                                "login"
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-86003d63-4914-422e-86df-fcd31a7aa468"
                        }
                      ],
                      "uid": "45851737-bbc9edae-790d-4c1f-b155-c23690d7a416"
                    }
                  ],
                  "id": "b1f0f1b7-a07d-47a5-8b45-032fcf30aa8e",
                  "uid": "45851737-b1f0f1b7-a07d-47a5-8b45-032fcf30aa8e"
                },
                {
                  "name": "get-me",
                  "item": [
                    {
                      "name": "Auth Controller get Profile",
                      "id": "f111f37f-2d86-4d3e-b83c-44d6d23fc9fd",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "",
                          "options": {
                            "raw": {
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/auth/get-me",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "auth",
                            "get-me"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "c12523c1-0cac-44b6-a457-ad446f04f8bb",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/auth/get-me",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "auth",
                                "get-me"
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-c12523c1-0cac-44b6-a457-ad446f04f8bb"
                        }
                      ],
                      "uid": "45851737-f111f37f-2d86-4d3e-b83c-44d6d23fc9fd"
                    }
                  ],
                  "id": "b4f88b90-8f39-4981-ab7d-d220ce8f33a6",
                  "uid": "45851737-b4f88b90-8f39-4981-ab7d-d220ce8f33a6"
                },
                {
                  "name": "change-password",
                  "item": [
                    {
                      "name": "Auth Controller change Password",
                      "id": "4ffc63b7-a902-40f8-9036-ad586017bb77",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/auth/change-password",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "auth",
                            "change-password"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "694b1efe-6f4f-4ced-a065-cc21b75f7a60",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/auth/change-password",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "auth",
                                "change-password"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-694b1efe-6f4f-4ced-a065-cc21b75f7a60"
                        }
                      ],
                      "uid": "45851737-4ffc63b7-a902-40f8-9036-ad586017bb77"
                    }
                  ],
                  "id": "1263fe37-921b-4253-99c7-e96c7f653aee",
                  "uid": "45851737-1263fe37-921b-4253-99c7-e96c7f653aee"
                },
                {
                  "name": "forgot-password",
                  "item": [
                    {
                      "name": "Auth Controller forgot Passwod",
                      "id": "cf79ee32-9adb-4e6a-8bd4-eee7bc9f2f87",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/auth/forgot-password",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "auth",
                            "forgot-password"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "8fd31b45-1f75-42ad-8880-03069a640b3f",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/auth/forgot-password",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "auth",
                                "forgot-password"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-8fd31b45-1f75-42ad-8880-03069a640b3f"
                        }
                      ],
                      "uid": "45851737-cf79ee32-9adb-4e6a-8bd4-eee7bc9f2f87"
                    }
                  ],
                  "id": "37007e67-41a1-4640-b863-1b1dae9ea0bb",
                  "uid": "45851737-37007e67-41a1-4640-b863-1b1dae9ea0bb"
                },
                {
                  "name": "reset-password",
                  "item": [
                    {
                      "name": "Auth Controller reset Password",
                      "id": "5f699a81-edb6-4e06-8647-4eda7677e7b9",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/auth/reset-password",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "auth",
                            "reset-password"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "8f651ce9-b581-4cfd-b48b-6be63ea30977",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/auth/reset-password",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "auth",
                                "reset-password"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-8f651ce9-b581-4cfd-b48b-6be63ea30977"
                        }
                      ],
                      "uid": "45851737-5f699a81-edb6-4e06-8647-4eda7677e7b9"
                    }
                  ],
                  "id": "9b826405-609f-4de9-9b7e-2c9087e60f30",
                  "uid": "45851737-9b826405-609f-4de9-9b7e-2c9087e60f30"
                }
              ],
              "id": "d9c791f6-ac35-47bf-be71-d5c0b7e0cb49",
              "uid": "45851737-d9c791f6-ac35-47bf-be71-d5c0b7e0cb49"
            },
            {
              "name": "users",
              "item": [
                {
                  "name": "create-admin",
                  "item": [
                    {
                      "name": "Users Controller create Admin",
                      "id": "255c3222-a6ad-4c69-9cd6-b25f696f9004",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/users/create-admin",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "users",
                            "create-admin"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "a7fe6639-e32f-487d-80ae-fff9eaf6f77c",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/users/create-admin",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "users",
                                "create-admin"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-a7fe6639-e32f-487d-80ae-fff9eaf6f77c"
                        }
                      ],
                      "uid": "45851737-255c3222-a6ad-4c69-9cd6-b25f696f9004"
                    }
                  ],
                  "id": "90b88b71-3d1f-49fc-b4a9-d5bc45fad0fb",
                  "uid": "45851737-90b88b71-3d1f-49fc-b4a9-d5bc45fad0fb"
                },
                {
                  "name": "create-broker-firm",
                  "item": [
                    {
                      "name": "Users Controller create Broker Firm",
                      "id": "bb5d9c9d-df9f-47b1-8034-fadb6d5428bd",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/users/create-broker-firm",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "users",
                            "create-broker-firm"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "21f5b2e0-2ca2-4b06-ac95-703792f13255",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/users/create-broker-firm",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "users",
                                "create-broker-firm"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-21f5b2e0-2ca2-4b06-ac95-703792f13255"
                        }
                      ],
                      "uid": "45851737-bb5d9c9d-df9f-47b1-8034-fadb6d5428bd"
                    }
                  ],
                  "id": "ef91de70-7790-4dbb-8465-b6afb2fa29ca",
                  "uid": "45851737-ef91de70-7790-4dbb-8465-b6afb2fa29ca"
                },
                {
                  "name": "create-broker",
                  "item": [
                    {
                      "name": "Users Controller create Broker",
                      "id": "b236c87b-e055-45c8-99dc-219717cb3b2b",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/users/create-broker",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "users",
                            "create-broker"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "c44c8fbf-a27f-40c2-85d8-6910d40145c1",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/users/create-broker",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "users",
                                "create-broker"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-c44c8fbf-a27f-40c2-85d8-6910d40145c1"
                        }
                      ],
                      "uid": "45851737-b236c87b-e055-45c8-99dc-219717cb3b2b"
                    }
                  ],
                  "id": "01f76fd6-7b27-4b79-a9ab-b09f77a7d2ab",
                  "uid": "45851737-01f76fd6-7b27-4b79-a9ab-b09f77a7d2ab"
                },
                {
                  "name": "create-customer",
                  "item": [
                    {
                      "name": "Users Controller create Customer",
                      "id": "66ee7d8d-e75b-4e9c-8c1d-5b03f9f71b28",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n\"username\": \"safa\",\r\n\"email\": \"safa@gmail.com\",\r\n \"description\": \"Enthusiastic property buyer and tech-savvy user.\",\r\n\"bankId\": \"bank_789123\",\r\n\"contactNo\": \"+88017123475678\",\r\n \"password\": \"123456\",\r\n\"customer\": {\r\n    \"fullName\": \"safa\",\r\n    \"location\": \"Dhaka, Bangladesh\",\r\n    \"address\": \"House 21, Road 8, Gulshan 1, Dhaka\"\r\n  }\r\n}\r\n",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/users/create-customer",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "users",
                            "create-customer"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "31af86c9-d550-4971-a462-9fc2b7b46b5d",
                          "name": "response",
                          "originalRequest": {
                            "method": "POST",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/users/create-customer",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "users",
                                "create-customer"
                              ]
                            }
                          },
                          "status": "Created",
                          "code": 201,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-31af86c9-d550-4971-a462-9fc2b7b46b5d"
                        }
                      ],
                      "uid": "45851737-66ee7d8d-e75b-4e9c-8c1d-5b03f9f71b28"
                    }
                  ],
                  "id": "91943f07-f7f6-4278-8702-0b2a92b885d5",
                  "uid": "45851737-91943f07-f7f6-4278-8702-0b2a92b885d5"
                },
                {
                  "name": "Users Controller get Users",
                  "id": "2c0a4bd4-6498-41f1-a4fa-ba8b1d6f29c2",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/users",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "users"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "36c5ff18-7c3e-4c73-93b1-aa097c39be26",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/users",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "users"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-36c5ff18-7c3e-4c73-93b1-aa097c39be26"
                    }
                  ],
                  "uid": "45851737-2c0a4bd4-6498-41f1-a4fa-ba8b1d6f29c2"
                }
              ],
              "id": "196b10aa-c591-44d6-9c4d-cdc44fe45855",
              "uid": "45851737-196b10aa-c591-44d6-9c4d-cdc44fe45855"
            },
            {
              "name": "admins",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Admin Controller find One",
                      "id": "9a0239c9-68ad-4abc-b51f-d6272e72273d",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/admins/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "admins",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "b248f9c0-cc97-4f80-b853-427da6b254b5",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "3324c1c8-1534-4b9b-bae8-51ccb302c9b8",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/admins/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "admins",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-3324c1c8-1534-4b9b-bae8-51ccb302c9b8"
                        }
                      ],
                      "uid": "45851737-9a0239c9-68ad-4abc-b51f-d6272e72273d"
                    },
                    {
                      "name": "Admin Controller update",
                      "id": "69d972cc-ab75-4565-8438-80cf6aa57d5d",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/admins/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "admins",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "f31b5dc5-8810-4d23-a38e-e86651c833fb",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "9fdf7560-99e6-477d-bc83-6ba53f20d2a4",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/admins/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "admins",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-9fdf7560-99e6-477d-bc83-6ba53f20d2a4"
                        }
                      ],
                      "uid": "45851737-69d972cc-ab75-4565-8438-80cf6aa57d5d"
                    },
                    {
                      "name": "Admin Controller remove",
                      "id": "ee152dcb-b62a-4167-a065-8844cce57ba1",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/admins/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "admins",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "c8632931-ab58-4d34-9680-4c573bc979ae",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "a6137f23-6a67-4631-82c4-8865f5f64258",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/admins/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "admins",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-a6137f23-6a67-4631-82c4-8865f5f64258"
                        }
                      ],
                      "uid": "45851737-ee152dcb-b62a-4167-a065-8844cce57ba1"
                    }
                  ],
                  "id": "7f94a761-f497-4cc7-bf44-284544d8565d",
                  "uid": "45851737-7f94a761-f497-4cc7-bf44-284544d8565d"
                },
                {
                  "name": "Admin Controller find All",
                  "id": "f8c83102-406e-4a9b-aa88-7221ef75233c",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/admins",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "admins"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "eb7c4ca1-7247-4bab-b3b6-33991de5eacd",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/admins",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "admins"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-eb7c4ca1-7247-4bab-b3b6-33991de5eacd"
                    }
                  ],
                  "uid": "45851737-f8c83102-406e-4a9b-aa88-7221ef75233c"
                }
              ],
              "id": "553e669f-d98c-43b4-855f-bacf884a02b7",
              "uid": "45851737-553e669f-d98c-43b4-855f-bacf884a02b7"
            },
            {
              "name": "broker-firms",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Broker Firm Controller find One",
                      "id": "10a3e281-431b-43b5-8ec0-6c38635f3cf2",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "broker-firms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "7f943867-6b66-4597-b3d0-0d36a0ba8593",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "f695f8ef-0d60-482b-b24d-3891523f6d6b",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "broker-firms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-f695f8ef-0d60-482b-b24d-3891523f6d6b"
                        }
                      ],
                      "uid": "45851737-10a3e281-431b-43b5-8ec0-6c38635f3cf2"
                    },
                    {
                      "name": "Broker Firm Controller update",
                      "id": "e733f2ad-644d-498a-b4b3-4b09e962a2a1",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "broker-firms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "9c240553-bd9d-407c-a037-7925ade95903",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "89763475-777e-43ce-bc4d-9e88a0e9ee95",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "broker-firms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-89763475-777e-43ce-bc4d-9e88a0e9ee95"
                        }
                      ],
                      "uid": "45851737-e733f2ad-644d-498a-b4b3-4b09e962a2a1"
                    },
                    {
                      "name": "Broker Firm Controller remove",
                      "id": "18bcc46f-84fd-4ddc-bc4a-5b7e9c3dd849",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "broker-firms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "97748399-8681-4845-99c4-628fbcf8c4a3",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "48d87cdd-ebfd-4c3f-b852-f1ffce479997",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/broker-firms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "broker-firms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-48d87cdd-ebfd-4c3f-b852-f1ffce479997"
                        }
                      ],
                      "uid": "45851737-18bcc46f-84fd-4ddc-bc4a-5b7e9c3dd849"
                    }
                  ],
                  "id": "a7ac6dbf-43b5-4c6f-bbb1-84d1c24d0d57",
                  "uid": "45851737-a7ac6dbf-43b5-4c6f-bbb1-84d1c24d0d57"
                },
                {
                  "name": "Broker Firm Controller find All",
                  "id": "aff750cf-2bbf-4e81-b42a-580a47b057d4",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/broker-firms",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "broker-firms"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "b0f64235-5ff7-4a5d-bf5f-ba66f168957f",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/broker-firms",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "broker-firms"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-b0f64235-5ff7-4a5d-bf5f-ba66f168957f"
                    }
                  ],
                  "uid": "45851737-aff750cf-2bbf-4e81-b42a-580a47b057d4"
                }
              ],
              "id": "1a706228-bcc4-4097-92d2-3a3765d194c9",
              "uid": "45851737-1a706228-bcc4-4097-92d2-3a3765d194c9"
            },
            {
              "name": "customers",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Customer Controller find One",
                      "id": "0abf6e79-346c-4dcf-a342-3f5481f9d374",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/customers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "customers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "f121f49e-b09b-4167-8c0e-ff1ec41dd90b",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "10e23014-9374-47f3-a2a9-310d4e670c37",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/customers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "customers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-10e23014-9374-47f3-a2a9-310d4e670c37"
                        }
                      ],
                      "uid": "45851737-0abf6e79-346c-4dcf-a342-3f5481f9d374"
                    },
                    {
                      "name": "Customer Controller update",
                      "id": "3abee1ce-9a93-4d95-9431-d818a6a1453a",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/customers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "customers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "f047775c-9a73-460f-8fe8-b0741d5fdddc",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "5bfdf1a5-3285-4ec0-beb8-f6fe4e5c3b62",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/customers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "customers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-5bfdf1a5-3285-4ec0-beb8-f6fe4e5c3b62"
                        }
                      ],
                      "uid": "45851737-3abee1ce-9a93-4d95-9431-d818a6a1453a"
                    },
                    {
                      "name": "Customer Controller remove",
                      "id": "13252a7e-5482-42c7-b198-d98118de38fa",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/customers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "customers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "14d52676-3c3a-466c-ac95-8f035271199d",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "e68065a7-ced6-426f-b937-7b0ac9aa37a0",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/customers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "customers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-e68065a7-ced6-426f-b937-7b0ac9aa37a0"
                        }
                      ],
                      "uid": "45851737-13252a7e-5482-42c7-b198-d98118de38fa"
                    }
                  ],
                  "id": "6ff2fd40-8f5c-4181-95ae-7b74f99feedc",
                  "uid": "45851737-6ff2fd40-8f5c-4181-95ae-7b74f99feedc"
                },
                {
                  "name": "Customer Controller find All",
                  "id": "37c08ab3-556e-4b70-93ce-622aba8b14b0",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/customers",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "customers"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "ebed012b-4dfd-412c-84df-0a640a8edb10",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/customers",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "customers"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-ebed012b-4dfd-412c-84df-0a640a8edb10"
                    }
                  ],
                  "uid": "45851737-37c08ab3-556e-4b70-93ce-622aba8b14b0"
                }
              ],
              "id": "eb9cdc2a-4a18-4e91-b59a-eba884bfd01f",
              "uid": "45851737-eb9cdc2a-4a18-4e91-b59a-eba884bfd01f"
            },
            {
              "name": "rooms",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Room Controller find One",
                      "id": "d0c6c225-c539-4688-8f13-92bfe132868b",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/rooms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "rooms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "d5a1f079-cacb-4261-b3df-c93a8359be1b",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "793c8a12-d238-48fc-bba9-0d49d44710a0",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/rooms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "rooms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-793c8a12-d238-48fc-bba9-0d49d44710a0"
                        }
                      ],
                      "uid": "45851737-d0c6c225-c539-4688-8f13-92bfe132868b"
                    },
                    {
                      "name": "Room Controller update",
                      "id": "30fcb320-8272-440d-9fe5-e0b5445ba839",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/rooms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "rooms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "21b77518-86bc-4371-a4c7-c4c22fb3b4c0",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "033ebca9-87ec-40fa-84d0-49cf8e3a7c9a",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/rooms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "rooms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-033ebca9-87ec-40fa-84d0-49cf8e3a7c9a"
                        }
                      ],
                      "uid": "45851737-30fcb320-8272-440d-9fe5-e0b5445ba839"
                    },
                    {
                      "name": "Room Controller remove",
                      "id": "72dfb864-4458-46dd-9077-0026dacf0864",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/rooms/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "rooms",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "82417e13-bfa2-4285-bf03-70940d746c4c",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "1c7fd354-aef5-4513-8abc-0e6ff5e20c46",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/rooms/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "rooms",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-1c7fd354-aef5-4513-8abc-0e6ff5e20c46"
                        }
                      ],
                      "uid": "45851737-72dfb864-4458-46dd-9077-0026dacf0864"
                    }
                  ],
                  "id": "6506f940-cd36-4011-af72-8818c14dd83b",
                  "uid": "45851737-6506f940-cd36-4011-af72-8818c14dd83b"
                },
                {
                  "name": "Room Controller create",
                  "id": "c7f5b7cb-3496-407c-9d7e-33249bf423c1",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/rooms",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "rooms"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "8423089d-b04d-469b-be63-b8e7f987ed0d",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/rooms",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "rooms"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-8423089d-b04d-469b-be63-b8e7f987ed0d"
                    }
                  ],
                  "uid": "45851737-c7f5b7cb-3496-407c-9d7e-33249bf423c1"
                },
                {
                  "name": "Room Controller find All",
                  "id": "fd6b54fc-8c65-4e0d-b2cc-1724bd039adb",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/rooms",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "rooms"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "cfc706a6-9200-46c6-9cd5-a13a0c7a78fa",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/rooms",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "rooms"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-cfc706a6-9200-46c6-9cd5-a13a0c7a78fa"
                    }
                  ],
                  "uid": "45851737-fd6b54fc-8c65-4e0d-b2cc-1724bd039adb"
                }
              ],
              "id": "8f867731-1037-415d-aaf2-066e20dd4fd4",
              "uid": "45851737-8f867731-1037-415d-aaf2-066e20dd4fd4"
            },
            {
              "name": "templates",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Template Controller find One",
                      "id": "8e13e278-15f8-4c31-bd68-55f39a74b578",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "b5f31f73-dddc-420f-a46d-ef597113d1cf",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "9e64c091-8a04-4d8e-836a-498d25da724a",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-9e64c091-8a04-4d8e-836a-498d25da724a"
                        }
                      ],
                      "uid": "45851737-8e13e278-15f8-4c31-bd68-55f39a74b578"
                    },
                    {
                      "name": "Template Controller update",
                      "id": "f74acdf6-9b69-4201-9796-087cb02eae62",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "cccf153f-f922-480d-b335-ae6fdd9dfcde",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "9992f5e8-f08a-4c20-842c-47435f14501f",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-9992f5e8-f08a-4c20-842c-47435f14501f"
                        }
                      ],
                      "uid": "45851737-f74acdf6-9b69-4201-9796-087cb02eae62"
                    },
                    {
                      "name": "Template Controller remove",
                      "id": "c0eb2b53-2da9-4d5f-94c1-31276469f7eb",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "eb7c01d8-0c3b-49b2-a21b-872917c3e037",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "84d0ab55-f785-49df-ac7a-07689ff2193f",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-84d0ab55-f785-49df-ac7a-07689ff2193f"
                        }
                      ],
                      "uid": "45851737-c0eb2b53-2da9-4d5f-94c1-31276469f7eb"
                    }
                  ],
                  "id": "2c3e4a44-0df6-4215-9421-32362c32531b",
                  "uid": "45851737-2c3e4a44-0df6-4215-9421-32362c32531b"
                },
                {
                  "name": "Template Controller create",
                  "id": "87737852-d0b7-4659-b825-f7dac0ae5f55",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/templates",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "templates"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "c49dd174-f653-480b-8f7d-b3827a24e760",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/templates",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "templates"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-c49dd174-f653-480b-8f7d-b3827a24e760"
                    }
                  ],
                  "uid": "45851737-87737852-d0b7-4659-b825-f7dac0ae5f55"
                },
                {
                  "name": "Template Controller find All",
                  "id": "d82e089a-c3e6-4ce4-8783-2f1facba0211",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/templates",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "templates"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "4351b197-70f6-4d9b-b63f-178cff648a76",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/templates",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "templates"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-4351b197-70f6-4d9b-b63f-178cff648a76"
                    }
                  ],
                  "uid": "45851737-d82e089a-c3e6-4ce4-8783-2f1facba0211"
                }
              ],
              "id": "4e443649-5a91-482d-a195-dce9aa55e921",
              "uid": "45851737-4e443649-5a91-482d-a195-dce9aa55e921"
            },
            {
              "name": "properties",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Property Controller find One",
                      "id": "6b1a8e05-7c29-4938-b204-39f5b17e7a38",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/properties/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "properties",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "a627cc51-f3b6-4e36-93ce-9ec7681ef030",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "73fc75dc-7ac3-45eb-9765-9df1489c0d06",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/properties/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "properties",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-73fc75dc-7ac3-45eb-9765-9df1489c0d06"
                        }
                      ],
                      "uid": "45851737-6b1a8e05-7c29-4938-b204-39f5b17e7a38"
                    },
                    {
                      "name": "Property Controller update",
                      "id": "716f18ba-d9d5-4374-96e7-473cf0d3a68c",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/properties/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "properties",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "bf449d3b-703b-4e99-b266-e0c4a57fedb8",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "56c40ba2-e7c0-46ae-925b-fa7d05a298a1",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/properties/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "properties",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-56c40ba2-e7c0-46ae-925b-fa7d05a298a1"
                        }
                      ],
                      "uid": "45851737-716f18ba-d9d5-4374-96e7-473cf0d3a68c"
                    },
                    {
                      "name": "Property Controller remove",
                      "id": "42381f15-9288-406b-8047-d6b216056e86",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/properties/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "properties",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "5fceb5af-1d95-449f-b7b8-858cef4c498a",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "ce848ca5-952e-416d-b184-18b40bb1690d",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/properties/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "properties",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-ce848ca5-952e-416d-b184-18b40bb1690d"
                        }
                      ],
                      "uid": "45851737-42381f15-9288-406b-8047-d6b216056e86"
                    }
                  ],
                  "id": "eb3bbdec-2a06-44eb-9ac9-c446d154cc20",
                  "uid": "45851737-eb3bbdec-2a06-44eb-9ac9-c446d154cc20"
                },
                {
                  "name": "file",
                  "item": [
                    {
                      "name": "upload",
                      "item": [
                        {
                          "name": "Property Controller add File",
                          "id": "3eae06d6-11d3-4a23-a82a-1d627c6c3045",
                          "protocolProfileBehavior": {
                            "disableBodyPruning": true
                          },
                          "request": {
                            "method": "DELETE",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/properties/file/upload",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "properties",
                                "file",
                                "upload"
                              ]
                            }
                          },
                          "response": [
                            {
                              "id": "7b9f1ec4-a2e1-455c-8dbe-da4f7036943d",
                              "name": "response",
                              "originalRequest": {
                                "method": "DELETE",
                                "header": [
                                  {
                                    "key": "Content-Type",
                                    "value": "application/json"
                                  }
                                ],
                                "body": {
                                  "mode": "raw",
                                  "raw": "{}",
                                  "options": {
                                    "raw": {
                                      "headerFamily": "json",
                                      "language": "json"
                                    }
                                  }
                                },
                                "url": {
                                  "raw": "{{baseUrl}}/api/v1/properties/file/upload",
                                  "host": [
                                    "{{baseUrl}}"
                                  ],
                                  "path": [
                                    "api",
                                    "v1",
                                    "properties",
                                    "file",
                                    "upload"
                                  ]
                                }
                              },
                              "status": "OK",
                              "code": 200,
                              "_postman_previewlanguage": "text",
                              "header": [],
                              "cookie": [],
                              "responseTime": null,
                              "body": null,
                              "uid": "45851737-7b9f1ec4-a2e1-455c-8dbe-da4f7036943d"
                            }
                          ],
                          "uid": "45851737-3eae06d6-11d3-4a23-a82a-1d627c6c3045"
                        }
                      ],
                      "id": "c666676b-43d2-4899-8423-6c4c457d45c7",
                      "uid": "45851737-c666676b-43d2-4899-8423-6c4c457d45c7"
                    },
                    {
                      "name": "{id}",
                      "item": [
                        {
                          "name": "Property Controller remove File",
                          "id": "d6b3e817-c240-4a1a-8c2b-a17bd9d20153",
                          "protocolProfileBehavior": {
                            "disableBodyPruning": true
                          },
                          "request": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/properties/file/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "properties",
                                "file",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "id": "56a5bc57-9bb4-44d9-81fa-1f2e6153713d",
                                  "key": "id",
                                  "value": "<string>",
                                  "description": "(Required) "
                                }
                              ]
                            }
                          },
                          "response": [
                            {
                              "id": "a00da940-7cc9-4aa5-92fd-fd025d6f96f2",
                              "name": "response",
                              "originalRequest": {
                                "method": "DELETE",
                                "header": [],
                                "url": {
                                  "raw": "{{baseUrl}}/api/v1/properties/file/:id",
                                  "host": [
                                    "{{baseUrl}}"
                                  ],
                                  "path": [
                                    "api",
                                    "v1",
                                    "properties",
                                    "file",
                                    ":id"
                                  ],
                                  "variable": [
                                    {
                                      "key": "id"
                                    }
                                  ]
                                }
                              },
                              "status": "OK",
                              "code": 200,
                              "_postman_previewlanguage": "text",
                              "header": [],
                              "cookie": [],
                              "responseTime": null,
                              "body": null,
                              "uid": "45851737-a00da940-7cc9-4aa5-92fd-fd025d6f96f2"
                            }
                          ],
                          "uid": "45851737-d6b3e817-c240-4a1a-8c2b-a17bd9d20153"
                        }
                      ],
                      "id": "76442b9a-b444-4a55-bd1b-2053406d2378",
                      "uid": "45851737-76442b9a-b444-4a55-bd1b-2053406d2378"
                    }
                  ],
                  "id": "eee30734-5197-4455-a737-90a1e762ff68",
                  "uid": "45851737-eee30734-5197-4455-a737-90a1e762ff68"
                },
                {
                  "name": "Property Controller create",
                  "id": "2a99a484-27cc-4507-ae6b-3a2ff70694a3",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/properties",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "properties"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "e0c0cc8f-c869-4b8c-94c6-c87042dbb715",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/properties",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "properties"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-e0c0cc8f-c869-4b8c-94c6-c87042dbb715"
                    }
                  ],
                  "uid": "45851737-2a99a484-27cc-4507-ae6b-3a2ff70694a3"
                },
                {
                  "name": "Property Controller find All",
                  "id": "571a50ea-68e7-4b0b-88b4-7c372a5d212d",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/properties",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "properties"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "a2eedcd8-0f29-430e-a0e8-551dcd0818d9",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/properties",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "properties"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-a2eedcd8-0f29-430e-a0e8-551dcd0818d9"
                    }
                  ],
                  "uid": "45851737-571a50ea-68e7-4b0b-88b4-7c372a5d212d"
                }
              ],
              "id": "5282c22e-fba4-4d16-80c8-564973093bfd",
              "uid": "45851737-5282c22e-fba4-4d16-80c8-564973093bfd"
            },
            {
              "name": "tasks",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Task Controller find One",
                      "id": "6e422d8e-87e4-4e54-ab39-416b1041175f",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/tasks/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "tasks",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "65b1250d-7561-4344-a47b-256e483b0bf4",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "04825d09-3203-4b21-acc4-03b0305f1072",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/tasks/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "tasks",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-04825d09-3203-4b21-acc4-03b0305f1072"
                        }
                      ],
                      "uid": "45851737-6e422d8e-87e4-4e54-ab39-416b1041175f"
                    },
                    {
                      "name": "Task Controller update",
                      "id": "0361bec6-64f4-4283-b07b-5a82a8381f8b",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/tasks/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "tasks",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "0511a44b-b07f-482c-a201-7f803a5d74bd",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "4ecf327a-93e0-48da-a5f7-89da85144c9b",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/tasks/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "tasks",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-4ecf327a-93e0-48da-a5f7-89da85144c9b"
                        }
                      ],
                      "uid": "45851737-0361bec6-64f4-4283-b07b-5a82a8381f8b"
                    },
                    {
                      "name": "Task Controller remove",
                      "id": "8c5bb2a1-4aad-4fde-9423-b01ca2ac8941",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/tasks/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "tasks",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "0914d04a-5c82-42cb-8092-034b9cb09bf5",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "5fd0c3a5-47b0-46dc-aade-229f124680a5",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/tasks/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "tasks",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-5fd0c3a5-47b0-46dc-aade-229f124680a5"
                        }
                      ],
                      "uid": "45851737-8c5bb2a1-4aad-4fde-9423-b01ca2ac8941"
                    }
                  ],
                  "id": "d56705cf-e4de-4b7a-9fde-388a77782abb",
                  "uid": "45851737-d56705cf-e4de-4b7a-9fde-388a77782abb"
                },
                {
                  "name": "Task Controller create",
                  "id": "fa6a7507-ffc2-4856-b4fb-f5904bad1f4d",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/tasks",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "tasks"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "d49501ab-c242-4cd5-8621-3b35c11d92ae",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/tasks",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "tasks"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-d49501ab-c242-4cd5-8621-3b35c11d92ae"
                    }
                  ],
                  "uid": "45851737-fa6a7507-ffc2-4856-b4fb-f5904bad1f4d"
                },
                {
                  "name": "Task Controller find All",
                  "id": "734e7e87-765d-4cfe-89b8-d88667af8958",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/tasks",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "tasks"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "4ca68957-6a8b-487f-9330-9dc279821a0b",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/tasks",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "tasks"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-4ca68957-6a8b-487f-9330-9dc279821a0b"
                    }
                  ],
                  "uid": "45851737-734e7e87-765d-4cfe-89b8-d88667af8958"
                }
              ],
              "id": "5456ab31-8bc3-493c-987b-bd6b665445d9",
              "uid": "45851737-5456ab31-8bc3-493c-987b-bd6b665445d9"
            },
            {
              "name": "advertises",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Advertise Controller find One",
                      "id": "745c791c-3009-4427-ba85-b9ac38e0ecf9",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/advertises/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "advertises",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "c1e96954-4869-4dd7-b732-0676ff5a81da",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "5fdd6e4a-3c43-4edd-8ab1-e22ff805d425",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/advertises/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "advertises",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-5fdd6e4a-3c43-4edd-8ab1-e22ff805d425"
                        }
                      ],
                      "uid": "45851737-745c791c-3009-4427-ba85-b9ac38e0ecf9"
                    },
                    {
                      "name": "Advertise Controller update",
                      "id": "e8e99d02-2fcc-4259-b1fa-5854d1494939",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/advertises/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "advertises",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "2ae5dba0-f245-428a-af1d-f7a0b497c9a6",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "2fd11628-1c49-403e-be6b-fc6ede96b818",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/advertises/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "advertises",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-2fd11628-1c49-403e-be6b-fc6ede96b818"
                        }
                      ],
                      "uid": "45851737-e8e99d02-2fcc-4259-b1fa-5854d1494939"
                    },
                    {
                      "name": "Advertise Controller remove",
                      "id": "9c4a5285-e564-4919-b2f2-256e82388eee",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/advertises/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "advertises",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "bff90537-652b-4e3c-8859-da9a432ca71d",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "a1c99327-5638-4c9d-9b07-3afe2190a111",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/advertises/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "advertises",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-a1c99327-5638-4c9d-9b07-3afe2190a111"
                        }
                      ],
                      "uid": "45851737-9c4a5285-e564-4919-b2f2-256e82388eee"
                    }
                  ],
                  "id": "1299e3e5-91df-4e61-a07e-a1add3391d57",
                  "uid": "45851737-1299e3e5-91df-4e61-a07e-a1add3391d57"
                },
                {
                  "name": "Advertise Controller create",
                  "id": "1815895c-f153-468f-88ae-816234fc2fd9",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/advertises",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "advertises"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "4d4b6d25-58c9-4cf9-a018-97017683ae19",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/advertises",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "advertises"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-4d4b6d25-58c9-4cf9-a018-97017683ae19"
                    }
                  ],
                  "uid": "45851737-1815895c-f153-468f-88ae-816234fc2fd9"
                },
                {
                  "name": "Advertise Controller find All",
                  "id": "2f4a9850-904b-420f-aa67-de0f5a8f319a",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/advertises",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "advertises"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "ef211b96-6298-4f61-aed6-94f0a5a509c0",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/advertises",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "advertises"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-ef211b96-6298-4f61-aed6-94f0a5a509c0"
                    }
                  ],
                  "uid": "45851737-2f4a9850-904b-420f-aa67-de0f5a8f319a"
                }
              ],
              "id": "7cd7e079-40c0-42f8-8c58-403bf1984da4",
              "uid": "45851737-7cd7e079-40c0-42f8-8c58-403bf1984da4"
            },
            {
              "name": "BrokerBids",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Broker Bid Controller find One",
                      "id": "ccdef3f9-6106-432c-a324-7f56354ad389",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "BrokerBids",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "e88629d2-e0ed-41b2-a163-df302398a75a",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "b1c720b7-8eb1-4fdc-9e3c-cc2aac9025b7",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "BrokerBids",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-b1c720b7-8eb1-4fdc-9e3c-cc2aac9025b7"
                        }
                      ],
                      "uid": "45851737-ccdef3f9-6106-432c-a324-7f56354ad389"
                    },
                    {
                      "name": "Broker Bid Controller update",
                      "id": "c396ecba-0fa8-4845-8dfd-826eeb2d992f",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "BrokerBids",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "cc17daab-5118-44d7-97c2-61eab9a48536",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "63383c03-b91c-4363-8ee2-49446e744acd",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "BrokerBids",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-63383c03-b91c-4363-8ee2-49446e744acd"
                        }
                      ],
                      "uid": "45851737-c396ecba-0fa8-4845-8dfd-826eeb2d992f"
                    },
                    {
                      "name": "Broker Bid Controller remove",
                      "id": "6e8346a9-3050-4c34-a787-26ec4909d6e8",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "BrokerBids",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "7a585ba5-d9ca-47f1-9602-84920e35978a",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "9dc24248-99ac-41a8-bfbf-28c66402d2f8",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/BrokerBids/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "BrokerBids",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-9dc24248-99ac-41a8-bfbf-28c66402d2f8"
                        }
                      ],
                      "uid": "45851737-6e8346a9-3050-4c34-a787-26ec4909d6e8"
                    }
                  ],
                  "id": "60ab2516-2b3a-473c-80f3-55d461b42304",
                  "uid": "45851737-60ab2516-2b3a-473c-80f3-55d461b42304"
                },
                {
                  "name": "Broker Bid Controller create",
                  "id": "03bc07f2-fb73-4f97-a20e-5e1162f176b0",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/BrokerBids",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "BrokerBids"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "1cf3bf8b-7b39-47cf-8298-834762366d34",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/BrokerBids",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "BrokerBids"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-1cf3bf8b-7b39-47cf-8298-834762366d34"
                    }
                  ],
                  "uid": "45851737-03bc07f2-fb73-4f97-a20e-5e1162f176b0"
                },
                {
                  "name": "Broker Bid Controller find All",
                  "id": "a0d5fada-5395-41b2-bbf1-1e69ac0fcfaf",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/BrokerBids",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "BrokerBids"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "e25d8e5c-77e9-434a-98dd-3bd38ce61a05",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/BrokerBids",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "BrokerBids"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-e25d8e5c-77e9-434a-98dd-3bd38ce61a05"
                    }
                  ],
                  "uid": "45851737-a0d5fada-5395-41b2-bbf1-1e69ac0fcfaf"
                }
              ],
              "id": "8d30db76-d1f7-4337-b201-f69e2e43c422",
              "uid": "45851737-8d30db76-d1f7-4337-b201-f69e2e43c422"
            },
            {
              "name": "favourite-templates",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Favourite Template Controller find One",
                      "id": "bf3a0be1-36a0-4885-8e03-c1b4a16e6fc4",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "favourite-templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "eab9410a-6375-4ecb-a56d-56899ea2eafa",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "9af7fcc9-9dce-495e-866f-9349b395930c",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "favourite-templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-9af7fcc9-9dce-495e-866f-9349b395930c"
                        }
                      ],
                      "uid": "45851737-bf3a0be1-36a0-4885-8e03-c1b4a16e6fc4"
                    },
                    {
                      "name": "Favourite Template Controller update",
                      "id": "caa4f678-eee4-48e8-b040-4bdbfd77fe96",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "favourite-templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "243a52e4-ee84-480b-a1e3-89bcbf04057b",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "bd0e5e34-dc9c-4b06-b7e3-40eb447066e3",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "favourite-templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-bd0e5e34-dc9c-4b06-b7e3-40eb447066e3"
                        }
                      ],
                      "uid": "45851737-caa4f678-eee4-48e8-b040-4bdbfd77fe96"
                    },
                    {
                      "name": "Favourite Template Controller remove",
                      "id": "4bc1672c-c033-4e32-985b-81a9f08fbb09",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "favourite-templates",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "76f140e5-d987-47dc-8215-5ebeed2cfd56",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "c07a4d23-4505-44fd-8fc7-fb7eb6c40124",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/favourite-templates/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "favourite-templates",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-c07a4d23-4505-44fd-8fc7-fb7eb6c40124"
                        }
                      ],
                      "uid": "45851737-4bc1672c-c033-4e32-985b-81a9f08fbb09"
                    }
                  ],
                  "id": "00c3b042-a26c-49b0-9ab4-2ed92142afe1",
                  "uid": "45851737-00c3b042-a26c-49b0-9ab4-2ed92142afe1"
                },
                {
                  "name": "Favourite Template Controller create",
                  "id": "a833dc44-3916-41f9-8da7-e9c606881c9b",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/favourite-templates",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "favourite-templates"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "cb314aec-af8e-42ea-834d-4565a376725e",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/favourite-templates",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "favourite-templates"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-cb314aec-af8e-42ea-834d-4565a376725e"
                    }
                  ],
                  "uid": "45851737-a833dc44-3916-41f9-8da7-e9c606881c9b"
                },
                {
                  "name": "Favourite Template Controller find All",
                  "id": "54d8f6bf-a101-427e-a781-ec6b275c1804",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/favourite-templates",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "favourite-templates"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "0aaf5a2e-36e1-4d3b-aa9a-dfbec292fb27",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/favourite-templates",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "favourite-templates"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-0aaf5a2e-36e1-4d3b-aa9a-dfbec292fb27"
                    }
                  ],
                  "uid": "45851737-54d8f6bf-a101-427e-a781-ec6b275c1804"
                }
              ],
              "id": "f8ff1041-3a2c-4200-9fbd-0f70b736025a",
              "uid": "45851737-f8ff1041-3a2c-4200-9fbd-0f70b736025a"
            },
            {
              "name": "property-documents",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Property Document Controller find One",
                      "id": "8f9bdd30-b6db-489c-b953-2656949a10cf",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-documents",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "3fd6618d-bc06-44d5-aff6-68cda89438f6",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "c665a3a0-9182-4a15-a308-798cfd5507e0",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-documents",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-c665a3a0-9182-4a15-a308-798cfd5507e0"
                        }
                      ],
                      "uid": "45851737-8f9bdd30-b6db-489c-b953-2656949a10cf"
                    },
                    {
                      "name": "Property Document Controller update",
                      "id": "f85cb5bb-1dad-43bf-9ce9-17bb5c4cb76f",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-documents",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "d440b3c8-6172-42e7-9d61-fcee7b85f958",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "6ea03219-12f2-43e7-af0e-5552b80de0b7",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-documents",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-6ea03219-12f2-43e7-af0e-5552b80de0b7"
                        }
                      ],
                      "uid": "45851737-f85cb5bb-1dad-43bf-9ce9-17bb5c4cb76f"
                    },
                    {
                      "name": "Property Document Controller remove",
                      "id": "14663f0a-336b-46ad-8e25-2bca23ccc800",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-documents",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "86ec43c2-50f1-4e42-8167-31bbf6c9c485",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "416cecbf-32aa-43bb-a59c-302b405d218a",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-documents/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-documents",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-416cecbf-32aa-43bb-a59c-302b405d218a"
                        }
                      ],
                      "uid": "45851737-14663f0a-336b-46ad-8e25-2bca23ccc800"
                    }
                  ],
                  "id": "590c37da-a093-4711-85ea-e8cd219bab28",
                  "uid": "45851737-590c37da-a093-4711-85ea-e8cd219bab28"
                },
                {
                  "name": "Property Document Controller create",
                  "id": "8c7ea473-a3b0-496a-9692-360de09e39b0",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/property-documents",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "property-documents"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "f8d4ef59-a689-42a8-b2fc-aa2b325bd692",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-documents",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-documents"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-f8d4ef59-a689-42a8-b2fc-aa2b325bd692"
                    }
                  ],
                  "uid": "45851737-8c7ea473-a3b0-496a-9692-360de09e39b0"
                },
                {
                  "name": "Property Document Controller find All",
                  "id": "a6f1d0cd-e2ad-47d4-ae9e-59faacf8a2ed",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/property-documents",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "property-documents"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "07a78441-c89d-4a42-87bd-51a1e3660d95",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-documents",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-documents"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-07a78441-c89d-4a42-87bd-51a1e3660d95"
                    }
                  ],
                  "uid": "45851737-a6f1d0cd-e2ad-47d4-ae9e-59faacf8a2ed"
                }
              ],
              "id": "8c41b995-2920-4ba3-84bf-96472b2490e8",
              "uid": "45851737-8c41b995-2920-4ba3-84bf-96472b2490e8"
            },
            {
              "name": "property-analytics",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Property Analytics Controller find One",
                      "id": "29bf8c57-494b-476c-b943-e5369b56fa60",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-analytics",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "a198d5b2-04ad-4855-a43e-2b50388f99ca",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "c0757c85-2228-4111-b9d9-018648ef1312",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-analytics",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-c0757c85-2228-4111-b9d9-018648ef1312"
                        }
                      ],
                      "uid": "45851737-29bf8c57-494b-476c-b943-e5369b56fa60"
                    },
                    {
                      "name": "Property Analytics Controller update",
                      "id": "1f4ffd33-5030-40c7-8e64-175f37435ae7",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-analytics",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "84cfbfff-5753-4472-89dd-8d6f839315a6",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "89fd0d9d-0d5a-4b39-be8c-815fb7d25279",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-analytics",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-89fd0d9d-0d5a-4b39-be8c-815fb7d25279"
                        }
                      ],
                      "uid": "45851737-1f4ffd33-5030-40c7-8e64-175f37435ae7"
                    },
                    {
                      "name": "Property Analytics Controller remove",
                      "id": "4d1e28d4-65d0-49c1-9c22-ab31e39d0016",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-analytics",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "38d6ca84-65d2-487a-9ba6-dd65e88ecd86",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "12a87dbd-2380-40bd-bef0-9651a4e7e8c9",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/property-analytics/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "property-analytics",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-12a87dbd-2380-40bd-bef0-9651a4e7e8c9"
                        }
                      ],
                      "uid": "45851737-4d1e28d4-65d0-49c1-9c22-ab31e39d0016"
                    }
                  ],
                  "id": "2791c5ab-a47e-4039-8244-6c4f16b111b0",
                  "uid": "45851737-2791c5ab-a47e-4039-8244-6c4f16b111b0"
                },
                {
                  "name": "Property Analytics Controller create",
                  "id": "909f2ebd-25d4-4141-af9b-6f2747c767ca",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/property-analytics",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "property-analytics"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "83e99fee-6af9-4781-827e-6824118e36e6",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-analytics",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-analytics"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-83e99fee-6af9-4781-827e-6824118e36e6"
                    }
                  ],
                  "uid": "45851737-909f2ebd-25d4-4141-af9b-6f2747c767ca"
                },
                {
                  "name": "Property Analytics Controller find All",
                  "id": "b6584703-0955-4de4-8802-72bc1d726c15",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/property-analytics",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "property-analytics"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "02fbb65c-beec-4081-a11d-48cf8c47e639",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/property-analytics",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "property-analytics"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-02fbb65c-beec-4081-a11d-48cf8c47e639"
                    }
                  ],
                  "uid": "45851737-b6584703-0955-4de4-8802-72bc1d726c15"
                }
              ],
              "id": "adf67210-027e-4283-b1e0-663f2e349269",
              "uid": "45851737-adf67210-027e-4283-b1e0-663f2e349269"
            },
            {
              "name": "subscription",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Subscription Controller find One",
                      "id": "5e231847-2099-44f1-8915-9dca4d2be85a",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscription/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscription",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "e573f52c-5279-43b8-9a5a-f368e5cf8e6c",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "67ee182b-26d1-4879-8a18-c22fe7799092",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscription/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscription",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-67ee182b-26d1-4879-8a18-c22fe7799092"
                        }
                      ],
                      "uid": "45851737-5e231847-2099-44f1-8915-9dca4d2be85a"
                    },
                    {
                      "name": "Subscription Controller update",
                      "id": "07cac315-cd16-4c2c-ad5c-39a14f444705",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n    \"stripeCustomerId\" :\"cus_Si8TiV317422pC\"\r\n}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscription/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscription",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "8b857ea4-479d-489e-83f3-ca48fc7b3daa",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "e0920917-dc8d-4f5b-987d-e404c804c2bc",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscription/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscription",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-e0920917-dc8d-4f5b-987d-e404c804c2bc"
                        }
                      ],
                      "uid": "45851737-07cac315-cd16-4c2c-ad5c-39a14f444705"
                    },
                    {
                      "name": "Subscription Controller remove",
                      "id": "a2147e10-10d8-4d2c-86b4-1105af61b46c",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscription/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscription",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "4e77774a-7f9a-41a9-a2f1-b3d8445be257",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "610a2567-1310-4bdd-afb1-3ffd9bc6d0d6",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscription/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscription",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-610a2567-1310-4bdd-afb1-3ffd9bc6d0d6"
                        }
                      ],
                      "uid": "45851737-a2147e10-10d8-4d2c-86b4-1105af61b46c"
                    }
                  ],
                  "id": "a581fecb-fda1-43f7-8a4a-815896cfda92",
                  "uid": "45851737-a581fecb-fda1-43f7-8a4a-815896cfda92"
                },
                {
                  "name": "Subscription Controller create",
                  "id": "dc9e9448-6e80-4c5b-903a-06350d7c5d7d",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      },
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{\r\n    \"subscriptionPlanId\" :\"417388b6-08be-44ed-ad1c-93c71add2aa1\",\r\n    \"ownerId\" : \"ddc535f5-5cab-45d3-9259-997a6bab72a4\",\r\n    \"userType\":\"BROKER_FIRM\"   // \"BROKER_FIRM\"  / \"CUSTOMER\"\r\n}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/subscription",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "subscription"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "6dfdc935-ac07-41ac-a550-4eebd225018d",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscription",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscription"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-6dfdc935-ac07-41ac-a550-4eebd225018d"
                    }
                  ],
                  "uid": "45851737-dc9e9448-6e80-4c5b-903a-06350d7c5d7d"
                },
                {
                  "name": "Subscription Controller find All",
                  "id": "7cbc9366-a117-49ea-bd07-0604f61b1efa",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "",
                      "options": {
                        "raw": {
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/subscription",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "subscription"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "db15a8bf-ff34-4cf2-9180-7cbf6be60512",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscription",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscription"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-db15a8bf-ff34-4cf2-9180-7cbf6be60512"
                    }
                  ],
                  "uid": "45851737-7cbc9366-a117-49ea-bd07-0604f61b1efa"
                }
              ],
              "id": "3ef590c9-d603-488c-8c45-30b810ef5f87",
              "uid": "45851737-3ef590c9-d603-488c-8c45-30b810ef5f87"
            },
            {
              "name": "subscripton-plan",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Subscripton Plan Controller find One",
                      "id": "06e68d05-b175-445d-8265-2d8a2cd9b133",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscripton-plan",
                            ":id"
                          ],
                          "variable": [
                            {
                              "key": "id",
                              "value": "771a384b-e2e4-46ad-8efc-1074018b2a47",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "4e9facd8-3fc3-4b26-81d0-f13d044b5476",
                          "name": "Subscripton Plan Controller find One",
                          "originalRequest": {
                            "method": "GET",
                            "header": [
                              {
                                "key": "Authorization",
                                "value": "{{ADMIN_TOKEN}}",
                                "type": "text"
                              }
                            ],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscripton-plan",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id",
                                  "value": "771a384b-e2e4-46ad-8efc-1074018b2a47",
                                  "description": "(Required) "
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "json",
                          "header": [
                            {
                              "key": "X-Powered-By",
                              "value": "Express"
                            },
                            {
                              "key": "Vary",
                              "value": "Origin"
                            },
                            {
                              "key": "Access-Control-Allow-Credentials",
                              "value": "true"
                            },
                            {
                              "key": "X-RateLimit-Limit-short",
                              "value": "3"
                            },
                            {
                              "key": "X-RateLimit-Remaining-short",
                              "value": "2"
                            },
                            {
                              "key": "X-RateLimit-Reset-short",
                              "value": "1"
                            },
                            {
                              "key": "X-RateLimit-Limit-medium",
                              "value": "200"
                            },
                            {
                              "key": "X-RateLimit-Remaining-medium",
                              "value": "199"
                            },
                            {
                              "key": "X-RateLimit-Reset-medium",
                              "value": "10"
                            },
                            {
                              "key": "X-RateLimit-Limit-long",
                              "value": "100"
                            },
                            {
                              "key": "X-RateLimit-Remaining-long",
                              "value": "98"
                            },
                            {
                              "key": "X-RateLimit-Reset-long",
                              "value": "590"
                            },
                            {
                              "key": "Content-Type",
                              "value": "application/json; charset=utf-8"
                            },
                            {
                              "key": "Content-Length",
                              "value": "437"
                            },
                            {
                              "key": "ETag",
                              "value": "W/\"1b5-W7LMj+QaZJCBiB3aKincT9kFBvA\""
                            },
                            {
                              "key": "Date",
                              "value": "Wed, 16 Jul 2025 17:38:28 GMT"
                            },
                            {
                              "key": "Connection",
                              "value": "keep-alive"
                            },
                            {
                              "key": "Keep-Alive",
                              "value": "timeout=5"
                            }
                          ],
                          "cookie": [],
                          "responseTime": null,
                          "body": "{\n    \"id\": \"771a384b-e2e4-46ad-8efc-1074018b2a47\",\n    \"plan\": \"MONTH\",\n    \"status\": \"ACTIVE\",\n    \"planName\": \"MAX\",\n    \"name\": \"Starter Plan\",\n    \"planType\": \"SUBSCRIPTION_BROKER_FIRM\",\n    \"description\": \"Perfect for individuals just getting started.\",\n    \"featuresList\": [\n        \"1 user\",\n        \"Email support\",\n        \"Basic analytics\"\n    ],\n    \"trialPeriod\": false,\n    \"price\": 9.99,\n    \"stripePriceId\": \"price_1RlZGhDhyWl1vHdf6vTu7RZa\",\n    \"createdAt\": \"2025-07-16T14:25:49.865Z\",\n    \"updatedAt\": \"2025-07-16T17:37:25.502Z\"\n}",
                          "uid": "45851737-4e9facd8-3fc3-4b26-81d0-f13d044b5476"
                        }
                      ],
                      "uid": "45851737-06e68d05-b175-445d-8265-2d8a2cd9b133"
                    },
                    {
                      "name": "Subscripton Plan Controller update",
                      "id": "e7cb2b11-bd3f-4659-a6fd-000ad3b538ee",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n\r\n    \"planName\": \"MAX\",\r\n    \"name\": \"Starter Plan\",\r\n    \"planType\": \"SUBSCRIPTION_BROKER_FIRM\",\r\n    \"description\": \"Perfect for individuals just getting started.\",\r\n    \"featuresList\": [\"1 user\", \"Email support\", \"Basic analytics\"],\r\n    \"price\": 9.99,\r\n    \"newPriceId\":\"\"\r\n}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscripton-plan",
                            ":id"
                          ],
                          "variable": [
                            {
                              "key": "id",
                              "value": "771a384b-e2e4-46ad-8efc-1074018b2a47",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "79d35d02-88de-440f-ba8b-30fd7fa3e92d",
                          "name": "Subscripton Plan Controller update",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              },
                              {
                                "key": "Authorization",
                                "value": "{{ADMIN_TOKEN}}",
                                "type": "text"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{\r\n\r\n    \"planName\": \"MAX\",\r\n    \"name\": \"Starter Plan\",\r\n    \"planType\": \"SUBSCRIPTION_BROKER_FIRM\",\r\n    \"description\": \"Perfect for individuals just getting started.\",\r\n    \"featuresList\": [\"1 user\", \"Email support\", \"Basic analytics\"],\r\n    \"price\": 9.99\r\n}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscripton-plan",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id",
                                  "value": "771a384b-e2e4-46ad-8efc-1074018b2a47",
                                  "description": "(Required) "
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "json",
                          "header": [
                            {
                              "key": "X-Powered-By",
                              "value": "Express"
                            },
                            {
                              "key": "Vary",
                              "value": "Origin"
                            },
                            {
                              "key": "Access-Control-Allow-Credentials",
                              "value": "true"
                            },
                            {
                              "key": "X-RateLimit-Limit-short",
                              "value": "3"
                            },
                            {
                              "key": "X-RateLimit-Remaining-short",
                              "value": "2"
                            },
                            {
                              "key": "X-RateLimit-Reset-short",
                              "value": "1"
                            },
                            {
                              "key": "X-RateLimit-Limit-medium",
                              "value": "200"
                            },
                            {
                              "key": "X-RateLimit-Remaining-medium",
                              "value": "199"
                            },
                            {
                              "key": "X-RateLimit-Reset-medium",
                              "value": "10"
                            },
                            {
                              "key": "X-RateLimit-Limit-long",
                              "value": "100"
                            },
                            {
                              "key": "X-RateLimit-Remaining-long",
                              "value": "99"
                            },
                            {
                              "key": "X-RateLimit-Reset-long",
                              "value": "600"
                            },
                            {
                              "key": "Content-Type",
                              "value": "application/json; charset=utf-8"
                            },
                            {
                              "key": "Content-Length",
                              "value": "437"
                            },
                            {
                              "key": "ETag",
                              "value": "W/\"1b5-W7LMj+QaZJCBiB3aKincT9kFBvA\""
                            },
                            {
                              "key": "Date",
                              "value": "Wed, 16 Jul 2025 17:37:25 GMT"
                            },
                            {
                              "key": "Connection",
                              "value": "keep-alive"
                            },
                            {
                              "key": "Keep-Alive",
                              "value": "timeout=5"
                            }
                          ],
                          "cookie": [],
                          "responseTime": null,
                          "body": "{\n    \"id\": \"771a384b-e2e4-46ad-8efc-1074018b2a47\",\n    \"plan\": \"MONTH\",\n    \"status\": \"ACTIVE\",\n    \"planName\": \"MAX\",\n    \"name\": \"Starter Plan\",\n    \"planType\": \"SUBSCRIPTION_BROKER_FIRM\",\n    \"description\": \"Perfect for individuals just getting started.\",\n    \"featuresList\": [\n        \"1 user\",\n        \"Email support\",\n        \"Basic analytics\"\n    ],\n    \"trialPeriod\": false,\n    \"price\": 9.99,\n    \"stripePriceId\": \"price_1RlZGhDhyWl1vHdf6vTu7RZa\",\n    \"createdAt\": \"2025-07-16T14:25:49.865Z\",\n    \"updatedAt\": \"2025-07-16T17:37:25.502Z\"\n}",
                          "uid": "45851737-79d35d02-88de-440f-ba8b-30fd7fa3e92d"
                        }
                      ],
                      "uid": "45851737-e7cb2b11-bd3f-4659-a6fd-000ad3b538ee"
                    },
                    {
                      "name": "Subscripton Plan Controller remove",
                      "id": "bafefcab-556c-4a94-949d-9df067754d2b",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscripton-plan",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "1d816109-2a07-4e34-9cf9-e422e42dcfbf",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "6d942c9b-c1e6-4ddb-973a-ee951bfd127d",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/subscripton-plan/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "subscripton-plan",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-6d942c9b-c1e6-4ddb-973a-ee951bfd127d"
                        }
                      ],
                      "uid": "45851737-bafefcab-556c-4a94-949d-9df067754d2b"
                    }
                  ],
                  "id": "9e26c91d-23a2-4627-909e-c2999a929425",
                  "uid": "45851737-9e26c91d-23a2-4627-909e-c2999a929425"
                },
                {
                  "name": "Subscripton Plan Controller create",
                  "id": "58eb5c2f-8471-42ca-ac24-2ca3f9377ec4",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      },
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{\r\n    \"planName\": \"MAX\",\r\n    \"name\": \"Starter Plan\",\r\n    \"planType\": \"SUBSCRIPTION_BROKER_FIRM\",\r\n    \"description\": \"Perfect for individuals just getting started.\",\r\n    \"featuresList\": [\"1 user\", \"Email support\", \"Basic analytics\"],\r\n    \"price\": 9.99\r\n}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/subscripton-plan",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "subscripton-plan"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "b55597aa-1d67-4b87-9908-b1705aef244a",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscripton-plan",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscripton-plan"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-b55597aa-1d67-4b87-9908-b1705aef244a"
                    }
                  ],
                  "uid": "45851737-58eb5c2f-8471-42ca-ac24-2ca3f9377ec4"
                },
                {
                  "name": "Subscripton Plan Controller find All",
                  "id": "6c0c1954-9228-4457-93f9-9935a41758d5",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "",
                      "options": {
                        "raw": {
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/subscripton-plan",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "subscripton-plan"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "78df1743-92eb-4f0a-b411-4ca9b0bcf582",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/subscripton-plan",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "subscripton-plan"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-78df1743-92eb-4f0a-b411-4ca9b0bcf582"
                    }
                  ],
                  "uid": "45851737-6c0c1954-9228-4457-93f9-9935a41758d5"
                }
              ],
              "id": "67502f26-6606-4575-8665-ceb5aa0a2b2b",
              "uid": "45851737-67502f26-6606-4575-8665-ceb5aa0a2b2b"
            },
            {
              "name": "blogs",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Blog Controller find One",
                      "id": "90fb08db-c61f-4a08-8c30-8e10b834dc56",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/blogs/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "blogs",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "0966ee52-c21a-4e10-b2e4-dee0472cbb13",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "f79da7fd-8df2-4b82-9f6b-e2136a21683b",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/blogs/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "blogs",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-f79da7fd-8df2-4b82-9f6b-e2136a21683b"
                        }
                      ],
                      "uid": "45851737-90fb08db-c61f-4a08-8c30-8e10b834dc56"
                    },
                    {
                      "name": "Blog Controller update",
                      "id": "0788d2d1-fda9-4b13-ae61-14a3e5ad0cfa",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/blogs/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "blogs",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "2b909fe2-775a-4f29-9e71-82a9113adec1",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "cb173737-fb45-4f21-b956-4f941af23882",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/blogs/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "blogs",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-cb173737-fb45-4f21-b956-4f941af23882"
                        }
                      ],
                      "uid": "45851737-0788d2d1-fda9-4b13-ae61-14a3e5ad0cfa"
                    },
                    {
                      "name": "Blog Controller remove",
                      "id": "f1831a2e-e0d4-48ab-8df1-22b13fa4b5de",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/blogs/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "blogs",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "8664384f-4c15-4fc8-9862-df3128a498a2",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "671d02e7-4ff7-41f0-af7c-c3ef52121bda",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/blogs/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "blogs",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-671d02e7-4ff7-41f0-af7c-c3ef52121bda"
                        }
                      ],
                      "uid": "45851737-f1831a2e-e0d4-48ab-8df1-22b13fa4b5de"
                    }
                  ],
                  "id": "eab864db-e8ed-4751-b2fb-b3439ece4346",
                  "uid": "45851737-eab864db-e8ed-4751-b2fb-b3439ece4346"
                },
                {
                  "name": "Blog Controller create",
                  "id": "f0dbd123-b905-4e4e-be24-f480ed3ac407",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/blogs",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "blogs"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "fed80cc9-1cbb-4e1c-865a-147e923cdbc1",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/blogs",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "blogs"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-fed80cc9-1cbb-4e1c-865a-147e923cdbc1"
                    }
                  ],
                  "uid": "45851737-f0dbd123-b905-4e4e-be24-f480ed3ac407"
                },
                {
                  "name": "Blog Controller find All",
                  "id": "52a1b0ff-b56b-46b5-b81d-5ff2070ad714",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/blogs",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "blogs"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "d3adf807-2e06-49cf-a5f6-b117d94ade62",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/blogs",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "blogs"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-d3adf807-2e06-49cf-a5f6-b117d94ade62"
                    }
                  ],
                  "uid": "45851737-52a1b0ff-b56b-46b5-b81d-5ff2070ad714"
                }
              ],
              "id": "fc31985d-d2b5-4704-8bc2-215cb0597ab0",
              "uid": "45851737-fc31985d-d2b5-4704-8bc2-215cb0597ab0"
            },
            {
              "name": "brokers",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Broker Controller find One",
                      "id": "f61b3791-878d-43f3-987c-c14a265706cb",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/brokers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "brokers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "ab1f54c5-0454-4377-8105-b6f9764b0dce",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "62e4d8ff-1571-440d-8692-c7f32bf176b3",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/brokers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "brokers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-62e4d8ff-1571-440d-8692-c7f32bf176b3"
                        }
                      ],
                      "uid": "45851737-f61b3791-878d-43f3-987c-c14a265706cb"
                    },
                    {
                      "name": "Broker Controller update",
                      "id": "b2b9c501-42ae-484b-9d32-f5688bd4c55b",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/brokers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "brokers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "a3d93983-e2a7-427c-944c-ce5f4275b7e6",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "7d97e790-9eff-4c26-b5fd-07cbf5932f88",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/brokers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "brokers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-7d97e790-9eff-4c26-b5fd-07cbf5932f88"
                        }
                      ],
                      "uid": "45851737-b2b9c501-42ae-484b-9d32-f5688bd4c55b"
                    },
                    {
                      "name": "Broker Controller remove",
                      "id": "b5352950-684a-4ca7-85b6-66c816cf4c35",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/brokers/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "brokers",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "5d63fd24-f451-461b-88b7-3437a5882e67",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "6dfd6a12-ba36-40b3-971e-229022b7c04e",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/brokers/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "brokers",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-6dfd6a12-ba36-40b3-971e-229022b7c04e"
                        }
                      ],
                      "uid": "45851737-b5352950-684a-4ca7-85b6-66c816cf4c35"
                    }
                  ],
                  "id": "8602d1e4-44dc-46b1-84ba-8f912a2b33d8",
                  "uid": "45851737-8602d1e4-44dc-46b1-84ba-8f912a2b33d8"
                },
                {
                  "name": "Broker Controller find All",
                  "id": "caec52e1-1054-4231-aa82-b9cb09c6c1c1",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/brokers",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "brokers"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "8e17d63e-f937-48f7-a183-fd96c5305ba6",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/brokers",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "brokers"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-8e17d63e-f937-48f7-a183-fd96c5305ba6"
                    }
                  ],
                  "uid": "45851737-caec52e1-1054-4231-aa82-b9cb09c6c1c1"
                }
              ],
              "id": "e33add19-e9d2-46e0-a30f-8cf47a997f11",
              "uid": "45851737-e33add19-e9d2-46e0-a30f-8cf47a997f11"
            },
            {
              "name": "analytics",
              "item": [
                {
                  "name": "admin-overview",
                  "item": [
                    {
                      "name": "Analytics Controller find All",
                      "id": "a3f3a024-6934-4454-988b-26208a1571e1",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/analytics/admin-overview",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "analytics",
                            "admin-overview"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "2e5df983-9e4e-4de6-a283-ba1b831f805c",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/analytics/admin-overview",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "analytics",
                                "admin-overview"
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-2e5df983-9e4e-4de6-a283-ba1b831f805c"
                        }
                      ],
                      "uid": "45851737-a3f3a024-6934-4454-988b-26208a1571e1"
                    }
                  ],
                  "id": "d870a124-40be-4fbd-8d98-012f2be565dd",
                  "uid": "45851737-d870a124-40be-4fbd-8d98-012f2be565dd"
                },
                {
                  "name": "Admin-Economic",
                  "item": [
                    {
                      "name": "Admin Economic",
                      "id": "e889ae1a-afb3-4e7d-991d-9b7b18d02390",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n    \"subscriptionPlanId\" :\"771a384b-e2e4-46ad-8efc-1074018b2a47\",\r\n    \"ownerId\" : \"ddc535f5-5cab-45d3-9259-997a6bab72a4\",\r\n    \"userType\":\"BROKER_FIRM\"   // \"BROKER_FIRM\"  / \"CUSTOMER\"\r\n    \r\n}"
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/analytics/admin-economic",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "analytics",
                            "admin-economic"
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "81839ef5-2736-42c1-ae33-245584036a08",
                          "name": "New Request",
                          "originalRequest": {
                            "method": "GET",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              },
                              {
                                "key": "Authorization",
                                "value": "{{ADMIN_TOKEN}}",
                                "type": "text"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{\r\n    \"subscriptionPlanId\" :\"771a384b-e2e4-46ad-8efc-1074018b2a47\",\r\n    \"ownerId\" : \"ddc535f5-5cab-45d3-9259-997a6bab72a4\",\r\n    \"userType\":\"BROKER_FIRM\"   // \"BROKER_FIRM\"  / \"CUSTOMER\"\r\n    \r\n}"
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/analytics/admin-economic",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "analytics",
                                "admin-economic"
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "json",
                          "header": [
                            {
                              "key": "X-Powered-By",
                              "value": "Express"
                            },
                            {
                              "key": "Vary",
                              "value": "Origin"
                            },
                            {
                              "key": "Access-Control-Allow-Credentials",
                              "value": "true"
                            },
                            {
                              "key": "X-RateLimit-Limit-short",
                              "value": "3"
                            },
                            {
                              "key": "X-RateLimit-Remaining-short",
                              "value": "2"
                            },
                            {
                              "key": "X-RateLimit-Reset-short",
                              "value": "1"
                            },
                            {
                              "key": "X-RateLimit-Limit-medium",
                              "value": "200"
                            },
                            {
                              "key": "X-RateLimit-Remaining-medium",
                              "value": "199"
                            },
                            {
                              "key": "X-RateLimit-Reset-medium",
                              "value": "10"
                            },
                            {
                              "key": "X-RateLimit-Limit-long",
                              "value": "100"
                            },
                            {
                              "key": "X-RateLimit-Remaining-long",
                              "value": "99"
                            },
                            {
                              "key": "X-RateLimit-Reset-long",
                              "value": "600"
                            },
                            {
                              "key": "Content-Type",
                              "value": "application/json; charset=utf-8"
                            },
                            {
                              "key": "Content-Length",
                              "value": "1661"
                            },
                            {
                              "key": "ETag",
                              "value": "W/\"67d-/zINfVL8BMDhlJKwLYaDuyVHZ8A\""
                            },
                            {
                              "key": "Date",
                              "value": "Thu, 17 Jul 2025 19:36:24 GMT"
                            },
                            {
                              "key": "Connection",
                              "value": "keep-alive"
                            },
                            {
                              "key": "Keep-Alive",
                              "value": "timeout=5"
                            }
                          ],
                          "cookie": [],
                          "responseTime": null,
                          "body": "{\n    \"message\": \"Admin Economic Analyticss found successfully\",\n    \"success\": true,\n    \"meta\": null,\n    \"data\": {\n        \"totalRevenue\": {\n            \"monthRevenue\": 1440.75,\n            \"fromLastMonth\": 1440.75\n        },\n        \"averageProfit\": 360.1875,\n        \"pendingPayment\": {\n            \"totalPayment\": 210,\n            \"totalInvoice\": 1\n        },\n        \"activeSubscription\": {\n            \"totalSubscription\": 15,\n            \"monthlyIncome\": 1692.49\n        },\n        \"revenueAndProfit\": [\n            {\n                \"dayName\": \"Tue 01\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Wed 02\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Thu 03\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Fri 04\",\n                \"everyDayIncome\": 320.75\n            },\n            {\n                \"dayName\": \"Sat 05\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sun 06\",\n                \"everyDayIncome\": 500\n            },\n            {\n                \"dayName\": \"Mon 07\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Tue 08\",\n                \"everyDayIncome\": 400\n            },\n            {\n                \"dayName\": \"Wed 09\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Thu 10\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Fri 11\",\n                \"everyDayIncome\": 220\n            },\n            {\n                \"dayName\": \"Sat 12\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sun 13\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Mon 14\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Tue 15\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Wed 16\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Thu 17\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Fri 18\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sat 19\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sun 20\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Mon 21\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Tue 22\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Wed 23\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Thu 24\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Fri 25\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sat 26\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Sun 27\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Mon 28\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Tue 29\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Wed 30\",\n                \"everyDayIncome\": 0\n            },\n            {\n                \"dayName\": \"Thu 31\",\n                \"everyDayIncome\": 0\n            }\n        ],\n        \"revenueSources\": {\n            \"subscriptions\": 940.75,\n            \"advertisingFee\": 0,\n            \"premiumFeatures\": 0\n        }\n    }\n}",
                          "uid": "45851737-81839ef5-2736-42c1-ae33-245584036a08"
                        }
                      ],
                      "uid": "45851737-e889ae1a-afb3-4e7d-991d-9b7b18d02390"
                    }
                  ],
                  "id": "a460384c-489a-47a2-bb2d-b80cd8dba519",
                  "uid": "45851737-a460384c-489a-47a2-bb2d-b80cd8dba519"
                },
                {
                  "name": "Broker&& brokerFirm common",
                  "item": [
                    {
                      "name": "Common For BrokerFirm && broker",
                      "id": "eb8b5515-94a1-4808-8bfa-275a5414b9e2",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n    \"subscriptionPlanId\" :\"771a384b-e2e4-46ad-8efc-1074018b2a47\",\r\n    \"ownerId\" : \"ddc535f5-5cab-45d3-9259-997a6bab72a4\",\r\n    \"userType\":\"BROKER_FIRM\"   // \"BROKER_FIRM\"  / \"CUSTOMER\"\r\n    \r\n}"
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/analytics/common-overview",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "analytics",
                            "common-overview"
                          ]
                        }
                      },
                      "response": [],
                      "uid": "45851737-eb8b5515-94a1-4808-8bfa-275a5414b9e2"
                    }
                  ],
                  "id": "00d997c2-79f8-48bb-b55a-663b59827564",
                  "uid": "45851737-00d997c2-79f8-48bb-b55a-663b59827564"
                },
                {
                  "name": "BrokerFirm",
                  "item": [
                    {
                      "name": "brokerFirm",
                      "id": "fb05a775-2ba5-4244-987c-3b0124867c54",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n    \"subscriptionPlanId\" :\"771a384b-e2e4-46ad-8efc-1074018b2a47\",\r\n    \"ownerId\" : \"ddc535f5-5cab-45d3-9259-997a6bab72a4\",\r\n    \"userType\":\"BROKER_FIRM\"   // \"BROKER_FIRM\"  / \"CUSTOMER\"\r\n    \r\n}"
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/analytics/brokerFirm-overview",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "analytics",
                            "brokerFirm-overview"
                          ]
                        }
                      },
                      "response": [],
                      "uid": "45851737-fb05a775-2ba5-4244-987c-3b0124867c54"
                    }
                  ],
                  "id": "4d6da8e1-bc40-4c9b-9d18-96bf43586d5c",
                  "uid": "45851737-4d6da8e1-bc40-4c9b-9d18-96bf43586d5c"
                }
              ],
              "id": "3ecf8ab0-8e0c-4493-a29c-83ab103b2da0",
              "uid": "45851737-3ecf8ab0-8e0c-4493-a29c-83ab103b2da0"
            },
            {
              "name": "bankinfo",
              "item": [
                {
                  "name": "{id}",
                  "item": [
                    {
                      "name": "Bankinfo Controller find One",
                      "id": "fc9495b4-5812-4c47-b4bb-8dd40774793e",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "bankinfo",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "9665e1e3-6aef-4455-8da2-2c4e456863aa",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "4d2bbe2a-3e34-41ec-b087-a06f9b97072b",
                          "name": "response",
                          "originalRequest": {
                            "method": "GET",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "bankinfo",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-4d2bbe2a-3e34-41ec-b087-a06f9b97072b"
                        }
                      ],
                      "uid": "45851737-fc9495b4-5812-4c47-b4bb-8dd40774793e"
                    },
                    {
                      "name": "Bankinfo Controller update",
                      "id": "2127ac66-8f32-4b86-aa0a-f4f43e4c253d",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "PATCH",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "bankinfo",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "40e734ff-13e0-4cf7-bca7-3333a3fbc989",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "049ef81e-9caf-4331-9c86-b840c7abca24",
                          "name": "response",
                          "originalRequest": {
                            "method": "PATCH",
                            "header": [
                              {
                                "key": "Content-Type",
                                "value": "application/json"
                              }
                            ],
                            "body": {
                              "mode": "raw",
                              "raw": "{}",
                              "options": {
                                "raw": {
                                  "headerFamily": "json",
                                  "language": "json"
                                }
                              }
                            },
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "bankinfo",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-049ef81e-9caf-4331-9c86-b840c7abca24"
                        }
                      ],
                      "uid": "45851737-2127ac66-8f32-4b86-aa0a-f4f43e4c253d"
                    },
                    {
                      "name": "Bankinfo Controller remove",
                      "id": "0df176f2-a9c4-44b6-a176-8349e293953e",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "bankinfo",
                            ":id"
                          ],
                          "variable": [
                            {
                              "id": "40ecf4ae-31a7-42ba-9e29-212da073b8f2",
                              "key": "id",
                              "value": "<string>",
                              "description": "(Required) "
                            }
                          ]
                        }
                      },
                      "response": [
                        {
                          "id": "93b118d6-3b6b-4b96-9f4a-a416fd836c9a",
                          "name": "response",
                          "originalRequest": {
                            "method": "DELETE",
                            "header": [],
                            "url": {
                              "raw": "{{baseUrl}}/api/v1/bankinfo/:id",
                              "host": [
                                "{{baseUrl}}"
                              ],
                              "path": [
                                "api",
                                "v1",
                                "bankinfo",
                                ":id"
                              ],
                              "variable": [
                                {
                                  "key": "id"
                                }
                              ]
                            }
                          },
                          "status": "OK",
                          "code": 200,
                          "_postman_previewlanguage": "text",
                          "header": [],
                          "cookie": [],
                          "responseTime": null,
                          "body": null,
                          "uid": "45851737-93b118d6-3b6b-4b96-9f4a-a416fd836c9a"
                        }
                      ],
                      "uid": "45851737-0df176f2-a9c4-44b6-a176-8349e293953e"
                    }
                  ],
                  "id": "4419ccad-fcb3-43f1-92b5-0a932c0db8ab",
                  "uid": "45851737-4419ccad-fcb3-43f1-92b5-0a932c0db8ab"
                },
                {
                  "name": "Bankinfo Controller create",
                  "id": "5bcb59cc-adfe-4223-9bd1-9b689ba60fc0",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{}",
                      "options": {
                        "raw": {
                          "headerFamily": "json",
                          "language": "json"
                        }
                      }
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/bankinfo",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "bankinfo"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "7bd4c9ff-4799-4386-9e0a-3e89a4017e12",
                      "name": "response",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{}",
                          "options": {
                            "raw": {
                              "headerFamily": "json",
                              "language": "json"
                            }
                          }
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/bankinfo",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "bankinfo"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-7bd4c9ff-4799-4386-9e0a-3e89a4017e12"
                    }
                  ],
                  "uid": "45851737-5bcb59cc-adfe-4223-9bd1-9b689ba60fc0"
                },
                {
                  "name": "Bankinfo Controller find All",
                  "id": "023444cb-e86f-4d98-a76c-a2433f40e730",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/bankinfo",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "bankinfo"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "d778d9d7-975a-41d6-aea9-d6bf830c2233",
                      "name": "response",
                      "originalRequest": {
                        "method": "GET",
                        "header": [],
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/bankinfo",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "bankinfo"
                          ]
                        }
                      },
                      "status": "OK",
                      "code": 200,
                      "_postman_previewlanguage": "text",
                      "header": [],
                      "cookie": [],
                      "responseTime": null,
                      "body": null,
                      "uid": "45851737-d778d9d7-975a-41d6-aea9-d6bf830c2233"
                    }
                  ],
                  "uid": "45851737-023444cb-e86f-4d98-a76c-a2433f40e730"
                }
              ],
              "id": "d2bf1dd5-d9df-4176-8212-d690e004fdda",
              "uid": "45851737-d2bf1dd5-d9df-4176-8212-d690e004fdda"
            },
            {
              "name": "Create booking",
              "item": [
                {
                  "name": "(id)",
                  "item": [
                    {
                      "name": "Update",
                      "id": "b8a63284-b29c-4905-932c-b06ff1344cb0",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": []
                      },
                      "response": [],
                      "uid": "45851737-b8a63284-b29c-4905-932c-b06ff1344cb0"
                    },
                    {
                      "name": "delete",
                      "id": "82900a39-8688-4e8b-89c2-43f2acaeb5a3",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": []
                      },
                      "response": [],
                      "uid": "45851737-82900a39-8688-4e8b-89c2-43f2acaeb5a3"
                    },
                    {
                      "name": "get",
                      "id": "0cb113a8-a178-4ecd-ad3f-dc71198725cd",
                      "protocolProfileBehavior": {
                        "disableBodyPruning": true
                      },
                      "request": {
                        "method": "GET",
                        "header": []
                      },
                      "response": [],
                      "uid": "45851737-0cb113a8-a178-4ecd-ad3f-dc71198725cd"
                    }
                  ],
                  "id": "d4bb6ab5-93ae-4bc4-a15c-e7b7a9ad386b",
                  "uid": "45851737-d4bb6ab5-93ae-4bc4-a15c-e7b7a9ad386b"
                },
                {
                  "name": "Create Booking",
                  "id": "aacfaf25-aff1-41cb-9c4c-5b42aa67cd95",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "POST",
                    "header": [
                      {
                        "key": "Content-Type",
                        "value": "application/json"
                      },
                      {
                        "key": "Authorization",
                        "value": "{{ADMIN_TOKEN}}",
                        "type": "text"
                      }
                    ],
                    "body": {
                      "mode": "raw",
                      "raw": "{\r\n  \"customerId\": \"29b22e8a-ff76-4cc1-8c26-3bd333cc5edb\",\r\n  \"brokerFirmId\": \"f05349ea-bd13-4e4f-9db6-7da048bf2df8\",\r\n  \"brokerId\": \"686dddc9-bb34-4587-bcc4-a452070c1145\",\r\n  \"propertyId\": \"94dcac83-baf5-4cb6-a3d7-302f31aef79b\",\r\n  \"duration\": \"30 minutes\",\r\n  \"meetingType\": \"VIEWING\",\r\n  \"name\": \"John Doe\",\r\n  \"contactNo\": \"+8801711223345\",\r\n  \"email\": \"johdn.doe@example.com\",\r\n  \"location\": \"123 Main Street, Dhaka, Bangladesh\",\r\n  \"date\": \"2025-07-25T15:00:00.000Z\",\r\n  \"notes\": \"Please make sure the property is ready before my visit.\"\r\n}"
                    },
                    "url": {
                      "raw": "{{baseUrl}}/api/v1/booking",
                      "host": [
                        "{{baseUrl}}"
                      ],
                      "path": [
                        "api",
                        "v1",
                        "booking"
                      ]
                    }
                  },
                  "response": [
                    {
                      "id": "fcbd5884-4c8c-450d-b133-2bfcb9366e4d",
                      "name": "Create Booking",
                      "originalRequest": {
                        "method": "POST",
                        "header": [
                          {
                            "key": "Content-Type",
                            "value": "application/json"
                          },
                          {
                            "key": "Authorization",
                            "value": "{{ADMIN_TOKEN}}",
                            "type": "text"
                          }
                        ],
                        "body": {
                          "mode": "raw",
                          "raw": "{\r\n  \"customerId\": \"29b22e8a-ff76-4cc1-8c26-3bd333cc5edb\",\r\n  \"brokerFirmId\": \"f05349ea-bd13-4e4f-9db6-7da048bf2df8\",\r\n  \"brokerId\": \"686dddc9-bb34-4587-bcc4-a452070c1145\",\r\n  \"propertyId\": \"94dcac83-baf5-4cb6-a3d7-302f31aef79b\",\r\n  \"duration\": \"30 minutes\",\r\n  \"meetingType\": \"VIEWING\",\r\n  \"name\": \"John Doe\",\r\n  \"contactNo\": \"+8801711223345\",\r\n  \"email\": \"johdn.doe@example.com\",\r\n  \"location\": \"123 Main Street, Dhaka, Bangladesh\",\r\n  \"date\": \"2025-07-25T15:00:00.000Z\",\r\n  \"notes\": \"Please make sure the property is ready before my visit.\"\r\n}"
                        },
                        "url": {
                          "raw": "{{baseUrl}}/api/v1/booking",
                          "host": [
                            "{{baseUrl}}"
                          ],
                          "path": [
                            "api",
                            "v1",
                            "booking"
                          ]
                        }
                      },
                      "status": "Created",
                      "code": 201,
                      "_postman_previewlanguage": "json",
                      "header": [
                        {
                          "key": "X-Powered-By",
                          "value": "Express"
                        },
                        {
                          "key": "Vary",
                          "value": "Origin"
                        },
                        {
                          "key": "Access-Control-Allow-Credentials",
                          "value": "true"
                        },
                        {
                          "key": "X-RateLimit-Limit-short",
                          "value": "3"
                        },
                        {
                          "key": "X-RateLimit-Remaining-short",
                          "value": "2"
                        },
                        {
                          "key": "X-RateLimit-Reset-short",
                          "value": "1"
                        },
                        {
                          "key": "X-RateLimit-Limit-medium",
                          "value": "200"
                        },
                        {
                          "key": "X-RateLimit-Remaining-medium",
                          "value": "199"
                        },
                        {
                          "key": "X-RateLimit-Reset-medium",
                          "value": "10"
                        },
                        {
                          "key": "X-RateLimit-Limit-long",
                          "value": "100"
                        },
                        {
                          "key": "X-RateLimit-Remaining-long",
                          "value": "99"
                        },
                        {
                          "key": "X-RateLimit-Reset-long",
                          "value": "600"
                        },
                        {
                          "key": "Content-Type",
                          "value": "application/json; charset=utf-8"
                        },
                        {
                          "key": "Content-Length",
                          "value": "682"
                        },
                        {
                          "key": "ETag",
                          "value": "W/\"2aa-7S2/2sPuXlDfXrnb5nipzB4krIg\""
                        },
                        {
                          "key": "Date",
                          "value": "Fri, 18 Jul 2025 01:16:28 GMT"
                        },
                        {
                          "key": "Connection",
                          "value": "keep-alive"
                        },
                        {
                          "key": "Keep-Alive",
                          "value": "timeout=5"
                        }
                      ],
                      "cookie": [],
                      "responseTime": null,
                      "body": "{\n    \"message\": \"Booking created successfully\",\n    \"success\": true,\n    \"meta\": null,\n    \"data\": {\n        \"id\": \"60557444-3e62-4e33-a7bc-8c464a34166a\",\n        \"customerId\": \"29b22e8a-ff76-4cc1-8c26-3bd333cc5edb\",\n        \"brokerFirmId\": \"f05349ea-bd13-4e4f-9db6-7da048bf2df8\",\n        \"brokerId\": \"686dddc9-bb34-4587-bcc4-a452070c1145\",\n        \"propertyId\": \"94dcac83-baf5-4cb6-a3d7-302f31aef79b\",\n        \"duration\": \"30 minutes\",\n        \"meetingType\": \"VIEWING\",\n        \"name\": \"John Doe\",\n        \"contactNo\": \"+8801711223345\",\n        \"email\": \"johdn.doe@example.com\",\n        \"location\": \"123 Main Street, Dhaka, Bangladesh\",\n        \"date\": \"2025-07-25T15:00:00.000Z\",\n        \"notes\": \"Please make sure the property is ready before my visit.\",\n        \"createdAt\": \"2025-07-18T01:16:28.637Z\",\n        \"updateAt\": \"2025-07-18T01:16:28.637Z\"\n    }\n}",
                      "uid": "45851737-fcbd5884-4c8c-450d-b133-2bfcb9366e4d"
                    }
                  ],
                  "uid": "45851737-aacfaf25-aff1-41cb-9c4c-5b42aa67cd95"
                },
                {
                  "name": "All Get",
                  "id": "3fb32abc-db3c-4cd8-93ae-c0129383cc56",
                  "protocolProfileBehavior": {
                    "disableBodyPruning": true
                  },
                  "request": {
                    "method": "GET",
                    "header": []
                  },
                  "response": [],
                  "uid": "45851737-3fb32abc-db3c-4cd8-93ae-c0129383cc56"
                }
              ],
              "id": "8df9da7f-4344-47b9-9139-1017ae400f52",
              "uid": "45851737-8df9da7f-4344-47b9-9139-1017ae400f52"
            }
          ],
          "id": "12cdb5b1-e521-4955-9fe6-2aa481a81cfa",
          "uid": "45851737-12cdb5b1-e521-4955-9fe6-2aa481a81cfa"
        }
      ],
      "id": "426688c0-6750-4bbe-ad47-54880484018c",
      "uid": "45851737-426688c0-6750-4bbe-ad47-54880484018c"
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "/"
    }
  ]
}



// new data collection here 


{
    "item": [
        {
            "name": "api",
            "description": "",
            "item": [
                {
                    "name": "v1",
                    "description": "",
                    "item": [
                        {
                            "name": "auth",
                            "description": "",
                            "item": [
                                {
                                    "name": "login",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "b95be4f6-7631-41c1-b751-34f9243e644d",
                                            "name": "User Login",
                                            "request": {
                                                "name": "User Login",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "auth",
                                                        "login"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "b5a76eb9-f267-4b61-a3a6-8d7e4d9ff914",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "auth",
                                                                "login"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "POST",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "get-me",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "ee19b86c-0c63-43ca-8a80-67995c38355c",
                                            "name": "Auth Controller get Profile",
                                            "request": {
                                                "name": "Auth Controller get Profile",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "auth",
                                                        "get-me"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "475c102b-9b8e-4a40-a47e-c470d232e2b9",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "auth",
                                                                "get-me"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "change-password",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "e8a96d48-5bb4-4998-9c7b-ae23ee30db08",
                                            "name": "Auth Controller change Password",
                                            "request": {
                                                "name": "Auth Controller change Password",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "auth",
                                                        "change-password"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "POST",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "99d9cf54-bd3e-4b42-af13-3902066dc7b5",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "auth",
                                                                "change-password"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "POST",
                                                        "body": {}
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "forgot-password",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "94ff5faa-7828-4adb-b032-e3db7f142ed0",
                                            "name": "Auth Controller forgot Passwod",
                                            "request": {
                                                "name": "Auth Controller forgot Passwod",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "auth",
                                                        "forgot-password"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "POST",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "fe80a638-3c7f-4932-ad50-3feac54dbaf2",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "auth",
                                                                "forgot-password"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "POST",
                                                        "body": {}
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "reset-password",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "2de9d518-8655-452e-9fe3-623eeeafc9ce",
                                            "name": "Auth Controller reset Password",
                                            "request": {
                                                "name": "Auth Controller reset Password",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "auth",
                                                        "reset-password"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "POST",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "6c6ef969-9981-46ef-86c5-89c30d34f9d4",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "auth",
                                                                "reset-password"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "POST",
                                                        "body": {}
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "users",
                            "description": "",
                            "item": [
                                {
                                    "name": "create-admin",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "73115490-e466-408f-a0a0-2bb3b81127bc",
                                            "name": "Users Controller create Admin",
                                            "request": {
                                                "name": "Users Controller create Admin",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "users",
                                                        "create-admin"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "6cdd0368-24c9-4436-b93d-a02fee4760b7",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "users",
                                                                "create-admin"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "POST",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "create-broker-firm",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "78b90cb5-0582-430d-bf84-b8b321e45ba2",
                                            "name": "Users Controller create Broker Firm",
                                            "request": {
                                                "name": "Users Controller create Broker Firm",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "users",
                                                        "create-broker-firm"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "87602042-6be5-4402-87ce-40dcc77ad0dc",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "users",
                                                                "create-broker-firm"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "POST",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "create-broker",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "38ef5235-6a3e-4882-ad45-a8c282cf6dd7",
                                            "name": "Users Controller create Broker",
                                            "request": {
                                                "name": "Users Controller create Broker",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "users",
                                                        "create-broker"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "0404b6f8-41ea-4088-9a0e-0e043c31fe03",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "users",
                                                                "create-broker"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "POST",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "create-customer",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "612fe9fe-cf93-4fd5-ab5e-8398e2b18150",
                                            "name": "Users Controller create Customer",
                                            "request": {
                                                "name": "Users Controller create Customer",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "users",
                                                        "create-customer"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "9c0b9431-eaa2-42d3-8101-dd0a2e33490e",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "users",
                                                                "create-customer"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "POST",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "Created",
                                                    "code": 201,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "id": "cd625769-8273-433e-88ca-3e41f575fb30",
                                    "name": "Users Controller get Users",
                                    "request": {
                                        "name": "Users Controller get Users",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "users"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "67a4a8ff-8cc4-4221-a1c5-be68e886ea83",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "users"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                }
                            ]
                        },
                        {
                            "name": "admins",
                            "description": "",
                            "item": [
                                {
                                    "id": "becf310e-ae9b-46cc-b3b1-55b550ada970",
                                    "name": "Admin Controller find All",
                                    "request": {
                                        "name": "Admin Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "admins"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "0de0816f-9ea2-4d4c-a947-d275ffadf594",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "admins"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "96754f33-f379-4f54-8bb4-233f2b3dbf27",
                                            "name": "Admin Controller find One",
                                            "request": {
                                                "name": "Admin Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "admins",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "bc289d8a-3458-4532-b1c8-3f42fc204d48",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "admins",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "190d9d86-d195-4ff6-8eff-576324053535",
                                            "name": "Admin Controller update",
                                            "request": {
                                                "name": "Admin Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "admins",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "0e29d56a-0cc8-4537-af81-b4da5652ecbf",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "admins",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "64e910fd-ad8e-4413-bc31-5a945990d429",
                                            "name": "Admin Controller remove",
                                            "request": {
                                                "name": "Admin Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "admins",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "ea641113-0105-4a9c-b8c6-4c1a10286b75",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "admins",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "broker-firms",
                            "description": "",
                            "item": [
                                {
                                    "id": "e2d390a4-ed24-4d24-b646-3fb24ee23a8a",
                                    "name": "Broker Firm Controller find All",
                                    "request": {
                                        "name": "Broker Firm Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "broker-firms"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "8dc335b7-225b-4e1e-a41f-5ac746bfd9b2",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "broker-firms"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "0af149d0-7aef-48d1-9888-5c2cc52746d2",
                                            "name": "Broker Firm Controller find One",
                                            "request": {
                                                "name": "Broker Firm Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "broker-firms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "001cceed-9854-4c41-808a-f752ab07c71d",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "broker-firms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "249bf83b-1053-46a5-bbf6-b31bc2e3d79c",
                                            "name": "Broker Firm Controller update",
                                            "request": {
                                                "name": "Broker Firm Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "broker-firms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "85757bba-e3b6-4507-8268-d55ab177a578",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "broker-firms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "6c2c4ac2-8e1b-45fb-a732-27857de09808",
                                            "name": "Broker Firm Controller remove",
                                            "request": {
                                                "name": "Broker Firm Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "broker-firms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "acaa47a6-0e8e-451c-88ea-a802f56c2860",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "broker-firms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "customers",
                            "description": "",
                            "item": [
                                {
                                    "id": "edadd558-4c0f-489f-964e-b426bc8a7a24",
                                    "name": "Customer Controller find All",
                                    "request": {
                                        "name": "Customer Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "customers"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "0ce97d6f-8856-46f0-8e54-519c4540af8f",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "customers"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "e6c0cef6-144a-461a-bc98-319389b68770",
                                            "name": "Customer Controller find One",
                                            "request": {
                                                "name": "Customer Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "customers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "05a96e27-cbd6-435e-9ba0-58be08ad92ff",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "customers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "dc845641-c491-452e-8a17-a627964d0517",
                                            "name": "Customer Controller update",
                                            "request": {
                                                "name": "Customer Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "customers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "473df8b0-8aac-4276-b548-630f802266e3",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "customers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "04915496-c2e4-4e71-9f56-3267046605b9",
                                            "name": "Customer Controller remove",
                                            "request": {
                                                "name": "Customer Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "customers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "f06c390c-bc59-4364-a86c-0043ddb1603d",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "customers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "rooms",
                            "description": "",
                            "item": [
                                {
                                    "id": "ad83ee5e-2879-42d5-a272-cf2d9e217d4d",
                                    "name": "Room Controller create",
                                    "request": {
                                        "name": "Room Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "rooms"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "ef5a6f52-96d9-4a13-9932-93e7123b9886",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "rooms"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "9971e417-c2e6-4e2e-8145-d4c121acb462",
                                    "name": "Room Controller find All",
                                    "request": {
                                        "name": "Room Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "rooms"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "de2be4bf-34da-4cfb-91dd-4fb99b1870f2",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "rooms"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "b404fb03-5bc6-4635-b6a9-fecf25128d8a",
                                            "name": "Room Controller find One",
                                            "request": {
                                                "name": "Room Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "rooms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "7aa713ec-479e-492c-80f6-1e11132be725",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "rooms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "9ed2fc80-74ed-4da3-b308-62f479d77969",
                                            "name": "Room Controller update",
                                            "request": {
                                                "name": "Room Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "rooms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "6a1cf743-1dc8-4100-a941-06d5d7233503",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "rooms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "245348a0-e492-4332-9428-5caef274c896",
                                            "name": "Room Controller remove",
                                            "request": {
                                                "name": "Room Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "rooms",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "8f0f41e0-5ab9-4b4b-a19b-49c695deac91",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "rooms",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "templates",
                            "description": "",
                            "item": [
                                {
                                    "id": "a7f5a99d-3ce5-44a8-9bac-971a08e21ab7",
                                    "name": "Template Controller create",
                                    "request": {
                                        "name": "Template Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "templates"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "68d8a111-ea94-462f-8530-9bac79adccbb",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "templates"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "bc74afe0-d2c6-4e57-bc9f-00eb89ef0993",
                                    "name": "Template Controller find All",
                                    "request": {
                                        "name": "Template Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "templates"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "115802e2-44bc-49e8-b92c-c7dff8f71408",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "templates"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "c6867bbb-aa4b-4be3-8de5-e43aacea936d",
                                            "name": "Template Controller find One",
                                            "request": {
                                                "name": "Template Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "ffbd26c5-17d3-49f4-a044-2ca5e3c8dd04",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "ffd692d6-444d-45b1-a210-04648b147ac0",
                                            "name": "Template Controller update",
                                            "request": {
                                                "name": "Template Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "9d4f56f1-8586-4051-a70a-2cdf1a07d331",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "116c6869-89ee-4f3a-86f7-69937d0a9600",
                                            "name": "Template Controller remove",
                                            "request": {
                                                "name": "Template Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "0d785bfc-0d2e-4a72-9022-1577a5437f92",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "properties",
                            "description": "",
                            "item": [
                                {
                                    "id": "0deefa89-780f-4800-9470-8283bd576b94",
                                    "name": "Property Controller create",
                                    "request": {
                                        "name": "Property Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "properties"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "c8cbfc54-4333-41e2-9a1d-ba5a7734832a",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "properties"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "99fc27ae-85b5-45e3-808d-f761e535a343",
                                    "name": "Property Controller find All",
                                    "request": {
                                        "name": "Property Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "properties"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "06c4ab7e-8adb-47b2-a16d-a8213615038e",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "properties"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "8592e0a1-40a1-4d43-96e8-7709274b3e68",
                                            "name": "Property Controller find One",
                                            "request": {
                                                "name": "Property Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "properties",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "6df5ee1c-bd72-496d-9c23-b0d089feb8ba",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "properties",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "749905e7-f816-4f21-b04e-29b8491ae2f6",
                                            "name": "Property Controller update",
                                            "request": {
                                                "name": "Property Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "properties",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "59cd2386-83d0-4d01-94fb-45cef5fce25a",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "properties",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "0363f969-36ba-4f8b-b87e-5ff5d3e3c31b",
                                            "name": "Property Controller remove",
                                            "request": {
                                                "name": "Property Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "properties",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "69298a7d-d784-47c0-8f99-f0ce86ab22be",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "properties",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "file",
                                    "description": "",
                                    "item": [
                                        {
                                            "name": "upload",
                                            "description": "",
                                            "item": [
                                                {
                                                    "id": "1c01c5ac-cc58-4bf6-aa56-d7e5d3abbabd",
                                                    "name": "Property Controller add File",
                                                    "request": {
                                                        "name": "Property Controller add File",
                                                        "description": {},
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "properties",
                                                                "file",
                                                                "upload"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "DELETE",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        },
                                                        "auth": null
                                                    },
                                                    "response": [
                                                        {
                                                            "id": "30d2d38c-3057-4178-b752-85d3f969c1be",
                                                            "originalRequest": {
                                                                "url": {
                                                                    "path": [
                                                                        "api",
                                                                        "v1",
                                                                        "properties",
                                                                        "file",
                                                                        "upload"
                                                                    ],
                                                                    "host": [
                                                                        "{{baseUrl}}"
                                                                    ],
                                                                    "query": [],
                                                                    "variable": []
                                                                },
                                                                "header": [
                                                                    {
                                                                        "key": "Content-Type",
                                                                        "value": "application/json"
                                                                    }
                                                                ],
                                                                "method": "DELETE",
                                                                "body": {
                                                                    "mode": "raw",
                                                                    "raw": "{}",
                                                                    "options": {
                                                                        "raw": {
                                                                            "headerFamily": "json",
                                                                            "language": "json"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "status": "OK",
                                                            "code": 200,
                                                            "header": [],
                                                            "cookie": [],
                                                            "_postman_previewlanguage": "text"
                                                        }
                                                    ],
                                                    "event": [],
                                                    "protocolProfileBehavior": {
                                                        "disableBodyPruning": true
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "name": "{id}",
                                            "description": "",
                                            "item": [
                                                {
                                                    "id": "dce9694a-796c-4871-88d9-03cb9004e1af",
                                                    "name": "Property Controller remove File",
                                                    "request": {
                                                        "name": "Property Controller remove File",
                                                        "description": {},
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "properties",
                                                                "file",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": [
                                                                {
                                                                    "type": "any",
                                                                    "value": "<string>",
                                                                    "key": "id",
                                                                    "disabled": false,
                                                                    "description": {
                                                                        "content": "(Required) ",
                                                                        "type": "text/plain"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "method": "DELETE",
                                                        "body": {},
                                                        "auth": null
                                                    },
                                                    "response": [
                                                        {
                                                            "id": "3e57845b-3f1e-406c-8bdb-33b13a69782f",
                                                            "originalRequest": {
                                                                "url": {
                                                                    "path": [
                                                                        "api",
                                                                        "v1",
                                                                        "properties",
                                                                        "file",
                                                                        ":id"
                                                                    ],
                                                                    "host": [
                                                                        "{{baseUrl}}"
                                                                    ],
                                                                    "query": [],
                                                                    "variable": []
                                                                },
                                                                "method": "DELETE",
                                                                "body": {}
                                                            },
                                                            "status": "OK",
                                                            "code": 200,
                                                            "header": [],
                                                            "cookie": [],
                                                            "_postman_previewlanguage": "text"
                                                        }
                                                    ],
                                                    "event": [],
                                                    "protocolProfileBehavior": {
                                                        "disableBodyPruning": true
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "tasks",
                            "description": "",
                            "item": [
                                {
                                    "id": "792ab1e7-22b0-4601-bb32-597295a31162",
                                    "name": "Task Controller create",
                                    "request": {
                                        "name": "Task Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "tasks"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "ebd4850a-a61a-4561-a59a-44ca26357c9d",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "tasks"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "75970219-7497-49f7-b911-5513b759dc3f",
                                    "name": "Task Controller find All",
                                    "request": {
                                        "name": "Task Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "tasks"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "0beb1bd5-e9a1-4a5f-aa30-13a9d6bd7b50",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "tasks"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "06985c1e-f499-4f01-b35f-70b5c3d23922",
                                            "name": "Task Controller find One",
                                            "request": {
                                                "name": "Task Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "tasks",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "7828dc79-1ac3-4d8b-9563-b10cde1bf764",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "tasks",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "b5dfa509-b8f4-415d-af76-86814f3fa04f",
                                            "name": "Task Controller update",
                                            "request": {
                                                "name": "Task Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "tasks",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "83220a06-bb02-462c-b6aa-5b57842796db",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "tasks",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "1fe92d5f-5032-4b99-99dc-ce3f2d04e5e7",
                                            "name": "Task Controller remove",
                                            "request": {
                                                "name": "Task Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "tasks",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "f80a320c-cc49-4f4f-91fb-d21d66035623",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "tasks",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "advertises",
                            "description": "",
                            "item": [
                                {
                                    "id": "eb7275a5-c421-4f7c-8854-7ae71a99400d",
                                    "name": "Advertise Controller create",
                                    "request": {
                                        "name": "Advertise Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "advertises"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "2bfff6fd-a5aa-4796-beb7-2302b7a2620f",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "advertises"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "c4b9d519-bd10-4830-a9db-fd086531e6f6",
                                    "name": "Advertise Controller find All",
                                    "request": {
                                        "name": "Advertise Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "advertises"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "b1750313-1e00-425e-8d79-0e49e85b4330",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "advertises"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "a9578331-7388-4cc0-9da4-73d0eaeb9a83",
                                            "name": "Advertise Controller find One",
                                            "request": {
                                                "name": "Advertise Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "advertises",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "2fc618a0-33a2-4777-b1bd-75f22c069376",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "advertises",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "cfa00314-9efe-46b9-a57f-e4a8913a7123",
                                            "name": "Advertise Controller update",
                                            "request": {
                                                "name": "Advertise Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "advertises",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "9b9e1774-b9f3-4eda-ad6a-e1634724b2a6",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "advertises",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "7fd9b862-2e27-4614-bc63-a497c2d2dd24",
                                            "name": "Advertise Controller remove",
                                            "request": {
                                                "name": "Advertise Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "advertises",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "835c7ab1-68b2-4c7f-a37f-84a5f8e6c371",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "advertises",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BrokerBids",
                            "description": "",
                            "item": [
                                {
                                    "id": "10446b50-bf2d-4805-b2db-687d037bbbcc",
                                    "name": "Broker Bid Controller create",
                                    "request": {
                                        "name": "Broker Bid Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "BrokerBids"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "178c881e-0dd5-4997-96a6-054a46652054",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "BrokerBids"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "4ca9a911-6d8b-43ab-a572-06320bed8f74",
                                    "name": "Broker Bid Controller find All",
                                    "request": {
                                        "name": "Broker Bid Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "BrokerBids"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "4391de02-b744-4512-88a4-b552d6e633c5",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "BrokerBids"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "ed595180-e16e-42e5-9963-6578ef2ee582",
                                            "name": "Broker Bid Controller find One",
                                            "request": {
                                                "name": "Broker Bid Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "BrokerBids",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "0b79fd50-080e-4bf5-937c-e5cfa17e28a7",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "BrokerBids",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "16eedbc9-55f5-45f7-a203-a94a5c3457d7",
                                            "name": "Broker Bid Controller update",
                                            "request": {
                                                "name": "Broker Bid Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "BrokerBids",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "21385bbc-73fb-4737-aa79-38185fac9418",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "BrokerBids",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "ec043e6b-abad-42ff-8eee-e7bcdb95625c",
                                            "name": "Broker Bid Controller remove",
                                            "request": {
                                                "name": "Broker Bid Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "BrokerBids",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "143e12f0-8725-4fab-9967-cc3893067711",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "BrokerBids",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "favourite-templates",
                            "description": "",
                            "item": [
                                {
                                    "id": "90b001af-3542-4db1-b915-cb149101765e",
                                    "name": "Favourite Template Controller create",
                                    "request": {
                                        "name": "Favourite Template Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "favourite-templates"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "c41c1c9b-8eaf-4ad4-91af-68c558f560a0",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "favourite-templates"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "26169d62-3194-40b2-a5ae-cc1c1babc7bf",
                                    "name": "Favourite Template Controller find All",
                                    "request": {
                                        "name": "Favourite Template Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "favourite-templates"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "7f52983e-516a-42b3-a04e-809b007e71f2",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "favourite-templates"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "89b57636-0c93-4be2-9959-a8274b0755e8",
                                            "name": "Favourite Template Controller find One",
                                            "request": {
                                                "name": "Favourite Template Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "favourite-templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "eba3432d-4313-4aaf-94c6-f478d7fe0053",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "favourite-templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "477135f5-5fc0-458b-bfed-4a75dc14227b",
                                            "name": "Favourite Template Controller update",
                                            "request": {
                                                "name": "Favourite Template Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "favourite-templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "6afef807-a20b-4657-9197-9e467ad4daea",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "favourite-templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "75d1b5a0-31cb-4a84-a5da-026ad2b4ea6b",
                                            "name": "Favourite Template Controller remove",
                                            "request": {
                                                "name": "Favourite Template Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "favourite-templates",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "a77bc5c5-dc1c-4b34-a44f-c0e0382b7961",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "favourite-templates",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "property-documents",
                            "description": "",
                            "item": [
                                {
                                    "id": "7677878c-72d9-4a24-ad73-5b089b433899",
                                    "name": "Property Document Controller create",
                                    "request": {
                                        "name": "Property Document Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "property-documents"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "9d8098aa-ebf1-4553-8a97-c359edb2923a",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-documents"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "b09eb701-298b-44c4-b981-cd34686f238b",
                                    "name": "Property Document Controller find All",
                                    "request": {
                                        "name": "Property Document Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "property-documents"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "b93c19f9-aa64-4ad5-bbee-e52a0941d6dc",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-documents"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "2993a35a-3b31-435a-b162-a1d6e384bdc7",
                                            "name": "Property Document Controller find One",
                                            "request": {
                                                "name": "Property Document Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-documents",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "e2ecd4c1-c80a-48d9-94ff-960b07a12a67",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-documents",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "c9025b43-686d-4c6a-8939-dc77b74f5bc1",
                                            "name": "Property Document Controller update",
                                            "request": {
                                                "name": "Property Document Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-documents",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "3d891d65-658b-4f05-a4f7-38aa9fd0dd59",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-documents",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "49239464-d778-4fdc-91f0-8ecd2c8920e2",
                                            "name": "Property Document Controller remove",
                                            "request": {
                                                "name": "Property Document Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-documents",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "219c5d20-6953-489c-a5f8-4916dcf24739",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-documents",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "property-analytics",
                            "description": "",
                            "item": [
                                {
                                    "id": "3e32f413-32ef-4863-b18e-a942cff48c6d",
                                    "name": "Property Analytics Controller create",
                                    "request": {
                                        "name": "Property Analytics Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "property-analytics"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "bffa5fe5-90c0-4708-81ed-760fcd8e054a",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-analytics"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "27f434b0-bd66-4d07-b16e-a85e484e6785",
                                    "name": "Property Analytics Controller find All",
                                    "request": {
                                        "name": "Property Analytics Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "property-analytics"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "96938124-4351-4152-97f0-2e38b68a26ec",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-analytics"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "0f25e200-08f5-48cf-9226-e82d0e0308ab",
                                            "name": "Property Analytics Controller find One",
                                            "request": {
                                                "name": "Property Analytics Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-analytics",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "b36e6fad-d3e3-45c7-9305-d99f797b8bd1",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-analytics",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "619f630c-5a25-4a72-a145-9bb3bbf99c7e",
                                            "name": "Property Analytics Controller update",
                                            "request": {
                                                "name": "Property Analytics Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-analytics",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "c6aa5610-0963-4855-b189-592a9dff1a10",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-analytics",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "02f4f5be-78cb-4fcd-9e79-1646f9bf4ebd",
                                            "name": "Property Analytics Controller remove",
                                            "request": {
                                                "name": "Property Analytics Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "property-analytics",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "e22b09ae-078c-4844-a064-3cf290735835",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "property-analytics",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "subscription",
                            "description": "",
                            "item": [
                                {
                                    "id": "d6f02016-ad0f-4b52-8629-13cb46a8bb72",
                                    "name": "Subscription Controller create",
                                    "request": {
                                        "name": "Subscription Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "subscription"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "73e6cfd0-3870-4d90-b1c7-2cacd6daae5b",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscription"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "6f702713-72ca-41e6-b494-74239187b5c6",
                                    "name": "Subscription Controller find All",
                                    "request": {
                                        "name": "Subscription Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "subscription"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "0317b5b0-b0bc-4eb6-9b47-2a0b254aafed",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscription"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "1dceb09e-3fa7-47c2-9b96-881ddc21a12a",
                                            "name": "Subscription Controller find One",
                                            "request": {
                                                "name": "Subscription Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscription",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "355293d1-4a19-44b7-b749-363cc013a16b",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscription",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "56fda8c1-3ef1-4820-a18c-a7ea37359edf",
                                            "name": "Subscription Controller update",
                                            "request": {
                                                "name": "Subscription Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscription",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "c267e10f-0d44-4b37-82a1-2d0cf7ef780f",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscription",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "77696f64-9fa5-4e5b-9b49-edffe277a2fd",
                                            "name": "Subscription Controller remove",
                                            "request": {
                                                "name": "Subscription Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscription",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "b134d389-4f3a-4419-93fc-dac9e80e87eb",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscription",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "subscripton-plan",
                            "description": "",
                            "item": [
                                {
                                    "id": "6767f5ad-c254-459b-8997-bb24140ac3fb",
                                    "name": "Subscripton Plan Controller create",
                                    "request": {
                                        "name": "Subscripton Plan Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "subscripton-plan"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "7823bf68-d3d3-4163-90d4-7516fd0c6b2d",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscripton-plan"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "ac150eef-a374-4ac3-a889-1399ff72bf3b",
                                    "name": "Subscripton Plan Controller find All",
                                    "request": {
                                        "name": "Subscripton Plan Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "subscripton-plan"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "130c151a-ef62-4347-a957-70ca6ea2c538",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscripton-plan"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "d5657432-62db-4b64-bb59-7986b0c858c8",
                                            "name": "Subscripton Plan Controller find One",
                                            "request": {
                                                "name": "Subscripton Plan Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscripton-plan",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "b244a0f8-b8be-4fe2-b97b-e4345de0a97a",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscripton-plan",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "f5e629dd-5c08-4ea8-a10e-9da9de4f0f80",
                                            "name": "Subscripton Plan Controller update",
                                            "request": {
                                                "name": "Subscripton Plan Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscripton-plan",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "7195fb9f-a509-44d9-b231-474390b1e325",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscripton-plan",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "5f1dd6ac-3f14-499e-bccb-37831372211a",
                                            "name": "Subscripton Plan Controller remove",
                                            "request": {
                                                "name": "Subscripton Plan Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "subscripton-plan",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "75809979-d0c5-4d09-a9d8-49aeecfe00ea",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "subscripton-plan",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "blogs",
                            "description": "",
                            "item": [
                                {
                                    "id": "d0c4bbc7-7f03-46a2-9206-d3bfc9ad0d68",
                                    "name": "Blog Controller create",
                                    "request": {
                                        "name": "Blog Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "blogs"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "d0b561a4-534d-4794-984a-85e64fcd04a7",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "blogs"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "53e7d53a-59c7-4e04-a42f-37df6cfbd607",
                                    "name": "Blog Controller find All",
                                    "request": {
                                        "name": "Blog Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "blogs"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "b52acce2-661f-4860-a3a5-bd4017a9383a",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "blogs"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "c81c2189-1345-49dc-806b-40ea104a9cb8",
                                            "name": "Blog Controller find One",
                                            "request": {
                                                "name": "Blog Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "blogs",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "e1059c63-7458-417b-96a3-45fbeb2bcb5c",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "blogs",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "dc61fac4-0c11-4a41-a7c8-d15b7056c65f",
                                            "name": "Blog Controller update",
                                            "request": {
                                                "name": "Blog Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "blogs",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "0b469efd-3f5c-422c-9e66-10541e6a014f",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "blogs",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "f9a096ab-6327-4f66-8cba-bc697bcf474b",
                                            "name": "Blog Controller remove",
                                            "request": {
                                                "name": "Blog Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "blogs",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "cf7b3397-53db-4a3e-bfc4-367832f03b47",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "blogs",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "brokers",
                            "description": "",
                            "item": [
                                {
                                    "id": "554bfa30-09f8-4bdb-b084-9a6415d7c16f",
                                    "name": "Broker Controller find All",
                                    "request": {
                                        "name": "Broker Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "brokers"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "8dd7bdaa-8d8f-44f0-a609-f7fcb38aaa64",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "brokers"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "d6243186-43fa-4119-8614-c782813834e1",
                                            "name": "Broker Controller find One",
                                            "request": {
                                                "name": "Broker Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "brokers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "caa4969e-4ac2-44d8-89de-5809ff7b946f",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "brokers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "bd5d84b3-b91f-4e4c-90a6-65a04683b54e",
                                            "name": "Broker Controller update",
                                            "request": {
                                                "name": "Broker Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "brokers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "abcb6456-c2e5-49e3-8248-3f06f5ffe473",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "brokers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "e831d0dc-4d58-4e76-a596-e8b6ca229d2a",
                                            "name": "Broker Controller remove",
                                            "request": {
                                                "name": "Broker Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "brokers",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "2714a60f-7d85-4ae6-a2af-f49ba39242d8",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "brokers",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "analytics",
                            "description": "",
                            "item": [
                                {
                                    "name": "admin-overview",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "e67c29ce-ab2d-499f-be00-f86d788f812b",
                                            "name": "Analytics Controller find All",
                                            "request": {
                                                "name": "Analytics Controller find All",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "analytics",
                                                        "admin-overview"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "1ea62545-bfca-4f8c-83f2-8cca0b5aa463",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "analytics",
                                                                "admin-overview"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "admin-economic",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "62a07147-f463-495e-a176-38488e2c73d5",
                                            "name": "Analytics Controller admin Economic",
                                            "request": {
                                                "name": "Analytics Controller admin Economic",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "analytics",
                                                        "admin-economic"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "072ce6bc-e0ec-42f1-80b2-53c88292645b",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "analytics",
                                                                "admin-economic"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "common-overview",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "48434272-f60d-4131-85c0-087f86ea568a",
                                            "name": "Analytics Controller common Overview",
                                            "request": {
                                                "name": "Analytics Controller common Overview",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "analytics",
                                                        "common-overview"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "2adba518-e874-4f9d-aacd-e01c10cf0a6a",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "analytics",
                                                                "common-overview"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "name": "brokerFirm-overview",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "db5ac010-0b28-4f56-9ad4-2a6681faa3f7",
                                            "name": "Analytics Controller broker Firm Overview",
                                            "request": {
                                                "name": "Analytics Controller broker Firm Overview",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "analytics",
                                                        "brokerFirm-overview"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "d66589e8-6b51-428a-b5a8-2fd591b052af",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "analytics",
                                                                "brokerFirm-overview"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "bankinfo",
                            "description": "",
                            "item": [
                                {
                                    "id": "2eb07e4a-2ad4-424c-89dd-52165dd78b95",
                                    "name": "Bankinfo Controller create",
                                    "request": {
                                        "name": "Bankinfo Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "bankinfo"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "acac295c-064e-4a9e-9212-8014981e33d6",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "bankinfo"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "93b8e391-aad8-4331-99ff-34f0c1e3c060",
                                    "name": "Bankinfo Controller find All",
                                    "request": {
                                        "name": "Bankinfo Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "bankinfo"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "10b837e0-20ff-4330-8256-959fef7f97cb",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "bankinfo"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "75e49b61-0164-4eeb-ac68-bed3a771591b",
                                            "name": "Bankinfo Controller find One",
                                            "request": {
                                                "name": "Bankinfo Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "bankinfo",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "9f8f4bac-de0a-48dc-9b60-2d8133d8ffda",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "bankinfo",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "c6392e5f-5bfd-40d9-a91e-ba1e83f536e8",
                                            "name": "Bankinfo Controller update",
                                            "request": {
                                                "name": "Bankinfo Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "bankinfo",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "7d3c2d05-8463-493e-9555-b275eab47bac",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "bankinfo",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "3821fdd5-39cf-4ecb-bca8-2944bb2d1191",
                                            "name": "Bankinfo Controller remove",
                                            "request": {
                                                "name": "Bankinfo Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "bankinfo",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "d8e1f55f-abe9-4ae0-ab0a-4c86456db801",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "bankinfo",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "webhook",
                            "description": "",
                            "item": [
                                {
                                    "id": "38928207-df1d-4f32-8ce8-caf0b85ad48b",
                                    "name": "Webhook Controller handle Webhook",
                                    "request": {
                                        "name": "Webhook Controller handle Webhook",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "webhook"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "disabled": false,
                                                "description": {
                                                    "content": "(Required) ",
                                                    "type": "text/plain"
                                                },
                                                "key": "stripe-signature",
                                                "value": "<string>"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "3baf0274-d1e1-4345-a59f-c424318b1ad6",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "webhook"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "disabled": false,
                                                        "description": {
                                                            "content": "(Required) ",
                                                            "type": "text/plain"
                                                        },
                                                        "key": "stripe-signature",
                                                        "value": "<string>"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {}
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                }
                            ]
                        },
                        {
                            "name": "booking",
                            "description": "",
                            "item": [
                                {
                                    "id": "1a5826f0-ab96-413b-9e81-b85d6b543d90",
                                    "name": "Booking Controller create",
                                    "request": {
                                        "name": "Booking Controller create",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "booking"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "header": [
                                            {
                                                "key": "Content-Type",
                                                "value": "application/json"
                                            }
                                        ],
                                        "method": "POST",
                                        "body": {
                                            "mode": "raw",
                                            "raw": "{}",
                                            "options": {
                                                "raw": {
                                                    "headerFamily": "json",
                                                    "language": "json"
                                                }
                                            }
                                        },
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "e4e26c47-a252-409b-9338-e9d23f20a231",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "booking"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "POST",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                }
                                            },
                                            "status": "Created",
                                            "code": 201,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "id": "5d9c3267-4a5a-4ca3-beda-6cdd530a9614",
                                    "name": "Booking Controller find All",
                                    "request": {
                                        "name": "Booking Controller find All",
                                        "description": {},
                                        "url": {
                                            "path": [
                                                "api",
                                                "v1",
                                                "booking"
                                            ],
                                            "host": [
                                                "{{baseUrl}}"
                                            ],
                                            "query": [],
                                            "variable": []
                                        },
                                        "method": "GET",
                                        "body": {},
                                        "auth": null
                                    },
                                    "response": [
                                        {
                                            "id": "af0b1476-47cb-4377-be59-f87c66b9cb35",
                                            "originalRequest": {
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "booking"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": []
                                                },
                                                "method": "GET",
                                                "body": {}
                                            },
                                            "status": "OK",
                                            "code": 200,
                                            "header": [],
                                            "cookie": [],
                                            "_postman_previewlanguage": "text"
                                        }
                                    ],
                                    "event": [],
                                    "protocolProfileBehavior": {
                                        "disableBodyPruning": true
                                    }
                                },
                                {
                                    "name": "{id}",
                                    "description": "",
                                    "item": [
                                        {
                                            "id": "d28aa626-5934-4f9b-ac58-a1e6b74755b5",
                                            "name": "Booking Controller find One",
                                            "request": {
                                                "name": "Booking Controller find One",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "booking",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "GET",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "7abfa5cd-0726-48a5-98b2-2d52c9b25348",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "booking",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "GET",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "edb39fb2-c461-4f2f-b7ec-42bbcfeab2c7",
                                            "name": "Booking Controller update",
                                            "request": {
                                                "name": "Booking Controller update",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "booking",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "header": [
                                                    {
                                                        "key": "Content-Type",
                                                        "value": "application/json"
                                                    }
                                                ],
                                                "method": "PATCH",
                                                "body": {
                                                    "mode": "raw",
                                                    "raw": "{}",
                                                    "options": {
                                                        "raw": {
                                                            "headerFamily": "json",
                                                            "language": "json"
                                                        }
                                                    }
                                                },
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "3aa6a7ac-5f1f-46a1-801a-7b3176021936",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "booking",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "header": [
                                                            {
                                                                "key": "Content-Type",
                                                                "value": "application/json"
                                                            }
                                                        ],
                                                        "method": "PATCH",
                                                        "body": {
                                                            "mode": "raw",
                                                            "raw": "{}",
                                                            "options": {
                                                                "raw": {
                                                                    "headerFamily": "json",
                                                                    "language": "json"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        },
                                        {
                                            "id": "2d5144b8-ea22-46d6-a6f0-e230543c7f4c",
                                            "name": "Booking Controller remove",
                                            "request": {
                                                "name": "Booking Controller remove",
                                                "description": {},
                                                "url": {
                                                    "path": [
                                                        "api",
                                                        "v1",
                                                        "booking",
                                                        ":id"
                                                    ],
                                                    "host": [
                                                        "{{baseUrl}}"
                                                    ],
                                                    "query": [],
                                                    "variable": [
                                                        {
                                                            "type": "any",
                                                            "value": "<string>",
                                                            "key": "id",
                                                            "disabled": false,
                                                            "description": {
                                                                "content": "(Required) ",
                                                                "type": "text/plain"
                                                            }
                                                        }
                                                    ]
                                                },
                                                "method": "DELETE",
                                                "body": {},
                                                "auth": null
                                            },
                                            "response": [
                                                {
                                                    "id": "608f68c4-3803-47e1-b7bc-748508ce4a36",
                                                    "originalRequest": {
                                                        "url": {
                                                            "path": [
                                                                "api",
                                                                "v1",
                                                                "booking",
                                                                ":id"
                                                            ],
                                                            "host": [
                                                                "{{baseUrl}}"
                                                            ],
                                                            "query": [],
                                                            "variable": []
                                                        },
                                                        "method": "DELETE",
                                                        "body": {}
                                                    },
                                                    "status": "OK",
                                                    "code": 200,
                                                    "header": [],
                                                    "cookie": [],
                                                    "_postman_previewlanguage": "text"
                                                }
                                            ],
                                            "event": [],
                                            "protocolProfileBehavior": {
                                                "disableBodyPruning": true
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "event": [],
    "variable": [
        {
            "key": "baseUrl",
            "value": "/"
        }
    ],
    "info": {
        "_postman_id": "421bc9ea-3672-4a29-bce6-03747b991b9b",
        "name": "Bajram",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
        "description": {
            "content": "The Bajram API description",
            "type": "text/plain"
        }
    }
}