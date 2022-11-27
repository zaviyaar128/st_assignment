const { I } = inject();

Given('Login with username and password', (table) => {
    I.amOnPage('http://localhost:3000/');
    const cells = table.rows[1].cells;
    I.fillField("username",cells[0].value);
    I.fillField("password",cells[1].value);
    I.wait(5);
    I.click('Sign in');
    I.wait(3);
  });

  When('I go to Logout process', (table) => {
    I.click('gear icon');
    I.wait(5);
    I.click('Sign out');
    I.wait(5);
  });

  Then('I should be loged out', (table) => {

  });
  
  When('I go to Save Changes process', (table) => {
    I.click('gear icon');
    I.wait(5);
    I.click('Admin settings');
    I.wait(5);
    I.click('Databases');
    I.wait(5);
    I.click('Sample');
    I.wait(5);
    I.fillField("Display name","Sample1");
    I.wait(5);
    I.click('Save changes');
    I.wait(5);    
  });

  Then('changes should be saved', (table) => {
    I.click('SampleSample1')
  });

  When('I go to Remove this Database process', (table) => {
    I.click('gear icon');
    I.wait(3);
    I.click('Admin settings');
    I.wait(3);
    I.click('Databases');
    I.wait(3);
    I.click('sam');
    I.wait(3);
    I.click('Remove this database');
    I.wait(3);
  });
  Then('a confirmation box will be shown', (table) => {
    I.fillField('.Form-input','sam');
    I.wait(5);
    I.click('Delete');
    I.wait(10);
  })
  When('I go to discard saved field values process', (table) => {
    I.click('gear icon');
    I.wait(3);
    I.click('Admin settings');
    I.wait(3);
    I.click('Databases');
    I.wait(3);
    I.click('sam1');
    I.wait(3);
    I.click('Discard saved field values');
    I.wait(3);
  })
  Then('warning box should be displayed', (table) => {
    I.click('Yes');
    I.wait(10);
  })
  When('I go to create process', (table) => {
    I.click('ellipsis icon');
    I.wait(4);
    I.click('New collection');
    I.wait(5);
    I.fillField('name','new-one');
    I.wait(5);
    I.click('Create');
    I.wait(5);
  })
  Then('a new collection should be created', (table) => {
    I.click('calendar icon');
    I.wait(5);
  })
  When('I go to the create event process', (table) => {
    I.click('new');
    I.wait(5);
    I.click('calendar icon');
    I.wait(5);
    I.click('Add an event');
    I.wait(5);
    I.fillField('name','new-one');
    I.wait(5);
    I.fillField('//*[@id="formField-timestamp"]/div[2]/div/input','12/3/2022');
    I.wait(5);
    I.click('Create');
    I.wait(5);
  })
  Then('an event should be created', (table) => {
    I.click('new-one');
    I.wait(5);
  })
  When('I go to create dashboard process', (table) => {
    I.click('New');
    I.wait(4);
    I.click('dashboard icon');
    I.wait(4);
    I.fillField('name','new-one');
    I.wait(5);
    I.click('Create');
    I.wait(10);
  })
  Then('a new dashboard should be created', (table) => {
    I.click('.Icon-string');
    I.wait(5);
  })
  When('I go to archive a collection process', (table) => {
    I.click('sa');
    I.wait(4);
    I.click('//*[@id="root"]/div/div/main/div/div/div[1]/div[2]/div[2]/button');
    I.wait(4);
    I.click('Archive');
    I.wait(5);
  })
  Then('a archive confirmation box will be shown', (table) => {
    I.click('Archive');
    I.wait(10);
  })