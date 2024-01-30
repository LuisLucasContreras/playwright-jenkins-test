import { test, expect } from '@playwright/test';

test('Flujo de creación de ticket cliente', async ({ page }) => {

  await page.goto('http://localhost:3000/');
  await page.goto('https://authdev.nubisk.cloud/auth/realms/master/protocol/openid-connect/auth?client_id=gestion-front&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=e09c0dcd-57ff-4ce2-ad30-d4cd2b282468&response_mode=fragment&response_type=code&scope=openid&nonce=0a2de683-86be-4b48-8fe2-1546a44425c2');
  
  await page.getByLabel('Usuario o email').click();
  await page.getByLabel('Usuario o email').fill('clienteticket');

  await page.getByLabel('Contraseña').click();
  await page.getByLabel('Contraseña').fill('Aa123456!1');

  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.locator('section').getByRole('link', { name: 'Mis Tickets' }).click();  await page.waitForTimeout(1000)

  await page.getByTitle('crear').click();  await page.waitForTimeout(1000)

  const nameTest = nameGeneratorTest('TicketClienteTest')

  await page.getByLabel('Asunto *').fill(`${nameTest}`);  await page.waitForTimeout(1000)

  await page.getByLabel('Tipo Ticket *').first().click();  await page.waitForTimeout(1000)
  await page.getByRole('option', { name: 'Tipo One' }).click();  await page.waitForTimeout(1000)

  await page.getByLabel('Sub Tipo Ticket').first().click();  await page.waitForTimeout(1000)
  await page.getByRole('option', { name: 'SubTypeOne' }).click();  await page.waitForTimeout(1000)
  

  await page.locator('#descripcionLarga_rte-edit-view').click();  await page.waitForTimeout(1000)

  await page.locator('#descripcionLarga_rte-edit-view').fill('Mensaje');
  
  await page.getByRole('button', { name: 'Crear' }).click();await page.locator('body').click();


  await page.getByLabel(`${nameTest} encabezado`).dblclick();

  await page.getByText(nameTest).click();
 
 
});

const nameGeneratorTest = (name : string) => {

  const fecha   = new Date();
  const mes     = fecha.getMonth() + 1; // Los meses van de 0 a 11
  const dia     = fecha.getDate();
  const hora    = fecha.getHours();
  const minutos = fecha.getMinutes();


  return `${name} ${mes}-${dia} ${hora}${minutos}`

}

